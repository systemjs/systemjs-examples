System.register(["react", "react-dom"], function (_export, _context) {
  "use strict";

  var React, ReactDOM;
  return {
    setters: [function (_react) {
      React = _react.default;
    }, function (_reactDom) {
      ReactDOM = _reactDom.default;
    }],
    execute: function () {
      ReactDOM.render(React.createElement("button", null, "A button created by React"), document.getElementById('react-root'));
    }
  };
});
//# sourceMappingURL=react-hello-world.js.map