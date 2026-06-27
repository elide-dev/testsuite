type MaybeAsyncIterable<T> = AsyncIterable<T> | Iterable<T>;

function isAsyncIterable<T>(value: MaybeAsyncIterable<T>): value is AsyncIterable<T> {
  return Symbol.asyncIterator in value;
}

async function* toAsyncIterable<T>(value: MaybeAsyncIterable<T>): AsyncIterable<T> {
  if (isAsyncIterable(value)) {
    yield* value;
    return;
  }
  yield* value;
}

export function boundedParallelism(requested: number, total: number): number {
  if (total <= 0) return 0;
  return Math.max(1, Math.min(Math.trunc(requested) || 1, total));
}

export function shardItems<T>(items: T[], shardCount: number): T[][] {
  const count = boundedParallelism(shardCount, items.length);
  const shards = Array.from({ length: count }, () => [] as T[]);
  for (let i = 0; i < items.length; i++) {
    shards[i % count].push(items[i]);
  }
  return shards;
}

export async function* mergeAsyncIterables<T>(iterables: AsyncIterable<T>[]): AsyncIterable<T> {
  const iterators = iterables.map((iterable) => iterable[Symbol.asyncIterator]());
  const pending = new Map<number, Promise<{ index: number; result: IteratorResult<T> }>>();
  const queueNext = (index: number): void => {
    pending.set(index, iterators[index].next().then((result) => ({ index, result })));
  };

  for (let i = 0; i < iterators.length; i++) queueNext(i);

  try {
    while (pending.size > 0) {
      const { index, result } = await Promise.race(pending.values());
      pending.delete(index);
      if (result.done) continue;
      yield result.value;
      queueNext(index);
    }
  } finally {
    await Promise.allSettled(iterators.map((iterator) => iterator.return?.()));
  }
}

export async function* runTaskPool<TTask, TResult>(
  tasks: TTask[],
  concurrency: number,
  runTask: (task: TTask, index: number) => MaybeAsyncIterable<TResult> | Promise<MaybeAsyncIterable<TResult>>,
): AsyncIterable<TResult> {
  const workerCount = boundedParallelism(concurrency, tasks.length);
  let next = 0;

  async function* worker(): AsyncIterable<TResult> {
    for (;;) {
      const index = next++;
      if (index >= tasks.length) return;
      yield* toAsyncIterable(await runTask(tasks[index], index));
    }
  }

  yield* mergeAsyncIterables(Array.from({ length: workerCount }, () => worker()));
}
