"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Loader/Loader.jsx":
/*!**************************************!*\
  !*** ./components/Loader/Loader.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/dist/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Loader = ()=>{\n    _s();\n    // const slide1 = useSpring({\n    //   to: { x: \"-10%\" },\n    //   config: { duration: 1000, ease: \"power1.out\" },\n    // });\n    // const slide2 = useSpring({\n    //   to: { x: \"-20%\" },\n    //   config: { duration: 1500, ease: \"power1.out\" },\n    //   delay: 1000,\n    // });\n    // const slide3 = useSpring({\n    //   to: { x: \"-30%\" },\n    //   config: { duration: 1500, ease: \"power1.out\" },\n    //   delay: 1000,\n    // });\n    // const show = useSpring({\n    //   to: { x: \"0%\", opacity: 1 },\n    //   config: { duration: 2000, ease: \"power1.out\" },\n    //   delay: 2000,\n    // });\n    // const hide = useSpring({\n    //   to: { x: \"200%\" },\n    //   config: { duration: 3000, ease: \"power1.out\" },\n    // });\n    const fadeIn = (0,react_spring__WEBPACK_IMPORTED_MODULE_2__.useSpring)({\n        from: {\n            opacity: 0\n        },\n        to: {\n            opacity: 1\n        },\n        config: {\n            duration: 1000,\n            ease: \"power1.out\"\n        },\n        delay: 2000\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"preloader\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"prl-logo\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_spring__WEBPACK_IMPORTED_MODULE_2__.animated.h1, {\n                className: \"hide\",\n                style: fadeIn,\n                children: \"kdotdev\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Kartik jha\\\\Desktop\\\\Final-Port-Mk1\\\\components\\\\Loader\\\\Loader.jsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Kartik jha\\\\Desktop\\\\Final-Port-Mk1\\\\components\\\\Loader\\\\Loader.jsx\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Kartik jha\\\\Desktop\\\\Final-Port-Mk1\\\\components\\\\Loader\\\\Loader.jsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Loader, \"g6lYjCtCg6RirI/gmK+mM5P9Bvg=\", false, function() {\n    return [\n        react_spring__WEBPACK_IMPORTED_MODULE_2__.useSpring\n    ];\n});\n_c = Loader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Loader);\nvar _c;\n$RefreshReg$(_c, \"Loader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvYWRlci9Mb2FkZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXlDO0FBQ1U7QUFFbkQsTUFBTUksU0FBUyxJQUFNOztJQUNuQiw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLG9EQUFvRDtJQUNwRCxNQUFNO0lBRU4sNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixvREFBb0Q7SUFDcEQsaUJBQWlCO0lBQ2pCLE1BQU07SUFFTiw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLG9EQUFvRDtJQUNwRCxpQkFBaUI7SUFDakIsTUFBTTtJQUVOLDJCQUEyQjtJQUMzQixpQ0FBaUM7SUFDakMsb0RBQW9EO0lBQ3BELGlCQUFpQjtJQUNqQixNQUFNO0lBRU4sMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixvREFBb0Q7SUFDcEQsTUFBTTtJQUVOLE1BQU1DLFNBQVNILHVEQUFTQSxDQUFDO1FBQ3ZCSSxNQUFNO1lBQUVDLFNBQVM7UUFBRTtRQUNuQkMsSUFBSTtZQUFFRCxTQUFTO1FBQUU7UUFDakJFLFFBQVE7WUFBRUMsVUFBVTtZQUFNQyxNQUFNO1FBQWE7UUFDN0NDLE9BQU87SUFDVDtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDWCxxREFBVztnQkFBQ1csV0FBVTtnQkFBT0UsT0FBT1g7MEJBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTckQ7R0FoRE1EOztRQTZCV0YsbURBQVNBOzs7S0E3QnBCRTtBQWtETiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xvYWRlci9Mb2FkZXIuanN4P2RkZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkIH0gZnJvbSBcInJlYWN0LXNwcmluZ1wiO1xyXG5cclxuY29uc3QgTG9hZGVyID0gKCkgPT4ge1xyXG4gIC8vIGNvbnN0IHNsaWRlMSA9IHVzZVNwcmluZyh7XHJcbiAgLy8gICB0bzogeyB4OiBcIi0xMCVcIiB9LFxyXG4gIC8vICAgY29uZmlnOiB7IGR1cmF0aW9uOiAxMDAwLCBlYXNlOiBcInBvd2VyMS5vdXRcIiB9LFxyXG4gIC8vIH0pO1xyXG5cclxuICAvLyBjb25zdCBzbGlkZTIgPSB1c2VTcHJpbmcoe1xyXG4gIC8vICAgdG86IHsgeDogXCItMjAlXCIgfSxcclxuICAvLyAgIGNvbmZpZzogeyBkdXJhdGlvbjogMTUwMCwgZWFzZTogXCJwb3dlcjEub3V0XCIgfSxcclxuICAvLyAgIGRlbGF5OiAxMDAwLFxyXG4gIC8vIH0pO1xyXG5cclxuICAvLyBjb25zdCBzbGlkZTMgPSB1c2VTcHJpbmcoe1xyXG4gIC8vICAgdG86IHsgeDogXCItMzAlXCIgfSxcclxuICAvLyAgIGNvbmZpZzogeyBkdXJhdGlvbjogMTUwMCwgZWFzZTogXCJwb3dlcjEub3V0XCIgfSxcclxuICAvLyAgIGRlbGF5OiAxMDAwLFxyXG4gIC8vIH0pO1xyXG5cclxuICAvLyBjb25zdCBzaG93ID0gdXNlU3ByaW5nKHtcclxuICAvLyAgIHRvOiB7IHg6IFwiMCVcIiwgb3BhY2l0eTogMSB9LFxyXG4gIC8vICAgY29uZmlnOiB7IGR1cmF0aW9uOiAyMDAwLCBlYXNlOiBcInBvd2VyMS5vdXRcIiB9LFxyXG4gIC8vICAgZGVsYXk6IDIwMDAsXHJcbiAgLy8gfSk7XHJcblxyXG4gIC8vIGNvbnN0IGhpZGUgPSB1c2VTcHJpbmcoe1xyXG4gIC8vICAgdG86IHsgeDogXCIyMDAlXCIgfSxcclxuICAvLyAgIGNvbmZpZzogeyBkdXJhdGlvbjogMzAwMCwgZWFzZTogXCJwb3dlcjEub3V0XCIgfSxcclxuICAvLyB9KTtcclxuXHJcbiAgY29uc3QgZmFkZUluID0gdXNlU3ByaW5nKHtcclxuICAgIGZyb206IHsgb3BhY2l0eTogMCB9LFxyXG4gICAgdG86IHsgb3BhY2l0eTogMSB9LFxyXG4gICAgY29uZmlnOiB7IGR1cmF0aW9uOiAxMDAwLCBlYXNlOiBcInBvd2VyMS5vdXRcIiB9LFxyXG4gICAgZGVsYXk6IDIwMDAsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByZWxvYWRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBybC1sb2dvXCI+XHJcbiAgICAgICAgPGFuaW1hdGVkLmgxIGNsYXNzTmFtZT1cImhpZGVcIiBzdHlsZT17ZmFkZUlufT5cclxuICAgICAgICAgIGtkb3RkZXZcclxuICAgICAgICA8L2FuaW1hdGVkLmgxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIDxhbmltYXRlZC5kaXYgY2xhc3NOYW1lPVwibGlnaHRDeWFuLXNsaWRlclwiIHN0eWxlPXtzbGlkZTF9IC8+XHJcbiAgICAgIDxhbmltYXRlZC5kaXYgY2xhc3NOYW1lPVwicGVyc2lhbkdyZWVuLXNsaWRlclwiIHN0eWxlPXtzbGlkZTJ9IC8+XHJcbiAgICAgIDxhbmltYXRlZC5kaXYgY2xhc3NOYW1lPVwid2hpdGUtc2xpZGVyXCIgc3R5bGU9e3NsaWRlM30gLz4gKi99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTcHJpbmciLCJhbmltYXRlZCIsIkxvYWRlciIsImZhZGVJbiIsImZyb20iLCJvcGFjaXR5IiwidG8iLCJjb25maWciLCJkdXJhdGlvbiIsImVhc2UiLCJkZWxheSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Loader/Loader.jsx\n"));

/***/ })

});