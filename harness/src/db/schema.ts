import type { Database } from "bun:sqlite";

export const SCHEMA = `
CREATE TABLE IF NOT EXISTS runs (
  id            INTEGER PRIMARY KEY,
  workload      TEXT NOT NULL,
  semver        TEXT NOT NULL,
  digest        TEXT NOT NULL,
  suite_version TEXT,
  started_at    TEXT,
  finished_at   TEXT,
  UNIQUE (workload, semver, digest)
);
CREATE TABLE IF NOT EXISTS results (
  run_id    INTEGER NOT NULL REFERENCES runs(id) ON DELETE CASCADE,
  test_id   TEXT NOT NULL,
  status    TEXT NOT NULL,
  message   TEXT,
  signature TEXT,
  features  TEXT
);
CREATE INDEX IF NOT EXISTS ix_results_run_status ON results(run_id, status);
CREATE INDEX IF NOT EXISTS ix_results_signature  ON results(signature);
CREATE INDEX IF NOT EXISTS ix_results_run_test   ON results(run_id, test_id);
`;

export function applySchema(db: Database): void {
  db.exec("PRAGMA foreign_keys = ON;");
  db.exec(SCHEMA);
}

export function resetDb(db: Database): void {
  db.exec("PRAGMA foreign_keys = ON;");
  db.exec("DROP TABLE IF EXISTS results; DROP TABLE IF EXISTS runs;");
  db.exec(SCHEMA);
}
