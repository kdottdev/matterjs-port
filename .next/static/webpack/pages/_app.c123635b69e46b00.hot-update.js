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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/dist/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Loader = (param)=>{\n    let { end  } = param;\n    _s();\n    // const slide1 = useSpring({\n    //   to: { x: \"-10%\" },\n    //   config: { duration: 1000, ease: \"power1.out\" },\n    // });\n    const props = (0,react_spring__WEBPACK_IMPORTED_MODULE_2__.useSpring)({\n        from: {\n            x: -100\n        },\n        to: {\n            x: 100\n        },\n        config: {\n            duration: 1000\n        }\n    });\n    // const slide3 = useSpring({\n    //   to: { x: \"-30%\" },\n    //   config: { duration: 1500, ease: \"power1.out\" },\n    //   delay: 1000,\n    // });\n    // const show = useSpring({\n    //   to: { x: \"0%\", opacity: 1 },\n    //   config: { duration: 2000, ease: \"power1.out\" },\n    //   delay: 2000,\n    // });\n    // const hide = useSpring({\n    //   to: { x: \"200%\" },\n    //   config: { duration: 3000, ease: \"power1.out\" },\n    // });\n    const fadeIn = (0,react_spring__WEBPACK_IMPORTED_MODULE_2__.useSpring)({\n        from: {\n            opacity: 0\n        },\n        to: {\n            opacity: 1\n        },\n        config: {\n            duration: 1000,\n            ease: \"power1.out\"\n        },\n        delay: 2000\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"preloader\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"prl-logo\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_spring__WEBPACK_IMPORTED_MODULE_2__.animated.h1, {\n                    className: \"hide\",\n                    style: fadeIn,\n                    children: \"kdotdev\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Kartik jha\\\\Desktop\\\\Final-Port-Mk1\\\\components\\\\Loader\\\\Loader.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Kartik jha\\\\Desktop\\\\Final-Port-Mk1\\\\components\\\\Loader\\\\Loader.jsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_spring__WEBPACK_IMPORTED_MODULE_2__.animated.div, {\n                className: \"persianGreen-slider\",\n                style: {\n                    transform: props.x.to({\n                        range: [\n                            -100,\n                            0,\n                            100\n                        ],\n                        output: [\n                            \"-100%\",\n                            \"0%\",\n                            \"100%\"\n                        ]\n                    }).to((x)=>\"translateX(\".concat(x, \")\"))\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Kartik jha\\\\Desktop\\\\Final-Port-Mk1\\\\components\\\\Loader\\\\Loader.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Kartik jha\\\\Desktop\\\\Final-Port-Mk1\\\\components\\\\Loader\\\\Loader.jsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Loader, \"4Ue1z+IJtxmIQsyLVnh286Hy5gE=\", false, function() {\n    return [\n        react_spring__WEBPACK_IMPORTED_MODULE_2__.useSpring,\n        react_spring__WEBPACK_IMPORTED_MODULE_2__.useSpring\n    ];\n});\n_c = Loader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Loader);\nvar _c;\n$RefreshReg$(_c, \"Loader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvYWRlci9Mb2FkZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXlDO0FBQ1U7QUFFbkQsTUFBTUksU0FBUyxTQUFhO1FBQVosRUFBRUMsSUFBRyxFQUFFOztJQUNyQiw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLG9EQUFvRDtJQUNwRCxNQUFNO0lBRU4sTUFBTUMsUUFBUUosdURBQVNBLENBQUM7UUFDdEJLLE1BQU07WUFBRUMsR0FBRyxDQUFDO1FBQUk7UUFDaEJDLElBQUk7WUFBRUQsR0FBRztRQUFJO1FBQ2JFLFFBQVE7WUFBRUMsVUFBVTtRQUFLO0lBQzNCO0lBRUEsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixvREFBb0Q7SUFDcEQsaUJBQWlCO0lBQ2pCLE1BQU07SUFFTiwyQkFBMkI7SUFDM0IsaUNBQWlDO0lBQ2pDLG9EQUFvRDtJQUNwRCxpQkFBaUI7SUFDakIsTUFBTTtJQUVOLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsb0RBQW9EO0lBQ3BELE1BQU07SUFFTixNQUFNQyxTQUFTVix1REFBU0EsQ0FBQztRQUN2QkssTUFBTTtZQUFFTSxTQUFTO1FBQUU7UUFDbkJKLElBQUk7WUFBRUksU0FBUztRQUFFO1FBQ2pCSCxRQUFRO1lBQUVDLFVBQVU7WUFBTUcsTUFBTTtRQUFhO1FBQzdDQyxPQUFPO0lBQ1Q7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDZCxxREFBVztvQkFBQ2MsV0FBVTtvQkFBT0UsT0FBT1A7OEJBQVE7Ozs7Ozs7Ozs7OzBCQUkvQyw4REFBQ1Qsc0RBQVk7Z0JBQ1hjLFdBQVU7Z0JBQ1ZFLE9BQU87b0JBQ0xDLFdBQVdkLE1BQU1FLENBQUMsQ0FDZkMsRUFBRSxDQUFDO3dCQUNGWSxPQUFPOzRCQUFDLENBQUM7NEJBQUs7NEJBQUc7eUJBQUk7d0JBQ3JCQyxRQUFROzRCQUFDOzRCQUFTOzRCQUFNO3lCQUFPO29CQUNqQyxHQUNDYixFQUFFLENBQUMsQ0FBQ0QsSUFBTSxjQUFnQixPQUFGQSxHQUFFO2dCQUMvQjs7Ozs7Ozs7Ozs7O0FBTVI7R0ExRE1KOztRQU1VRixtREFBU0E7UUF1QlJBLG1EQUFTQTs7O0tBN0JwQkU7QUE0RE4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2FkZXIvTG9hZGVyLmpzeD9kZGVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCB9IGZyb20gXCJyZWFjdC1zcHJpbmdcIjtcclxuXHJcbmNvbnN0IExvYWRlciA9ICh7IGVuZCB9KSA9PiB7XHJcbiAgLy8gY29uc3Qgc2xpZGUxID0gdXNlU3ByaW5nKHtcclxuICAvLyAgIHRvOiB7IHg6IFwiLTEwJVwiIH0sXHJcbiAgLy8gICBjb25maWc6IHsgZHVyYXRpb246IDEwMDAsIGVhc2U6IFwicG93ZXIxLm91dFwiIH0sXHJcbiAgLy8gfSk7XHJcblxyXG4gIGNvbnN0IHByb3BzID0gdXNlU3ByaW5nKHtcclxuICAgIGZyb206IHsgeDogLTEwMCB9LFxyXG4gICAgdG86IHsgeDogMTAwIH0sXHJcbiAgICBjb25maWc6IHsgZHVyYXRpb246IDEwMDAgfSxcclxuICB9KTtcclxuXHJcbiAgLy8gY29uc3Qgc2xpZGUzID0gdXNlU3ByaW5nKHtcclxuICAvLyAgIHRvOiB7IHg6IFwiLTMwJVwiIH0sXHJcbiAgLy8gICBjb25maWc6IHsgZHVyYXRpb246IDE1MDAsIGVhc2U6IFwicG93ZXIxLm91dFwiIH0sXHJcbiAgLy8gICBkZWxheTogMTAwMCxcclxuICAvLyB9KTtcclxuXHJcbiAgLy8gY29uc3Qgc2hvdyA9IHVzZVNwcmluZyh7XHJcbiAgLy8gICB0bzogeyB4OiBcIjAlXCIsIG9wYWNpdHk6IDEgfSxcclxuICAvLyAgIGNvbmZpZzogeyBkdXJhdGlvbjogMjAwMCwgZWFzZTogXCJwb3dlcjEub3V0XCIgfSxcclxuICAvLyAgIGRlbGF5OiAyMDAwLFxyXG4gIC8vIH0pO1xyXG5cclxuICAvLyBjb25zdCBoaWRlID0gdXNlU3ByaW5nKHtcclxuICAvLyAgIHRvOiB7IHg6IFwiMjAwJVwiIH0sXHJcbiAgLy8gICBjb25maWc6IHsgZHVyYXRpb246IDMwMDAsIGVhc2U6IFwicG93ZXIxLm91dFwiIH0sXHJcbiAgLy8gfSk7XHJcblxyXG4gIGNvbnN0IGZhZGVJbiA9IHVzZVNwcmluZyh7XHJcbiAgICBmcm9tOiB7IG9wYWNpdHk6IDAgfSxcclxuICAgIHRvOiB7IG9wYWNpdHk6IDEgfSxcclxuICAgIGNvbmZpZzogeyBkdXJhdGlvbjogMTAwMCwgZWFzZTogXCJwb3dlcjEub3V0XCIgfSxcclxuICAgIGRlbGF5OiAyMDAwLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcmVsb2FkZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmwtbG9nb1wiPlxyXG4gICAgICAgIDxhbmltYXRlZC5oMSBjbGFzc05hbWU9XCJoaWRlXCIgc3R5bGU9e2ZhZGVJbn0+XHJcbiAgICAgICAgICBrZG90ZGV2XHJcbiAgICAgICAgPC9hbmltYXRlZC5oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxhbmltYXRlZC5kaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJwZXJzaWFuR3JlZW4tc2xpZGVyXCJcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBwcm9wcy54XHJcbiAgICAgICAgICAgIC50byh7XHJcbiAgICAgICAgICAgICAgcmFuZ2U6IFstMTAwLCAwLCAxMDBdLFxyXG4gICAgICAgICAgICAgIG91dHB1dDogW1wiLTEwMCVcIiwgXCIwJVwiLCBcIjEwMCVcIl0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50bygoeCkgPT4gYHRyYW5zbGF0ZVgoJHt4fSlgKSxcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICB7LyogPGFuaW1hdGVkLmRpdiBjbGFzc05hbWU9XCJsaWdodEN5YW4tc2xpZGVyXCIgc3R5bGU9e3NsaWRlMX0gLz5cclxuICAgICAgPGFuaW1hdGVkLmRpdiBjbGFzc05hbWU9XCJ3aGl0ZS1zbGlkZXJcIiBzdHlsZT17c2xpZGUzfSAvPiAqL31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVNwcmluZyIsImFuaW1hdGVkIiwiTG9hZGVyIiwiZW5kIiwicHJvcHMiLCJmcm9tIiwieCIsInRvIiwiY29uZmlnIiwiZHVyYXRpb24iLCJmYWRlSW4iLCJvcGFjaXR5IiwiZWFzZSIsImRlbGF5IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJzdHlsZSIsInRyYW5zZm9ybSIsInJhbmdlIiwib3V0cHV0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Loader/Loader.jsx\n"));

/***/ })

});