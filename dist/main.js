/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/raindrop.jpg */ \"./src/img/raindrop.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/windCatcherLogo.png */ \"./src/img/windCatcherLogo.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  font-family: \"Quicksand\";\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nbutton {\r\n  width: 100px;\r\n  height: 30px;\r\n}\r\n\r\nbody {\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  color: #fff;\r\n}\r\n\r\n.weatherLogo {\r\n  position: absolute;\r\n  left: 20px;\r\n  top: 60px;\r\n  z-index: 10;\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  height: 75px;\r\n  width: 225px;\r\n}\r\n\r\n.searchAPI {\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: rgba(223, 223, 223, 0.2);\r\n  min-height: 100px;\r\n  height: 100px;\r\n  margin: 50px 0;\r\n}\r\n\r\n#searchLocation {\r\n  height: 50px;\r\n  border-radius: 10px;\r\n  padding: 5px 10px;\r\n  background-color: rgba(23, 23, 23, 0.2);\r\n  color: #fff;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n}\r\n\r\nbody,\r\n.searchAPI,\r\n#pageContent,\r\n.mainContent,\r\n.dateTimeLocationContainer,\r\n.dailyWeatherForecastContainer,\r\n.dayContainer,\r\n.dayHighLow,\r\n.currentMiscWeatherItemsContainer,\r\n/* .currentMiscWeatherItemsContent, */\r\n.sunriseSetContainer,\r\n.humidityContent,\r\n.rainContent,\r\n.windContent,\r\n.uvContent,\r\n.humidityContainer,\r\n.rainContainer,\r\n.windContainer,\r\n.uvContainer,\r\n.hourlyForecastContainer,\r\n.hourlyForecastContent,\r\n.hourContainer,\r\n.ics-container {\r\n  display: flex;\r\n}\r\n\r\nbody,\r\n#pageContent,\r\n.dateTimeLocationContainer,\r\n.dailyWeatherForecastContainer,\r\n.dayHighLow,\r\n.currentMiscWeatherItemsContainer,\r\n.hourContainer/* ,\r\n.humidityContent,\r\n.rainContent,\r\n.windContent,\r\n.uvContent */ {\r\n  flex-direction: column;\r\n}\r\n\r\n#pageContent {\r\n  height: 100%;\r\n  width: 80vw;\r\n  max-width: 1600px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.dateTimeLocationContainer,\r\n.dailyWeatherForecastContainer,\r\n.currentMiscWeatherItemsContainer,\r\n.hourlyForecastContainer {\r\n  background-color: rgba(10, 10, 10, 0.4);\r\n  border-radius: 20px;\r\n  box-shadow: 1px 5px 5px 2px #333;\r\n}\r\n\r\n.mainContent {\r\n  margin-bottom: 7vh;\r\n}\r\n\r\n.locationName {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.currentTemp {\r\n  font-size: 2.5rem;\r\n}\r\n\r\n.dateTimeLocationContainer {\r\n  position: relative;\r\n}\r\n\r\n.weatherIcon {\r\n  position: absolute;\r\n  top: 6rem;\r\n  right: 15px;\r\n  height: 15vh;\r\n  max-height: 100px;\r\n  max-width: 100px;\r\n  align-self: end;\r\n}\r\n\r\n.sunriseSetIcon {\r\n  height: 100px;\r\n}\r\n\r\n.currentWeatherConditions {\r\n  font-size: 1.1rem;\r\n  margin-top: 6rem;\r\n}\r\n\r\n.locationName,\r\n.currentTemp,\r\n.currentWeatherConditions,\r\n.currentMiscWeatherItemsHeading,\r\n.sunriseSetContainer,\r\n.humidityContent,\r\n.rainContent,\r\n.windContent,\r\n.uvContent {\r\n  padding: 15px;\r\n}\r\n\r\n.currentDate {\r\n  padding: 0 15px;\r\n}\r\n\r\n.currentMiscWeatherItemsHeading {\r\n  padding: 15px 15px 0 15px;\r\n}\r\n\r\n.mainContent {\r\n  justify-content: space-between;\r\n}\r\n\r\n.dailyWeatherForecastContainer {\r\n  min-width: 140px;\r\n  width: 25vw;\r\n  margin: auto 0;\r\n}\r\n\r\n.dailyWeatherForecastContent {\r\n  padding-bottom: 20px;\r\n}\r\n\r\n.dayDate {\r\n  font-size: 1.3rem;\r\n  padding: 15px 15px 0 15px;\r\n}\r\n\r\n.sunriseSetContainer,\r\n.humidityContent,\r\n.rainContent,\r\n.windContent,\r\n.uvContent {\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.dayContainer,\r\n.humidityContainer,\r\n.rainContainer,\r\n.windContainer,\r\n.uvContainer,\r\n.hourlyForecastContainer {\r\n  align-items: center;\r\n  justify-content: space-around;\r\n}\r\n\r\n.hourlyForecastContent {\r\n  width: 100%;\r\n  justify-content: space-around;\r\n}\r\n\r\n.miscIcon {\r\n  height: 30px;\r\n  padding: 0 10px;\r\n}\r\n\r\n.dateTimeLocationContainer,\r\n.currentMiscWeatherItemsContainer {\r\n  min-width: 140px;\r\n  width: 20vw;\r\n  max-width: 250px;\r\n}\r\n\r\n.hourContainer {\r\n  padding: 15px 5px;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.ics-container {\r\n  justify-content: end;\r\n  align-items: center;\r\n  gap: 5px;\r\n  position: fixed;\r\n  bottom: 0;\r\n  right: 0;\r\n}\r\n\r\n.ics-img {\r\n  height: 25px;\r\n}\r\n\r\n.ics-p {\r\n  font-style: italic;\r\n}\r\n\r\n/*  MEDIA QUERIES */\r\n@media (max-width: 1160px) {\r\n  .currentMiscWeatherItemsContainer {\r\n    width: 23vw;\r\n  }\r\n  .dailyWeatherForecastContainer {\r\n    width: 23vw;\r\n  }\r\n}\r\n\r\n@media (max-width: 1120px) {\r\n  .weatherIcon {\r\n    position: absolute;\r\n    top: 9rem;\r\n    left: 15px;\r\n    height: 15vh;\r\n  }\r\n}\r\n\r\n@media (max-width: 1035px) {\r\n  .weatherIcon {\r\n    position: absolute;\r\n    top: 11rem;\r\n    left: 15px;\r\n    height: 15vh;\r\n  }\r\n  .currentMiscWeatherItemsContainer {\r\n    width: 25vw;\r\n  }\r\n  .dailyWeatherForecastContainer {\r\n    width: 21vw;\r\n  }\r\n}\r\n\r\n@media (max-width: 970px) {\r\n  .sunriseSetIcon {\r\n    height: 60px;\r\n  }\r\n  .currentMiscWeatherItemsContainer {\r\n    width: 26vw;\r\n  }\r\n  .dailyWeatherForecastContainer {\r\n    width: 20vw;\r\n  }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .currentMiscWeatherItemsContainer {\r\n    width: 28vw;\r\n  }\r\n}\r\n\r\n@media (max-width: 830px) {\r\n  .currentDate,\r\n  .currentWeatherConditions,\r\n  .dayHigh,\r\n  .dayLow,\r\n  .miscHeading,\r\n  .sunriseSetText,\r\n  .miscText {\r\n    font-size: 0.9rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 780px) {\r\n  .currentDate,\r\n  .currentWeatherConditions,\r\n  .dayHigh,\r\n  .dayLow,\r\n  .miscHeading,\r\n  .sunriseSetText,\r\n  .miscText {\r\n    font-size: 0.8rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 725px) {\r\n  .humidityContent,\r\n  .rainContent,\r\n  .windContent,\r\n  .uvContent {\r\n    flex-direction: column;\r\n    align-items: start;\r\n  }\r\n  .miscText {\r\n    padding-left: 70px;\r\n  }\r\n  .currentTemp {\r\n    font-size: 2rem;\r\n  }\r\n  .weatherIcon {\r\n    height: 64px;\r\n  }\r\n  .hourlyForecastContent {\r\n    flex-direction: column;\r\n  }\r\n  .hourContainer {\r\n    flex-direction: row;\r\n  }\r\n  .hour0,\r\n  .hour3,\r\n  .hour6,\r\n  .hour9,\r\n  .hour12,\r\n  .hour15,\r\n  .hour18,\r\n  .hour21 {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 20px;\r\n  }\r\n  .searchAPI {\r\n    justify-content: end;\r\n  }\r\n  #searchLocation {\r\n    margin-right: 40px;\r\n  }\r\n}\r\n\r\n@media (max-width: 620px) {\r\n  .mainContent {\r\n    flex-direction: column;\r\n  }\r\n  .dateTimeLocationContainer,\r\n  .dailyWeatherForecastContainer,\r\n  .currentMiscWeatherItemsContainer {\r\n    width: 100%;\r\n    max-width: 100%;\r\n    margin-bottom: 10px;\r\n  }\r\n  .currentDate,\r\n  .currentWeatherConditions,\r\n  .dayHigh,\r\n  .dayLow,\r\n  .miscHeading,\r\n  .sunriseSetText,\r\n  .miscText {\r\n    font-size: 1.2rem;\r\n  }\r\n  .humidityContent,\r\n  .rainContent,\r\n  .windContent,\r\n  .uvContent {\r\n    flex-direction: row;\r\n    align-items: center;\r\n  }\r\n  .miscText {\r\n    padding-left: 10px;\r\n  }\r\n  .sunriseSetIcon {\r\n    height: 100px;\r\n  }\r\n  .weatherIcon {\r\n    top: 9rem;\r\n    left: 50px;\r\n    height: 15vh;\r\n    max-height: 100px;\r\n    max-width: 100px;\r\n  }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-weather-app/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://webpack-weather-app/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-weather-app/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_connectToAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/connectToAPI */ \"./src/modules/connectToAPI.js\");\n\r\n\r\n\r\nconst container = document.querySelector(\"#pageContent\");\r\nconst mainContent = document.querySelector(\".mainContent\");\r\nconst searchBar = document.querySelector(\"#searchLocation\");\r\nconst hourlyData = document.querySelector(\r\n  \"#pageContent>.hourlyForecastContainer\"\r\n);\r\nlet newLocation;\r\n\r\n// Initialize page\r\nfunction loadPage() {\r\n  while (mainContent.firstChild) {\r\n    mainContent.removeChild(mainContent.firstChild);\r\n  }\r\n  if (hourlyData) {\r\n    container.remove(hourlyData);\r\n  }\r\n  (0,_modules_connectToAPI__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"helsinki\");\r\n}\r\n\r\nloadPage();\r\n\r\n// Activate search bar\r\nsearchBar.addEventListener(\"input\", recordInput);\r\nsearchBar.addEventListener(\"keypress\", recordKey);\r\n\r\n// Save input from search bar\r\nfunction recordInput(evt) {\r\n  evt.preventDefault();\r\n  newLocation = evt.target.value;\r\n}\r\n\r\n// Run API search\r\nfunction recordKey(evt) {\r\n  if (evt.key === \"Enter\") {\r\n    evt.preventDefault();\r\n    updateLocation();\r\n  }\r\n}\r\n\r\nfunction updateLocation() {\r\n  /*   while (container.firstChild) {\r\n    container.removeChild(container.firstChild);\r\n  } */\r\n  const container = document.querySelector(\"#pageContent\");\r\n  const mainContent = document.querySelector(\".mainContent\");\r\n  const hourlyData = document.querySelector(\r\n    \"#pageContent>.hourlyForecastContainer\"\r\n  );\r\n  const ics = document.querySelector(\".ics-container\");\r\n  while (mainContent.firstChild) {\r\n    mainContent.removeChild(mainContent.firstChild);\r\n  }\r\n  /*   console.log(hourlyData);\r\n  console.log(ics); */\r\n  if (hourlyData) {\r\n    hourlyData.remove();\r\n  }\r\n  if (ics) {\r\n    ics.remove();\r\n  }\r\n  const location = newLocation ? newLocation : \"helsinki\";\r\n\r\n  (0,_modules_connectToAPI__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(location);\r\n  searchBar.value = \"\";\r\n}\r\n\n\n//# sourceURL=webpack://webpack-weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/connectToAPI.js":
/*!*************************************!*\
  !*** ./src/modules/connectToAPI.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _threeDayForecast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./threeDayForecast */ \"./src/modules/threeDayForecast.js\");\n/* harmony import */ var _currentTimeAndTemperature__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currentTimeAndTemperature */ \"./src/modules/currentTimeAndTemperature.js\");\n/* harmony import */ var _currentMiscWeatherItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./currentMiscWeatherItems */ \"./src/modules/currentMiscWeatherItems.js\");\n/* harmony import */ var _hourlyForecasts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hourlyForecasts */ \"./src/modules/hourlyForecasts.js\");\n\r\n\r\n\r\n\r\n\r\nasync function APIconnection(location) {\r\n  const KEY = \"35cc3556129f4283a8483652230511\";\r\n  try {\r\n    const response = await fetch(\r\n      `https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${location}&days=3`,\r\n      { mode: \"cors\" }\r\n    );\r\n    let json = await response.json();\r\n    // View data structure\r\n    /* console.log(json); */\r\n\r\n    (0,_currentTimeAndTemperature__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(json);\r\n    (0,_threeDayForecast__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(json);\r\n    (0,_currentMiscWeatherItems__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(json);\r\n    (0,_hourlyForecasts__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(json);\r\n  } catch (error) {\r\n    console.log(error.message);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (APIconnection);\r\n\n\n//# sourceURL=webpack://webpack-weather-app/./src/modules/connectToAPI.js?");

/***/ }),

/***/ "./src/modules/currentMiscWeatherItems.js":
/*!************************************************!*\
  !*** ./src/modules/currentMiscWeatherItems.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_sunriseSunset64_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/sunriseSunset64.png */ \"./src/img/sunriseSunset64.png\");\n/* harmony import */ var _img_humidity_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/humidity.png */ \"./src/img/humidity.png\");\n/* harmony import */ var _img_chanceOfRain_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/chanceOfRain.png */ \"./src/img/chanceOfRain.png\");\n/* harmony import */ var _img_wind_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/wind.png */ \"./src/img/wind.png\");\n/* harmony import */ var _img_uv_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/uv.png */ \"./src/img/uv.png\");\nconst container = document.querySelector(\"#pageContent\");\r\nconst mainContent = document.querySelector(\".mainContent\");\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction currentMiscItems(json) {\r\n  // CREATE ELEMENTS\r\n  const currentMiscWeatherItemsContainer = document.createElement(\"div\");\r\n  currentMiscWeatherItemsContainer.classList.add(\r\n    \"currentMiscWeatherItemsContainer\"\r\n  );\r\n\r\n  const currentMiscWeatherItemsContent = document.createElement(\"div\");\r\n  currentMiscWeatherItemsContent.classList.add(\r\n    \"currentMiscWeatherItemsContent\"\r\n  );\r\n  const currentMiscWeatherItemsHeading = document.createElement(\"h3\");\r\n  currentMiscWeatherItemsHeading.classList.add(\r\n    \"currentMiscWeatherItemsHeading\"\r\n  );\r\n\r\n  const sunriseSetContainer = document.createElement(\"div\");\r\n  sunriseSetContainer.classList.add(\"sunriseSetContainer\");\r\n  const sunriseSetContent = document.createElement(\"div\");\r\n  sunriseSetContent.classList.add(\"sunriseSetContent\");\r\n  const sunriseHeading = document.createElement(\"div\");\r\n  sunriseHeading.classList.add(\"miscHeading\");\r\n  const sunriseTime = document.createElement(\"div\");\r\n  sunriseTime.classList.add(\"sunriseSetText\");\r\n  const sunsetHeading = document.createElement(\"div\");\r\n  sunsetHeading.classList.add(\"miscHeading\");\r\n  const sunsetTime = document.createElement(\"div\");\r\n  sunsetTime.classList.add(\"sunriseSetText\");\r\n  const sunriseSetIcon = document.createElement(\"img\");\r\n  sunriseSetIcon.classList.add(\"sunriseSetIcon\");\r\n\r\n  sunriseSetContent.appendChild(sunriseHeading);\r\n  sunriseSetContent.appendChild(sunriseTime);\r\n  sunriseSetContent.appendChild(sunsetHeading);\r\n  sunriseSetContent.appendChild(sunsetTime);\r\n  sunriseSetContainer.appendChild(sunriseSetContent);\r\n  sunriseSetContainer.appendChild(sunriseSetIcon);\r\n\r\n  const humidityContent = document.createElement(\"div\");\r\n  humidityContent.classList.add(\"humidityContent\");\r\n  const humidityHeading = document.createElement(\"div\");\r\n  humidityHeading.classList.add(\"miscHeading\");\r\n  const humidityContainer = document.createElement(\"div\");\r\n  humidityContainer.classList.add(\"humidityContainer\");\r\n  const humidityIcon = document.createElement(\"img\");\r\n  humidityIcon.classList.add(\"miscIcon\");\r\n  const humidityPercentage = document.createElement(\"div\");\r\n  humidityPercentage.classList.add(\"miscText\");\r\n\r\n  humidityContainer.appendChild(humidityIcon);\r\n  humidityContainer.appendChild(humidityHeading);\r\n  humidityContent.appendChild(humidityContainer);\r\n  humidityContent.appendChild(humidityPercentage);\r\n\r\n  const rainContent = document.createElement(\"div\");\r\n  rainContent.classList.add(\"rainContent\");\r\n  const rainHeading = document.createElement(\"div\");\r\n  rainHeading.classList.add(\"miscHeading\");\r\n  const rainContainer = document.createElement(\"div\");\r\n  rainContainer.classList.add(\"humidityContainer\");\r\n  const rainIcon = document.createElement(\"img\");\r\n  rainIcon.classList.add(\"miscIcon\");\r\n  const chanceOfRain = document.createElement(\"div\");\r\n  chanceOfRain.classList.add(\"miscText\");\r\n\r\n  rainContainer.appendChild(rainIcon);\r\n  rainContainer.appendChild(rainHeading);\r\n  rainContent.appendChild(rainContainer);\r\n  rainContent.appendChild(chanceOfRain);\r\n\r\n  const windContent = document.createElement(\"div\");\r\n  windContent.classList.add(\"windContent\");\r\n  const windHeading = document.createElement(\"div\");\r\n  windHeading.classList.add(\"miscHeading\");\r\n  const windContainer = document.createElement(\"div\");\r\n  windContainer.classList.add(\"humidityContainer\");\r\n  const windIcon = document.createElement(\"img\");\r\n  windIcon.classList.add(\"miscIcon\");\r\n  const windSpeed = document.createElement(\"div\");\r\n  windSpeed.classList.add(\"miscText\");\r\n\r\n  windContainer.appendChild(windIcon);\r\n  windContainer.appendChild(windHeading);\r\n  windContent.appendChild(windContainer);\r\n  windContent.appendChild(windSpeed);\r\n\r\n  const uvContent = document.createElement(\"div\");\r\n  uvContent.classList.add(\"uvContent\");\r\n  const uvHeading = document.createElement(\"div\");\r\n  uvHeading.classList.add(\"miscHeading\");\r\n  const uvContainer = document.createElement(\"div\");\r\n  uvContainer.classList.add(\"humidityContainer\");\r\n  const uvIcon = document.createElement(\"img\");\r\n  uvIcon.classList.add(\"miscIcon\");\r\n  const uvIndex = document.createElement(\"div\");\r\n  uvIndex.classList.add(\"miscText\");\r\n\r\n  uvContainer.appendChild(uvIcon);\r\n  uvContainer.appendChild(uvHeading);\r\n  uvContent.appendChild(uvContainer);\r\n  uvContent.appendChild(uvIndex);\r\n\r\n  // ACCESS API AND FORMAT DATA\r\n\r\n  currentMiscWeatherItemsHeading.textContent = \"Current\";\r\n  sunriseHeading.textContent = `Sunrise:`;\r\n  sunsetHeading.textContent = `Sunset:`;\r\n  humidityHeading.textContent = `Humidity:`;\r\n  rainHeading.textContent = `Chance of Rain:`;\r\n  windHeading.textContent = `Wind speed:`;\r\n  uvHeading.textContent = `UV Index:`;\r\n\r\n  sunriseSetIcon.src = _img_sunriseSunset64_png__WEBPACK_IMPORTED_MODULE_0__;\r\n  humidityIcon.src = _img_humidity_png__WEBPACK_IMPORTED_MODULE_1__;\r\n  rainIcon.src = _img_chanceOfRain_png__WEBPACK_IMPORTED_MODULE_2__;\r\n  windIcon.src = _img_wind_png__WEBPACK_IMPORTED_MODULE_3__;\r\n  uvIcon.src = _img_uv_png__WEBPACK_IMPORTED_MODULE_4__;\r\n\r\n  sunriseTime.textContent = json.forecast.forecastday[0].astro.sunrise;\r\n  sunsetTime.textContent = json.forecast.forecastday[0].astro.sunset;\r\n  humidityPercentage.textContent = `${json.current.humidity} %`;\r\n  chanceOfRain.textContent = `${json.forecast.forecastday[0].day.daily_chance_of_rain} %`;\r\n  windSpeed.textContent = `${(json.current.wind_kph / 3.6).toFixed(1)} m/s`;\r\n  uvIndex.textContent = `${json.current.uv}`;\r\n\r\n  currentMiscWeatherItemsContent.appendChild(currentMiscWeatherItemsHeading);\r\n  currentMiscWeatherItemsContent.appendChild(sunriseSetContainer);\r\n  currentMiscWeatherItemsContent.appendChild(humidityContent);\r\n  currentMiscWeatherItemsContent.appendChild(rainContent);\r\n  currentMiscWeatherItemsContent.appendChild(windContent);\r\n  currentMiscWeatherItemsContent.appendChild(uvContent);\r\n\r\n  currentMiscWeatherItemsContainer.appendChild(currentMiscWeatherItemsContent);\r\n  mainContent.appendChild(currentMiscWeatherItemsContainer);\r\n  container.appendChild(mainContent);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (currentMiscItems);\r\n\n\n//# sourceURL=webpack://webpack-weather-app/./src/modules/currentMiscWeatherItems.js?");

/***/ }),

/***/ "./src/modules/currentTimeAndTemperature.js":
/*!**************************************************!*\
  !*** ./src/modules/currentTimeAndTemperature.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst container = document.querySelector(\"#pageContent\");\r\nconst mainContent = document.querySelector(\".mainContent\");\r\nconst hourlyData = document.querySelector(\".hourlyForecastContainer\");\r\n\r\nfunction currentTimeAndTemperature(json) {\r\n  // CREATE ELEMENTS\r\n  const dateTimeLocationContainer = document.createElement(\"div\");\r\n  dateTimeLocationContainer.classList.add(\"dateTimeLocationContainer\");\r\n\r\n  const localTime = document.createElement(\"div\");\r\n  localTime.classList.add(\"localTime\");\r\n\r\n  const currentDate = document.createElement(\"div\");\r\n  currentDate.classList.add(\"currentDate\");\r\n\r\n  const locationContainer = document.createElement(\"div\");\r\n  locationContainer.classList.add(\"locationContainer\");\r\n\r\n  const country = document.createElement(\"div\");\r\n  country.classList.add(\"country\");\r\n\r\n  const locationName = document.createElement(\"div\");\r\n  locationName.classList.add(\"locationName\");\r\n\r\n  const currentWeatherConditions = document.createElement(\"div\");\r\n  currentWeatherConditions.classList.add(\"currentWeatherConditions\");\r\n\r\n  const currentWeatherConditionsText = document.createElement(\"p\");\r\n  currentWeatherConditionsText.classList.add(\"currentWeatherConditionsText\");\r\n\r\n  const currentTempContainer = document.createElement(\"div\");\r\n  currentTempContainer.classList.add(\"currentTempContainer\");\r\n\r\n  const currentTemp = document.createElement(\"div\");\r\n  currentTemp.classList.add(\"currentTemp\");\r\n\r\n  const currentTempIcon = document.createElement(\"img\");\r\n  currentTempIcon.classList.add(\"weatherIcon\");\r\n\r\n  // ACCESS API AND FORMAT DATA\r\n  // Last Upadated\r\n  const timeForUpdate = new Date(json.current.last_updated);\r\n  const days = [\"Sun\", \"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", \"Sat\"];\r\n\r\n  const weekDay = days[timeForUpdate.getDay()];\r\n  const day = timeForUpdate.getDate();\r\n  const month = timeForUpdate.getMonth() + 1;\r\n  const hours = timeForUpdate.getHours();\r\n  const minutePre = timeForUpdate.getMinutes();\r\n  const minutes = minutePre < 10 ? \"0\" + minutePre : minutePre;\r\n\r\n  const updated = `${weekDay} ${day}.${month} at ${hours}:${minutes}`;\r\n\r\n  // Add data to elements\r\n  currentTempIcon.src = json.current.condition.icon;\r\n  currentWeatherConditions.textContent = `Weather condition:`;\r\n  currentWeatherConditionsText.textContent = `${json.current.condition.text}`;\r\n  locationName.textContent = `${json.location.name}, ${json.location.country}`;\r\n  currentTemp.textContent = `${json.current.temp_c}°C`;\r\n  currentDate.textContent = `${updated}`;\r\n\r\n  // Update page\r\n  function updateLocation() {\r\n    while (mainContent.firstChild) {\r\n      mainContent.removeChild(mainContent.firstChild);\r\n    }\r\n    if (hourlyData) {\r\n      container.remove(hourlyData);\r\n    }\r\n    dateTimeLocationContainer.appendChild(locationName);\r\n    dateTimeLocationContainer.appendChild(currentDate);\r\n    dateTimeLocationContainer.appendChild(currentTemp);\r\n    dateTimeLocationContainer.appendChild(currentTempIcon);\r\n    currentWeatherConditions.appendChild(currentWeatherConditionsText);\r\n    dateTimeLocationContainer.appendChild(currentWeatherConditions);\r\n\r\n    mainContent.appendChild(dateTimeLocationContainer);\r\n    container.appendChild(mainContent);\r\n  }\r\n  updateLocation();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (currentTimeAndTemperature);\r\n\n\n//# sourceURL=webpack://webpack-weather-app/./src/modules/currentTimeAndTemperature.js?");

/***/ }),

/***/ "./src/modules/hourlyForecasts.js":
/*!****************************************!*\
  !*** ./src/modules/hourlyForecasts.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _icsDemo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icsDemo */ \"./src/modules/icsDemo.js\");\n\r\nconst container = document.querySelector(\"#pageContent\");\r\n\r\nfunction hourlyForecasts(json) {\r\n  // CREATE ELEMENTS\r\n  const hourlyForecastContainer = document.createElement(\"div\");\r\n  hourlyForecastContainer.classList.add(\"hourlyForecastContainer\");\r\n  const hourlyForecastContent = document.createElement(\"div\");\r\n  hourlyForecastContent.classList.add(\"hourlyForecastContent\");\r\n\r\n  for (let i = 0; i < 24; i = i + 3) {\r\n    let dayContainer = document.createElement(\"div\");\r\n    let hour = document.createElement(\"div\");\r\n    let heading = document.createElement(\"h3\");\r\n    let time = document.createElement(\"p\");\r\n    let weatherIcon = document.createElement(\"img\");\r\n    let temp = document.createElement(\"div\");\r\n\r\n    dayContainer.className = `hour${[i]}Container`;\r\n    dayContainer.className = `hourContainer`;\r\n    hour.className = `hour${[i]}`;\r\n\r\n    const forecastTime = new Date(json.forecast.forecastday[1].hour[i].time);\r\n    const day = forecastTime.getDate();\r\n    const month = forecastTime.getMonth() + 1;\r\n    const hoursPre = forecastTime.getHours();\r\n    const hours = hoursPre < 10 ? \"0\" + hoursPre : hoursPre;\r\n    const minutePre = forecastTime.getMinutes();\r\n    const minutes = minutePre < 10 ? \"0\" + minutePre : minutePre;\r\n\r\n    heading.textContent = `${day}.${month}`;\r\n    time.textContent = `${hours}:${minutes}`;\r\n    weatherIcon.className = `hourIcon`;\r\n    weatherIcon.src = json.forecast.forecastday[1].hour[i].condition.icon;\r\n    temp.className = `hour${[i]}Temp`;\r\n    temp.textContent = `${json.forecast.forecastday[1].hour[i].temp_c}°C`;\r\n\r\n    hour.appendChild(heading);\r\n    hour.appendChild(time);\r\n    dayContainer.appendChild(hour);\r\n    dayContainer.appendChild(weatherIcon);\r\n    dayContainer.appendChild(temp);\r\n    hourlyForecastContent.appendChild(dayContainer);\r\n  }\r\n\r\n  hourlyForecastContainer.appendChild(hourlyForecastContent);\r\n  container.appendChild(hourlyForecastContainer);\r\n  container.appendChild((0,_icsDemo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hourlyForecasts);\r\n\n\n//# sourceURL=webpack://webpack-weather-app/./src/modules/hourlyForecasts.js?");

/***/ }),

/***/ "./src/modules/icsDemo.js":
/*!********************************!*\
  !*** ./src/modules/icsDemo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_iCeeqSolutionsLogo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/iCeeqSolutionsLogo.png */ \"./src/img/iCeeqSolutionsLogo.png\");\n\r\n\r\nfunction icsStatement() {\r\n  const container = document.createElement(\"div\");\r\n  const p = document.createElement(\"p\");\r\n  const a = document.createElement(\"a\");\r\n  const img = document.createElement(\"img\");\r\n  /* const logo = new Image(); */\r\n\r\n  container.className = \"ics-container\";\r\n  p.className = \"ics-p\";\r\n  p.textContent = \"API demo by: \";\r\n  a.href = \"https://iceeqsolutions.fi\";\r\n  a.target = \"_blank\";\r\n  img.className = \"ics-img\";\r\n  img.src = _img_iCeeqSolutionsLogo_png__WEBPACK_IMPORTED_MODULE_0__;\r\n\r\n  a.appendChild(img);\r\n  container.appendChild(p);\r\n  container.appendChild(a);\r\n\r\n  return container;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icsStatement);\r\n\n\n//# sourceURL=webpack://webpack-weather-app/./src/modules/icsDemo.js?");

/***/ }),

/***/ "./src/modules/threeDayForecast.js":
/*!*****************************************!*\
  !*** ./src/modules/threeDayForecast.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst container = document.querySelector(\"#pageContent\");\r\nconst mainContent = document.querySelector(\".mainContent\");\r\n\r\nfunction dailyWeatherForecast(json) {\r\n  // CREATE ELEMENTS\r\n  const dailyWeatherForecastContainer = document.createElement(\"div\");\r\n  dailyWeatherForecastContainer.classList.add(\"dailyWeatherForecastContainer\");\r\n\r\n  const dailyWeatherForecastContent = document.createElement(\"div\");\r\n  dailyWeatherForecastContent.classList.add(\"dailyWeatherForecastContent\");\r\n\r\n  const weatherDay0 = document.createElement(\"div\");\r\n  weatherDay0.classList.add(\"weatherDay0\");\r\n  const day0Container = document.createElement(\"div\");\r\n  day0Container.classList.add(\"dayContainer\");\r\n  const day0Date = document.createElement(\"div\");\r\n  day0Date.classList.add(\"dayDate\");\r\n  const day0Img = document.createElement(\"img\");\r\n  day0Img.classList.add(\"dayilyIcon\");\r\n  const day0HighLow = document.createElement(\"div\");\r\n  day0HighLow.classList.add(\"dayHighLow\");\r\n  const day0High = document.createElement(\"div\");\r\n  day0High.classList.add(\"dayHigh\");\r\n  const day0Low = document.createElement(\"div\");\r\n  day0Low.classList.add(\"dayLow\");\r\n\r\n  weatherDay0.appendChild(day0Date);\r\n  day0HighLow.appendChild(day0High);\r\n  day0HighLow.appendChild(day0Low);\r\n  day0Container.appendChild(day0HighLow);\r\n  day0Container.appendChild(day0Img);\r\n  weatherDay0.appendChild(day0Container);\r\n\r\n  const weatherDay1 = document.createElement(\"div\");\r\n  weatherDay1.classList.add(\"weatherDay1\");\r\n  const day1Container = document.createElement(\"div\");\r\n  day1Container.classList.add(\"dayContainer\");\r\n  const day1Date = document.createElement(\"div\");\r\n  day1Date.classList.add(\"dayDate\");\r\n  const day1Img = document.createElement(\"img\");\r\n  day1Img.classList.add(\"dayilyIcon\");\r\n  const day1HighLow = document.createElement(\"div\");\r\n  day1HighLow.classList.add(\"dayHighLow\");\r\n  const day1High = document.createElement(\"div\");\r\n  day1High.classList.add(\"dayHigh\");\r\n  const day1Low = document.createElement(\"div\");\r\n  day1Low.classList.add(\"dayLow\");\r\n\r\n  weatherDay1.appendChild(day1Date);\r\n  day1HighLow.appendChild(day1High);\r\n  day1HighLow.appendChild(day1Low);\r\n  day1Container.appendChild(day1HighLow);\r\n  day1Container.appendChild(day1Img);\r\n  weatherDay1.appendChild(day1Container);\r\n\r\n  const weatherDay2 = document.createElement(\"div\");\r\n  weatherDay2.classList.add(\"weatherDay2\");\r\n  const day2Container = document.createElement(\"div\");\r\n  day2Container.classList.add(\"dayContainer\");\r\n  const day2Date = document.createElement(\"div\");\r\n  day2Date.classList.add(\"dayDate\");\r\n  const day2Img = document.createElement(\"img\");\r\n  day2Img.classList.add(\"dayilyIcon\");\r\n  const day2HighLow = document.createElement(\"div\");\r\n  day2HighLow.classList.add(\"dayHighLow\");\r\n  const day2High = document.createElement(\"div\");\r\n  day2High.classList.add(\"dayHigh\");\r\n  const day2Low = document.createElement(\"div\");\r\n  day2Low.classList.add(\"dayLow\");\r\n\r\n  weatherDay2.appendChild(day2Date);\r\n  day2HighLow.appendChild(day2High);\r\n  day2HighLow.appendChild(day2Low);\r\n  day2Container.appendChild(day2HighLow);\r\n  day2Container.appendChild(day2Img);\r\n  weatherDay2.appendChild(day2Container);\r\n\r\n  // ACCESS API AND FORMAT DATA\r\n  const days = [\"Sun\", \"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", \"Sat\"];\r\n\r\n  const date0 = new Date(json.forecast.forecastday[0].date);\r\n  const weekDay0 = days[date0.getDay()];\r\n  const day0 = date0.getDate();\r\n  const month0 = date0.getMonth() + 1;\r\n  const formattedDate0 = `${weekDay0} ${day0}.${month0}`;\r\n  day0Date.textContent = formattedDate0;\r\n\r\n  const date1 = new Date(json.forecast.forecastday[1].date);\r\n  const weekDay1 = days[date1.getDay()];\r\n  const day1 = date1.getDate();\r\n  const month1 = date1.getMonth() + 1;\r\n  const formattedDate1 = `${weekDay1} ${day1}.${month1}`;\r\n  day1Date.textContent = formattedDate1;\r\n\r\n  const date2 = new Date(json.forecast.forecastday[2].date);\r\n  const weekDay2 = days[date2.getDay()];\r\n  const day2 = date2.getDate();\r\n  const month2 = date2.getMonth() + 1;\r\n  const formattedDate2 = `${weekDay2} ${day2}.${month2}`;\r\n  day2Date.textContent = formattedDate2;\r\n\r\n  day0Img.src = json.forecast.forecastday[0].day.condition.icon;\r\n  day1Img.src = json.forecast.forecastday[1].day.condition.icon;\r\n  day2Img.src = json.forecast.forecastday[2].day.condition.icon;\r\n\r\n  day0High.textContent = `Max: ${json.forecast.forecastday[0].day.maxtemp_c}°C`;\r\n  day1High.textContent = `Max: ${json.forecast.forecastday[1].day.maxtemp_c}°C`;\r\n  day2High.textContent = `Max: ${json.forecast.forecastday[2].day.maxtemp_c}°C`;\r\n\r\n  day0Low.textContent = `Min: ${json.forecast.forecastday[0].day.mintemp_c}°C`;\r\n  day1Low.textContent = `Min: ${json.forecast.forecastday[1].day.mintemp_c}°C`;\r\n  day2Low.textContent = `Min: ${json.forecast.forecastday[2].day.mintemp_c}°C`;\r\n\r\n  dailyWeatherForecastContent.appendChild(weatherDay1);\r\n  dailyWeatherForecastContent.appendChild(weatherDay2);\r\n  dailyWeatherForecastContainer.appendChild(dailyWeatherForecastContent);\r\n  mainContent.appendChild(dailyWeatherForecastContainer);\r\n  container.appendChild(mainContent);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dailyWeatherForecast);\r\n\n\n//# sourceURL=webpack://webpack-weather-app/./src/modules/threeDayForecast.js?");

/***/ }),

/***/ "./src/img/chanceOfRain.png":
/*!**********************************!*\
  !*** ./src/img/chanceOfRain.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"210b8eadfab639546b02.png\";\n\n//# sourceURL=webpack://webpack-weather-app/./src/img/chanceOfRain.png?");

/***/ }),

/***/ "./src/img/humidity.png":
/*!******************************!*\
  !*** ./src/img/humidity.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b0875a8801a5a0da2cfe.png\";\n\n//# sourceURL=webpack://webpack-weather-app/./src/img/humidity.png?");

/***/ }),

/***/ "./src/img/iCeeqSolutionsLogo.png":
/*!****************************************!*\
  !*** ./src/img/iCeeqSolutionsLogo.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7c076e598134f82e33d0.png\";\n\n//# sourceURL=webpack://webpack-weather-app/./src/img/iCeeqSolutionsLogo.png?");

/***/ }),

/***/ "./src/img/raindrop.jpg":
/*!******************************!*\
  !*** ./src/img/raindrop.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1c0e0771b21a5bcf9119.jpg\";\n\n//# sourceURL=webpack://webpack-weather-app/./src/img/raindrop.jpg?");

/***/ }),

/***/ "./src/img/sunriseSunset64.png":
/*!*************************************!*\
  !*** ./src/img/sunriseSunset64.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9fdbf8d97e398cb25992.png\";\n\n//# sourceURL=webpack://webpack-weather-app/./src/img/sunriseSunset64.png?");

/***/ }),

/***/ "./src/img/uv.png":
/*!************************!*\
  !*** ./src/img/uv.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9b62720cc6aebbacffc2.png\";\n\n//# sourceURL=webpack://webpack-weather-app/./src/img/uv.png?");

/***/ }),

/***/ "./src/img/wind.png":
/*!**************************!*\
  !*** ./src/img/wind.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f6fcc91ba00d368cd9ac.png\";\n\n//# sourceURL=webpack://webpack-weather-app/./src/img/wind.png?");

/***/ }),

/***/ "./src/img/windCatcherLogo.png":
/*!*************************************!*\
  !*** ./src/img/windCatcherLogo.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2d0a9d41142fe2ba3eec.png\";\n\n//# sourceURL=webpack://webpack-weather-app/./src/img/windCatcherLogo.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;