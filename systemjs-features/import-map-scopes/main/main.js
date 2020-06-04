System.register(['dep'], function (_export) {
  let dep;

  return {
    setters: [
      function (ns) {
        dep = ns;
      }
    ],
    execute: function () {
      console.log('main is executing. dep version is', dep.version);
      _export('default', 'main');
    }
  }
})