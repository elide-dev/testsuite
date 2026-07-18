// eshost runtime for the Elide host. Prepended to every compiled test.
// The agent launches Elide with `-X polyglot.js.test262-mode=true`, which
// exposes graal-js's native $262 (createRealm/detachArrayBuffer/evalScript/
// gc/agent) at globalThis["$262"]; wrap it in the eshost $262 shape.
if (typeof globalThis.print !== "function") {
  globalThis.print = function () {
    console.log(Array.prototype.join.call(arguments, " "));
  };
}
// Elide defines a launcher convenience global `arguments` (script args, like
// the graal-js shell); test262 global/eval-code tests assert its absence.
delete globalThis.arguments;
var elideNative262 = globalThis["\x24262"];
var $262 = {
  global: globalThis,
  destroy: function () {},
  // Per test262 INTERPRETING.md, $262.evalScript must evaluate `code` as a
  // script and return its completion value, propagating any error. The prior
  // implementation caught the error and returned a `{type, value}` record, so
  // `assert.throws(..., () => $262.evalScript(...))` saw no exception — breaking
  // the language/global-code script-declaration tests (SyntaxError/TypeError on
  // redeclaration over restricted/non-configurable/non-extensible globals).
  evalScript: function (code) {
    return elideNative262.evalScript(code);
  },
  getGlobal: function (name) {
    return this.global[name];
  },
  setGlobal: function (name, value) {
    this.global[name] = value;
  },
  IsHTMLDDA: function () {
    return {};
  },
  source: $SOURCE,
  createRealm: function (options) {
    options = options || {};
    var realm = elideNative262.createRealm();
    realm.evalScript($262.source);
    realm.source = $262.source;
    realm.getGlobal = $262.getGlobal;
    realm.setGlobal = $262.setGlobal;
    realm.destroy = function () {
      if (options.destroy) {
        options.destroy();
      }
    };
    var globals = options.globals || {};
    for (var glob in globals) {
      realm.global[glob] = globals[glob];
    }
    return realm;
  },
  detachArrayBuffer: function (buffer) {
    return elideNative262.detachArrayBuffer(buffer);
  },
  gc: function () {
    return elideNative262.gc();
  },
  agent: elideNative262 ? elideNative262.agent : undefined,
  AbstractModuleSource: elideNative262 ? elideNative262.AbstractModuleSource : undefined,
};
