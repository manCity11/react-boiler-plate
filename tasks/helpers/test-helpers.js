export let MockFactory = {
  define(name, content) {
    try {
      Object.defineProperty(this, name, {
        get() {
          return content();
        }
      }, {configurable: true});
    } catch (e) {
      throw new Error(`${name}: ${e.message}`);
    }
  }
};