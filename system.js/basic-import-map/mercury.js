System.register([], function (_export, _context) {
  return {
    execute: function() {
      _export('doAlert', doAlert);

      function doAlert() {
        alert("Mercury is the planet nearest to the sun.");
      }
    }
  }
})