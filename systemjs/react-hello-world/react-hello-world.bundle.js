System.register(['react', 'react-dom'], function () {
	'use strict';
	var React, ReactDOM;
	return {
		setters: [function (module) {
			React = module.default;
		}, function (module) {
			ReactDOM = module.default;
		}],
		execute: function () {

			ReactDOM.render(React.createElement("button", null, "A button created by React"), document.getElementById('react-root'));

		}
	};
});
