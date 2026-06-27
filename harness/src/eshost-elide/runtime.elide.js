// eshost runtime for the Elide host. Prepended to every compiled test.
// Provides print() (Elide lacks it) and a minimal $262.
if (typeof globalThis.print !== "function") {
  globalThis.print = function () {
    console.log(Array.prototype.join.call(arguments, " "));
  };
}
var $262 = {
  global: globalThis,
  destroy: function () {},
  evalScript: function (code) {
    try {
      (0, eval)(code);
      return { type: "normal", value: undefined };
    } catch (e) {
      return { type: "throw", value: e };
    }
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
  createRealm: function () {
    throw new Error("$262.createRealm not supported by the Elide host");
  },
  detachArrayBuffer: function () {
    throw new Error("$262.detachArrayBuffer not supported by the Elide host");
  },
  gc: function () {
    throw new Error("$262.gc not supported by the Elide host");
  },
};
