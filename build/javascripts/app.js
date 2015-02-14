"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var HelloWorld = function HelloWorld(text) {
	_classCallCheck(this, HelloWorld);

	console.log("Hello " + text);
};

new HelloWorld("World");