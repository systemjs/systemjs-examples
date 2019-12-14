define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.showDistanceFromSun = showDistanceFromSun;

  function showDistanceFromSun() {
    document.body.appendChild(Object.assign(document.createElement('p'), {
      textContent: "Neptune is 4,503,443,661 km from the Sun, on average."
    }));
  }
});