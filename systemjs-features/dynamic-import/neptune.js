System.register([], function (_export, _context) {
  return {
    execute: function() {
      document.body.appendChild(Object.assign(document.createElement('p'), {
        textContent: 'Neptune is a planet that revolves around the Sun'
      }));

      // Dynamic import within a module calculates a url relative to the current module
      _context.import('./triton.js').then(function (triton) {
        console.log("Triton was discovered on", triton.discoveryDate);
      });
    }
  };
});