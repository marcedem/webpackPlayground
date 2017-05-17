webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _small = __webpack_require__(4);

var _small2 = _interopRequireDefault(_small);

__webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import horse from '../assets/horse.jpg';
exports.default = function () {

    var thumbnail = document.createElement('img');
    thumbnail.src = _small2.default;
    document.body.appendChild(thumbnail);
};

/*
const image = document.createElement('img');
image.src = horse;
document.body.appendChild(image);
*/

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "body {\n    background: burlywood;\n}\n\nimg {\n    border: 5px solid #000000;\n    border-radius: 5px;\n}", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ })
]);