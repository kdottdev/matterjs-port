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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/dist/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Loader = ()=>{\n    _s();\n    const slide1 = (0,react_spring__WEBPACK_IMPORTED_MODULE_2__.useSpring)({\n        to: {\n            x: \"-10%\"\n        },\n        config: {\n            duration: 1000,\n            ease: \"power1.out\"\n        }\n    });\n    const slide2 = (0,react_spring__WEBPACK_IMPORTED_MODULE_2__.useSpring)({\n        to: {\n            x: \"-20%\"\n        },\n        config: {\n            duration: 1500,\n            ease: \"power1.out\"\n        },\n        delay: 1000\n    });\n    const slide3 = (0,react_spring__WEBPACK_IMPORTED_MODULE_2__.useSpring)({\n        to: {\n            x: \"-30%\"\n        },\n        config: {\n            duration: 1500,\n            ease: \"power1.out\"\n        },\n        delay: 1000\n    });\n    const show = (0,react_spring__WEBPACK_IMPORTED_MODULE_2__.useSpring)({\n        to: {\n            x: \"0%\",\n            opacity: 1\n        },\n        config: {\n            duration: 2000,\n            ease: \"power1.out\"\n        },\n        delay: 2000\n    });\n    const hide = (0,react_spring__WEBPACK_IMPORTED_MODULE_2__.useSpring)({\n        to: {\n            x: \"200%\"\n        },\n        config: {\n            duration: 3000,\n            ease: \"power1.out\"\n        }\n    });\n    const fadeIn = (0,react_spring__WEBPACK_IMPORTED_MODULE_2__.useSpring)({\n        from: {\n            opacity: 0\n        },\n        to: {\n            opacity: 1\n        },\n        config: {\n            duration: 1000,\n            ease: \"power1.out\"\n        },\n        delay: 2000\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"preloader\",\n        style: hide,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"prl-logo\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_spring__WEBPACK_IMPORTED_MODULE_2__.animated.h1, {\n                    className: \"hide\",\n                    style: fadeIn,\n                    children: [\n                        \" \",\n                        \"cruise. ™\",\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Kartik jha\\\\Desktop\\\\Final-Port-Mk1\\\\components\\\\Loader\\\\Loader.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Kartik jha\\\\Desktop\\\\Final-Port-Mk1\\\\components\\\\Loader\\\\Loader.jsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_spring__WEBPACK_IMPORTED_MODULE_2__.animated.div, {\n                className: \"lightCyan-slider\",\n                style: slide1\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Kartik jha\\\\Desktop\\\\Final-Port-Mk1\\\\components\\\\Loader\\\\Loader.jsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_spring__WEBPACK_IMPORTED_MODULE_2__.animated.div, {\n                className: \"persianGreen-slider\",\n                style: slide2\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Kartik jha\\\\Desktop\\\\Final-Port-Mk1\\\\components\\\\Loader\\\\Loader.jsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_spring__WEBPACK_IMPORTED_MODULE_2__.animated.div, {\n                className: \"white-slider\",\n                style: slide3\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Kartik jha\\\\Desktop\\\\Final-Port-Mk1\\\\components\\\\Loader\\\\Loader.jsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Kartik jha\\\\Desktop\\\\Final-Port-Mk1\\\\components\\\\Loader\\\\Loader.jsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Loader, \"7c1z3kXqN2QOUXKXCnVVMYNKLtE=\", false, function() {\n    return [\n        react_spring__WEBPACK_IMPORTED_MODULE_2__.useSpring,\n        react_spring__WEBPACK_IMPORTED_MODULE_2__.useSpring,\n        react_spring__WEBPACK_IMPORTED_MODULE_2__.useSpring,\n        react_spring__WEBPACK_IMPORTED_MODULE_2__.useSpring,\n        react_spring__WEBPACK_IMPORTED_MODULE_2__.useSpring,\n        react_spring__WEBPACK_IMPORTED_MODULE_2__.useSpring\n    ];\n});\n_c = Loader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Loader);\nvar _c;\n$RefreshReg$(_c, \"Loader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvYWRlci9Mb2FkZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXlDO0FBQ1U7QUFFbkQsTUFBTUksU0FBUyxJQUFNOztJQUNuQixNQUFNQyxTQUFTSCx1REFBU0EsQ0FBQztRQUN2QkksSUFBSTtZQUFFQyxHQUFHO1FBQU87UUFDaEJDLFFBQVE7WUFBRUMsVUFBVTtZQUFNQyxNQUFNO1FBQWE7SUFDL0M7SUFFQSxNQUFNQyxTQUFTVCx1REFBU0EsQ0FBQztRQUN2QkksSUFBSTtZQUFFQyxHQUFHO1FBQU87UUFDaEJDLFFBQVE7WUFBRUMsVUFBVTtZQUFNQyxNQUFNO1FBQWE7UUFDN0NFLE9BQU87SUFDVDtJQUVBLE1BQU1DLFNBQVNYLHVEQUFTQSxDQUFDO1FBQ3ZCSSxJQUFJO1lBQUVDLEdBQUc7UUFBTztRQUNoQkMsUUFBUTtZQUFFQyxVQUFVO1lBQU1DLE1BQU07UUFBYTtRQUM3Q0UsT0FBTztJQUNUO0lBRUEsTUFBTUUsT0FBT1osdURBQVNBLENBQUM7UUFDckJJLElBQUk7WUFBRUMsR0FBRztZQUFNUSxTQUFTO1FBQUU7UUFDMUJQLFFBQVE7WUFBRUMsVUFBVTtZQUFNQyxNQUFNO1FBQWE7UUFDN0NFLE9BQU87SUFDVDtJQUVBLE1BQU1JLE9BQU9kLHVEQUFTQSxDQUFDO1FBQ3JCSSxJQUFJO1lBQUVDLEdBQUc7UUFBTztRQUNoQkMsUUFBUTtZQUFFQyxVQUFVO1lBQU1DLE1BQU07UUFBYTtJQUMvQztJQUVBLE1BQU1PLFNBQVNmLHVEQUFTQSxDQUFDO1FBQ3ZCZ0IsTUFBTTtZQUFFSCxTQUFTO1FBQUU7UUFDbkJULElBQUk7WUFBRVMsU0FBUztRQUFFO1FBQ2pCUCxRQUFRO1lBQUVDLFVBQVU7WUFBTUMsTUFBTTtRQUFhO1FBQzdDRSxPQUFPO0lBQ1Q7SUFFQSxxQkFDRSw4REFBQ087UUFBSUMsV0FBVTtRQUFZQyxPQUFPTDs7MEJBQ2hDLDhEQUFDRztnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ2pCLHFEQUFXO29CQUFDaUIsV0FBVTtvQkFBT0MsT0FBT0o7O3dCQUNsQzt3QkFBSTt3QkFDVzs7Ozs7Ozs7Ozs7OzBCQUdwQiw4REFBQ2Qsc0RBQVk7Z0JBQUNpQixXQUFVO2dCQUFtQkMsT0FBT2hCOzs7Ozs7MEJBQ2xELDhEQUFDRixzREFBWTtnQkFBQ2lCLFdBQVU7Z0JBQXNCQyxPQUFPVjs7Ozs7OzBCQUNyRCw4REFBQ1Isc0RBQVk7Z0JBQUNpQixXQUFVO2dCQUFlQyxPQUFPUjs7Ozs7Ozs7Ozs7O0FBR3BEO0dBakRNVDs7UUFDV0YsbURBQVNBO1FBS1RBLG1EQUFTQTtRQU1UQSxtREFBU0E7UUFNWEEsbURBQVNBO1FBTVRBLG1EQUFTQTtRQUtQQSxtREFBU0E7OztLQTdCcEJFO0FBbUROLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTG9hZGVyL0xvYWRlci5qc3g/ZGRlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNwcmluZywgYW5pbWF0ZWQgfSBmcm9tIFwicmVhY3Qtc3ByaW5nXCI7XHJcblxyXG5jb25zdCBMb2FkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2xpZGUxID0gdXNlU3ByaW5nKHtcclxuICAgIHRvOiB7IHg6IFwiLTEwJVwiIH0sXHJcbiAgICBjb25maWc6IHsgZHVyYXRpb246IDEwMDAsIGVhc2U6IFwicG93ZXIxLm91dFwiIH0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHNsaWRlMiA9IHVzZVNwcmluZyh7XHJcbiAgICB0bzogeyB4OiBcIi0yMCVcIiB9LFxyXG4gICAgY29uZmlnOiB7IGR1cmF0aW9uOiAxNTAwLCBlYXNlOiBcInBvd2VyMS5vdXRcIiB9LFxyXG4gICAgZGVsYXk6IDEwMDAsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHNsaWRlMyA9IHVzZVNwcmluZyh7XHJcbiAgICB0bzogeyB4OiBcIi0zMCVcIiB9LFxyXG4gICAgY29uZmlnOiB7IGR1cmF0aW9uOiAxNTAwLCBlYXNlOiBcInBvd2VyMS5vdXRcIiB9LFxyXG4gICAgZGVsYXk6IDEwMDAsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHNob3cgPSB1c2VTcHJpbmcoe1xyXG4gICAgdG86IHsgeDogXCIwJVwiLCBvcGFjaXR5OiAxIH0sXHJcbiAgICBjb25maWc6IHsgZHVyYXRpb246IDIwMDAsIGVhc2U6IFwicG93ZXIxLm91dFwiIH0sXHJcbiAgICBkZWxheTogMjAwMCxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGlkZSA9IHVzZVNwcmluZyh7XHJcbiAgICB0bzogeyB4OiBcIjIwMCVcIiB9LFxyXG4gICAgY29uZmlnOiB7IGR1cmF0aW9uOiAzMDAwLCBlYXNlOiBcInBvd2VyMS5vdXRcIiB9LFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBmYWRlSW4gPSB1c2VTcHJpbmcoe1xyXG4gICAgZnJvbTogeyBvcGFjaXR5OiAwIH0sXHJcbiAgICB0bzogeyBvcGFjaXR5OiAxIH0sXHJcbiAgICBjb25maWc6IHsgZHVyYXRpb246IDEwMDAsIGVhc2U6IFwicG93ZXIxLm91dFwiIH0sXHJcbiAgICBkZWxheTogMjAwMCxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJlbG9hZGVyXCIgc3R5bGU9e2hpZGV9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBybC1sb2dvXCI+XHJcbiAgICAgICAgPGFuaW1hdGVkLmgxIGNsYXNzTmFtZT1cImhpZGVcIiBzdHlsZT17ZmFkZUlufT5cclxuICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgIGNydWlzZS4gJnRyYWRlO3tcIiBcIn1cclxuICAgICAgICA8L2FuaW1hdGVkLmgxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGFuaW1hdGVkLmRpdiBjbGFzc05hbWU9XCJsaWdodEN5YW4tc2xpZGVyXCIgc3R5bGU9e3NsaWRlMX0gLz5cclxuICAgICAgPGFuaW1hdGVkLmRpdiBjbGFzc05hbWU9XCJwZXJzaWFuR3JlZW4tc2xpZGVyXCIgc3R5bGU9e3NsaWRlMn0gLz5cclxuICAgICAgPGFuaW1hdGVkLmRpdiBjbGFzc05hbWU9XCJ3aGl0ZS1zbGlkZXJcIiBzdHlsZT17c2xpZGUzfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRlcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3ByaW5nIiwiYW5pbWF0ZWQiLCJMb2FkZXIiLCJzbGlkZTEiLCJ0byIsIngiLCJjb25maWciLCJkdXJhdGlvbiIsImVhc2UiLCJzbGlkZTIiLCJkZWxheSIsInNsaWRlMyIsInNob3ciLCJvcGFjaXR5IiwiaGlkZSIsImZhZGVJbiIsImZyb20iLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Loader/Loader.jsx\n"));

/***/ })

});