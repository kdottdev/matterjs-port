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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/dist/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Loader = ()=>{\n    _s();\n    const [bgColor, setBgColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"#5b3a70\");\n    const bg = (0,react_spring__WEBPACK_IMPORTED_MODULE_2__.useSpring)({\n        from: {\n            background: \"#5b3a70\"\n        },\n        to: {\n            background: bgColor\n        },\n        config: {\n            duration: 5000\n        }\n    });\n    const rotate = (0,react_spring__WEBPACK_IMPORTED_MODULE_2__.useSpring)({\n        from: {\n            transform: \"rotate(0deg)\"\n        },\n        to: {\n            transform: \"rotate(360deg)\"\n        },\n        config: {\n            duration: 1000\n        },\n        loop: true\n    });\n    const changeColor = ()=>{\n        const colors = [\n            \"#5b3a70\",\n            \"#7c538c\",\n            \"#9c6aa8\",\n            \"#bc81c4\",\n            \"#dc98e0\"\n        ];\n        const nextColor = colors[Math.floor(Math.random() * colors.length)];\n        setBgColor(nextColor);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_spring__WEBPACK_IMPORTED_MODULE_2__.animated.div, {\n        className: \"preloader\",\n        style: {\n            ...bg,\n            ...rotate\n        },\n        onClick: changeColor,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Kartik jha\\\\Desktop\\\\Final-Port-Mk1\\\\components\\\\Loader\\\\Loader.jsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Kartik jha\\\\Desktop\\\\Final-Port-Mk1\\\\components\\\\Loader\\\\Loader.jsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Loader, \"edRneoP+kYiGrNYx68Z38t3OGVo=\", false, function() {\n    return [\n        react_spring__WEBPACK_IMPORTED_MODULE_2__.useSpring,\n        react_spring__WEBPACK_IMPORTED_MODULE_2__.useSpring\n    ];\n});\n_c = Loader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Loader);\nvar _c;\n$RefreshReg$(_c, \"Loader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvYWRlci9Mb2FkZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdDO0FBQ1c7QUFFbkQsTUFBTUksU0FBUyxJQUFNOztJQUNuQixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0wsK0NBQVFBLENBQUM7SUFFdkMsTUFBTU0sS0FBS0wsdURBQVNBLENBQUM7UUFDbkJNLE1BQU07WUFBRUMsWUFBWTtRQUFVO1FBQzlCQyxJQUFJO1lBQUVELFlBQVlKO1FBQVE7UUFDMUJNLFFBQVE7WUFBRUMsVUFBVTtRQUFLO0lBQzNCO0lBRUEsTUFBTUMsU0FBU1gsdURBQVNBLENBQUM7UUFDdkJNLE1BQU07WUFBRU0sV0FBVztRQUFlO1FBQ2xDSixJQUFJO1lBQUVJLFdBQVc7UUFBaUI7UUFDbENILFFBQVE7WUFBRUMsVUFBVTtRQUFLO1FBQ3pCRyxNQUFNLElBQUk7SUFDWjtJQUVBLE1BQU1DLGNBQWMsSUFBTTtRQUN4QixNQUFNQyxTQUFTO1lBQUM7WUFBVztZQUFXO1lBQVc7WUFBVztTQUFVO1FBQ3RFLE1BQU1DLFlBQVlELE1BQU0sQ0FBQ0UsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQUtKLE9BQU9LLE1BQU0sRUFBRTtRQUNuRWhCLFdBQVdZO0lBQ2I7SUFFQSxxQkFDRSw4REFBQ2Ysc0RBQVk7UUFDWHFCLFdBQVU7UUFDVkMsT0FBTztZQUFFLEdBQUdsQixFQUFFO1lBQUUsR0FBR00sTUFBTTtRQUFDO1FBQzFCYSxTQUFTVjtrQkFFVCw0RUFBQ1c7c0JBQUs7Ozs7Ozs7Ozs7O0FBR1o7R0EvQk12Qjs7UUFHT0YsbURBQVNBO1FBTUxBLG1EQUFTQTs7O0tBVHBCRTtBQWlDTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xvYWRlci9Mb2FkZXIuanN4P2RkZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNwcmluZywgYW5pbWF0ZWQgfSBmcm9tIFwicmVhY3Qtc3ByaW5nXCI7XHJcblxyXG5jb25zdCBMb2FkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2JnQ29sb3IsIHNldEJnQ29sb3JdID0gdXNlU3RhdGUoXCIjNWIzYTcwXCIpO1xyXG5cclxuICBjb25zdCBiZyA9IHVzZVNwcmluZyh7XHJcbiAgICBmcm9tOiB7IGJhY2tncm91bmQ6IFwiIzViM2E3MFwiIH0sXHJcbiAgICB0bzogeyBiYWNrZ3JvdW5kOiBiZ0NvbG9yIH0sXHJcbiAgICBjb25maWc6IHsgZHVyYXRpb246IDUwMDAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgcm90YXRlID0gdXNlU3ByaW5nKHtcclxuICAgIGZyb206IHsgdHJhbnNmb3JtOiBcInJvdGF0ZSgwZGVnKVwiIH0sXHJcbiAgICB0bzogeyB0cmFuc2Zvcm06IFwicm90YXRlKDM2MGRlZylcIiB9LFxyXG4gICAgY29uZmlnOiB7IGR1cmF0aW9uOiAxMDAwIH0sXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBjaGFuZ2VDb2xvciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbG9ycyA9IFtcIiM1YjNhNzBcIiwgXCIjN2M1MzhjXCIsIFwiIzljNmFhOFwiLCBcIiNiYzgxYzRcIiwgXCIjZGM5OGUwXCJdO1xyXG4gICAgY29uc3QgbmV4dENvbG9yID0gY29sb3JzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbG9ycy5sZW5ndGgpXTtcclxuICAgIHNldEJnQ29sb3IobmV4dENvbG9yKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGFuaW1hdGVkLmRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJwcmVsb2FkZXJcIlxyXG4gICAgICBzdHlsZT17eyAuLi5iZywgLi4ucm90YXRlIH19XHJcbiAgICAgIG9uQ2xpY2s9e2NoYW5nZUNvbG9yfVxyXG4gICAgPlxyXG4gICAgICA8c3Bhbj5Mb2FkaW5nLi4uPC9zcGFuPlxyXG4gICAgPC9hbmltYXRlZC5kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRlcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VTcHJpbmciLCJhbmltYXRlZCIsIkxvYWRlciIsImJnQ29sb3IiLCJzZXRCZ0NvbG9yIiwiYmciLCJmcm9tIiwiYmFja2dyb3VuZCIsInRvIiwiY29uZmlnIiwiZHVyYXRpb24iLCJyb3RhdGUiLCJ0cmFuc2Zvcm0iLCJsb29wIiwiY2hhbmdlQ29sb3IiLCJjb2xvcnMiLCJuZXh0Q29sb3IiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsIm9uQ2xpY2siLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Loader/Loader.jsx\n"));

/***/ })

});