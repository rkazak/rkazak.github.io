/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var div = React.DOM.div
	var h1 = React.DOM.h1
	var MyTitle = __webpack_require__(1)

	// now use the class previously created.
	var myFirstComp = (
	   React.createElement(MyTitle,null)
	)

	//
	ReactDOM.render(
	  myFirstComp,
	  document.getElementById('example')
	)


/***/ },
/* 1 */
/***/ function(module, exports) {

	var div = React.DOM.div
	var h1  = React.DOM.h1

	// class creates a blueprint.
	//
	var MyTitle = React.createClass({
	// es6 syntax - or render: function() {}
	    render() {
	        return (
	        div(null,
	           h1(null, 'Check out this Component!')))
	    }
	})

	module.exports = MyTitle

/***/ }
/******/ ]);