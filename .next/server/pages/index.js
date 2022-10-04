/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/_forms.module.scss":
/*!***********************************!*\
  !*** ./styles/_forms.module.scss ***!
  \***********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"formbox\": \"_forms_formbox__Wbv_1\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvX2Zvcm1zLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlicmFyeV9kZW1vLy4vc3R5bGVzL19mb3Jtcy5tb2R1bGUuc2Nzcz80ZWI2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvcm1ib3hcIjogXCJfZm9ybXNfZm9ybWJveF9fV2J2XzFcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/_forms.module.scss\n");

/***/ }),

/***/ "./components/form.tsx":
/*!*****************************!*\
  !*** ./components/form.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MovnForm\": () => (/* binding */ MovnForm)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_forms_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/_forms.module.scss */ \"./styles/_forms.module.scss\");\n/* harmony import */ var _styles_forms_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_forms_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction MovnForm({ url  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: (_styles_forms_module_scss__WEBPACK_IMPORTED_MODULE_2___default().formbox),\n            method: \"post\",\n            action: url,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"name\",\n                    children: \"Name:\"\n                }, void 0, false, {\n                    fileName: \"/Users/aminkhan/repos/playground/library_demo/components/form.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 3\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    id: \"name\",\n                    required: true\n                }, void 0, false, {\n                    fileName: \"/Users/aminkhan/repos/playground/library_demo/components/form.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 3\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"email\",\n                    children: \"Email:\"\n                }, void 0, false, {\n                    fileName: \"/Users/aminkhan/repos/playground/library_demo/components/form.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 3\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"email\",\n                    id: \"email\"\n                }, void 0, false, {\n                    fileName: \"/Users/aminkhan/repos/playground/library_demo/components/form.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 3\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"number\",\n                    children: \"Telephone:\"\n                }, void 0, false, {\n                    fileName: \"/Users/aminkhan/repos/playground/library_demo/components/form.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 3\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"tel\",\n                    id: \"number\"\n                }, void 0, false, {\n                    fileName: \"/Users/aminkhan/repos/playground/library_demo/components/form.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 3\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/aminkhan/repos/playground/library_demo/components/form.tsx\",\n            lineNumber: 10,\n            columnNumber: 2\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/aminkhan/repos/playground/library_demo/components/form.tsx\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, this);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvcm0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUE4QjtBQUNtQjtBQUdqRCxTQUFTRSxRQUFRLENBQUMsRUFBQ0MsR0FBRyxHQUFjLEVBQUM7SUFJckMscUJBQVEsOERBQUNDLEtBQUc7a0JBQ1gsNEVBQUNDLE1BQUk7WUFBQ0MsU0FBUyxFQUFFTCwwRUFBYztZQUFFTyxNQUFNLEVBQUMsTUFBTTtZQUFDQyxNQUFNLEVBQUVOLEdBQUc7OzhCQUN6RCw4REFBQ08sT0FBSztvQkFBQ0MsT0FBTyxFQUFDLE1BQU07OEJBQUMsT0FBSzs7Ozs7d0JBQVE7OEJBQ25DLDhEQUFDQyxPQUFLO29CQUFDQyxJQUFJLEVBQUMsTUFBTTtvQkFBQ0MsRUFBRSxFQUFDLE1BQU07b0JBQUNDLFFBQVE7Ozs7O3dCQUFHOzhCQUN4Qyw4REFBQ0wsT0FBSztvQkFBQ0MsT0FBTyxFQUFDLE9BQU87OEJBQUMsUUFBTTs7Ozs7d0JBQVE7OEJBQ3JDLDhEQUFDQyxPQUFLO29CQUFDQyxJQUFJLEVBQUMsT0FBTztvQkFBQ0MsRUFBRSxFQUFDLE9BQU87Ozs7O3dCQUFHOzhCQUNqQyw4REFBQ0osT0FBSztvQkFBQ0MsT0FBTyxFQUFDLFFBQVE7OEJBQUMsWUFBVTs7Ozs7d0JBQVE7OEJBQzFDLDhEQUFDQyxPQUFLO29CQUFDQyxJQUFJLEVBQUMsS0FBSztvQkFBQ0MsRUFBRSxFQUFDLFFBQVE7Ozs7O3dCQUFHOzs7Ozs7Z0JBQzFCOzs7OztZQUNGLENBQ0w7QUFDRCxDQUFDO0FBRWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlicmFyeV9kZW1vLy4vY29tcG9uZW50cy9mb3JtLnRzeD84ZWQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvX2Zvcm1zLm1vZHVsZS5zY3NzJ1xuXG5cbmZ1bmN0aW9uIE1vdm5Gb3JtKHt1cmx9Ont1cmw6c3RyaW5nfSl7XG5cblxuXG5yZXR1cm4gKDxkaXY+XG5cdDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLmZvcm1ib3h9IG1ldGhvZD1cInBvc3RcIiBhY3Rpb249e3VybH0+XG5cdFx0PGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+TmFtZTo8L2xhYmVsPlxuXHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIHJlcXVpcmVkIC8+XG5cdFx0PGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsOjwvbGFiZWw+XG5cdFx0PGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiAvPlxuXHRcdDxsYWJlbCBodG1sRm9yPVwibnVtYmVyXCI+VGVsZXBob25lOjwvbGFiZWw+XG5cdFx0PGlucHV0IHR5cGU9XCJ0ZWxcIiBpZD1cIm51bWJlclwiIC8+XG5cdDwvZm9ybT5cbjwvZGl2PlxuKVxufVxuXG5leHBvcnQge01vdm5Gb3JtfVxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJNb3ZuRm9ybSIsInVybCIsImRpdiIsImZvcm0iLCJjbGFzc05hbWUiLCJmb3JtYm94IiwibWV0aG9kIiwiYWN0aW9uIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJyZXF1aXJlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/form.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomePage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_form_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/form.tsx */ \"./components/form.tsx\");\n\n\n\nfunction HomePage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Hello from app\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_form_tsx__WEBPACK_IMPORTED_MODULE_2__.MovnForm, {}, void 0, false, {\n                fileName: \"/Users/aminkhan/repos/playground/library_demo/pages/index.tsx\",\n                lineNumber: 19,\n                columnNumber: 2\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aminkhan/repos/playground/library_demo/pages/index.tsx\",\n        lineNumber: 13,\n        columnNumber: 11\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBOEI7QUFFaUI7QUFJaEMsU0FBU0UsUUFBUSxHQUFFO0lBTWpDLHFCQUFTLDhEQUFDQyxLQUFHOztZQUFDLGdCQU1kOzBCQUFBLDhEQUFDRiwwREFBUTs7OztvQkFBRzs7Ozs7O1lBR04sQ0FBQztBQUtSLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saWJyYXJ5X2RlbW8vLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHtNb3ZuRm9ybX0gZnJvbSAnLi4vY29tcG9uZW50cy9mb3JtLnRzeCdcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCl7XG5cblxuXG5cblxuXHRyZXR1cm4gKCA8ZGl2PlxuXG5cblxuXHRIZWxsbyBmcm9tIGFwcFxuXG5cdDxNb3ZuRm9ybSAvPlxuXG5cblx0PC9kaXY+KVxuXHRcblxuXG5cbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk1vdm5Gb3JtIiwiSG9tZVBhZ2UiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();