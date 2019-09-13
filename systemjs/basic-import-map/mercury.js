System.register([], function (_export, _context) {
  return {
    execute: function() {
      document.body.appendChild(Object.assign(document.createElement('p'), {textContent: "Mercury is the planet nearest to the sun"}))

      /* The doAlert function is exported and can be used like this:
         System.import('mercury').then(mercuryModule => {
           mercuryModule.doAlert();
         })
       */
      _export('doAlert', doAlert);

      function doAlert() {
        alert("I hear it's quite warm on Mercury");
      }
    }
  }
})