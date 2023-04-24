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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Loader/Loader.jsx":
/*!**************************************!*\
  !*** ./components/Loader/Loader.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ \"react-spring\");\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Loader = ({ end  })=>{\n    // const slide1 = useSpring({\n    //   to: { x: \"-10%\" },\n    //   config: { duration: 1000, ease: \"power1.out\" },\n    // });\n    const props = (0,react_spring__WEBPACK_IMPORTED_MODULE_2__.useSpring)({\n        from: {\n            x: -100\n        },\n        to: {\n            x: 100\n        },\n        config: {\n            duration: 1000\n        }\n    });\n    // const slide3 = useSpring({\n    //   to: { x: \"-30%\" },\n    //   config: { duration: 1500, ease: \"power1.out\" },\n    //   delay: 1000,\n    // });\n    // const show = useSpring({\n    //   to: { x: \"0%\", opacity: 1 },\n    //   config: { duration: 2000, ease: \"power1.out\" },\n    //   delay: 2000,\n    // });\n    // const hide = useSpring({\n    //   to: { x: \"200%\" },\n    //   config: { duration: 3000, ease: \"power1.out\" },\n    // });\n    const fadeIn = (0,react_spring__WEBPACK_IMPORTED_MODULE_2__.useSpring)({\n        from: {\n            opacity: 0\n        },\n        to: {\n            opacity: 1\n        },\n        config: {\n            duration: 1000,\n            ease: \"power1.out\"\n        },\n        delay: 1500\n    });\n    const fadeOut = (0,react_spring__WEBPACK_IMPORTED_MODULE_2__.useSpring)({\n        from: {\n            opacity: 1,\n            y: \"0\"\n        },\n        to: {\n            opacity: 0,\n            y: \"-100%\"\n        },\n        config: {\n            duration: 1000,\n            ease: \"power1.out\"\n        },\n        delay: 3000,\n        onRest: ()=>{\n            end();\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_spring__WEBPACK_IMPORTED_MODULE_2__.animated.div, {\n        className: \"preloader\",\n        style: fadeOut,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"prl-logo\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_spring__WEBPACK_IMPORTED_MODULE_2__.animated.h1, {\n                    className: \"hide\",\n                    style: fadeIn,\n                    children: \"kdotdev\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Kartik jha\\\\Desktop\\\\Final-Port-Mk1\\\\components\\\\Loader\\\\Loader.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Kartik jha\\\\Desktop\\\\Final-Port-Mk1\\\\components\\\\Loader\\\\Loader.jsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_spring__WEBPACK_IMPORTED_MODULE_2__.animated.div, {\n                className: \"persianGreen-slider\",\n                style: {\n                    transform: props.x.to({\n                        range: [\n                            -100,\n                            0,\n                            100\n                        ],\n                        output: [\n                            \"-100%\",\n                            \"0%\",\n                            \"100%\"\n                        ]\n                    }).to((x)=>`translateX(${x})`)\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Kartik jha\\\\Desktop\\\\Final-Port-Mk1\\\\components\\\\Loader\\\\Loader.jsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Kartik jha\\\\Desktop\\\\Final-Port-Mk1\\\\components\\\\Loader\\\\Loader.jsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvYWRlci9Mb2FkZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ1U7QUFFbkQsTUFBTUksU0FBUyxDQUFDLEVBQUVDLElBQUcsRUFBRSxHQUFLO0lBQzFCLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsb0RBQW9EO0lBQ3BELE1BQU07SUFFTixNQUFNQyxRQUFRSix1REFBU0EsQ0FBQztRQUN0QkssTUFBTTtZQUFFQyxHQUFHLENBQUM7UUFBSTtRQUNoQkMsSUFBSTtZQUFFRCxHQUFHO1FBQUk7UUFDYkUsUUFBUTtZQUFFQyxVQUFVO1FBQUs7SUFDM0I7SUFFQSw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLG9EQUFvRDtJQUNwRCxpQkFBaUI7SUFDakIsTUFBTTtJQUVOLDJCQUEyQjtJQUMzQixpQ0FBaUM7SUFDakMsb0RBQW9EO0lBQ3BELGlCQUFpQjtJQUNqQixNQUFNO0lBRU4sMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixvREFBb0Q7SUFDcEQsTUFBTTtJQUVOLE1BQU1DLFNBQVNWLHVEQUFTQSxDQUFDO1FBQ3ZCSyxNQUFNO1lBQUVNLFNBQVM7UUFBRTtRQUNuQkosSUFBSTtZQUFFSSxTQUFTO1FBQUU7UUFDakJILFFBQVE7WUFBRUMsVUFBVTtZQUFNRyxNQUFNO1FBQWE7UUFDN0NDLE9BQU87SUFDVDtJQUVBLE1BQU1DLFVBQVVkLHVEQUFTQSxDQUFDO1FBQ3hCSyxNQUFNO1lBQUVNLFNBQVM7WUFBR0ksR0FBRztRQUFJO1FBQzNCUixJQUFJO1lBQUVJLFNBQVM7WUFBR0ksR0FBRztRQUFRO1FBQzdCUCxRQUFRO1lBQUVDLFVBQVU7WUFBTUcsTUFBTTtRQUFhO1FBQzdDQyxPQUFPO1FBQ1BHLFFBQVEsSUFBTTtZQUNaYjtRQUNGO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0Ysc0RBQVk7UUFBQ2lCLFdBQVU7UUFBWUMsT0FBT0w7OzBCQUN6Qyw4REFBQ0c7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNqQixxREFBVztvQkFBQ2lCLFdBQVU7b0JBQU9DLE9BQU9UOzhCQUFROzs7Ozs7Ozs7OzswQkFJL0MsOERBQUNULHNEQUFZO2dCQUNYaUIsV0FBVTtnQkFDVkMsT0FBTztvQkFDTEUsV0FBV2pCLE1BQU1FLENBQUMsQ0FDZkMsRUFBRSxDQUFDO3dCQUNGZSxPQUFPOzRCQUFDLENBQUM7NEJBQUs7NEJBQUc7eUJBQUk7d0JBQ3JCQyxRQUFROzRCQUFDOzRCQUFTOzRCQUFNO3lCQUFPO29CQUNqQyxHQUNDaEIsRUFBRSxDQUFDLENBQUNELElBQU0sQ0FBQyxXQUFXLEVBQUVBLEVBQUUsQ0FBQyxDQUFDO2dCQUNqQzs7Ozs7Ozs7Ozs7O0FBTVI7QUFFQSxpRUFBZUosTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FyaW5vLW5leHRqcy8uL2NvbXBvbmVudHMvTG9hZGVyL0xvYWRlci5qc3g/ZGRlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNwcmluZywgYW5pbWF0ZWQgfSBmcm9tIFwicmVhY3Qtc3ByaW5nXCI7XHJcblxyXG5jb25zdCBMb2FkZXIgPSAoeyBlbmQgfSkgPT4ge1xyXG4gIC8vIGNvbnN0IHNsaWRlMSA9IHVzZVNwcmluZyh7XHJcbiAgLy8gICB0bzogeyB4OiBcIi0xMCVcIiB9LFxyXG4gIC8vICAgY29uZmlnOiB7IGR1cmF0aW9uOiAxMDAwLCBlYXNlOiBcInBvd2VyMS5vdXRcIiB9LFxyXG4gIC8vIH0pO1xyXG5cclxuICBjb25zdCBwcm9wcyA9IHVzZVNwcmluZyh7XHJcbiAgICBmcm9tOiB7IHg6IC0xMDAgfSxcclxuICAgIHRvOiB7IHg6IDEwMCB9LFxyXG4gICAgY29uZmlnOiB7IGR1cmF0aW9uOiAxMDAwIH0sXHJcbiAgfSk7XHJcblxyXG4gIC8vIGNvbnN0IHNsaWRlMyA9IHVzZVNwcmluZyh7XHJcbiAgLy8gICB0bzogeyB4OiBcIi0zMCVcIiB9LFxyXG4gIC8vICAgY29uZmlnOiB7IGR1cmF0aW9uOiAxNTAwLCBlYXNlOiBcInBvd2VyMS5vdXRcIiB9LFxyXG4gIC8vICAgZGVsYXk6IDEwMDAsXHJcbiAgLy8gfSk7XHJcblxyXG4gIC8vIGNvbnN0IHNob3cgPSB1c2VTcHJpbmcoe1xyXG4gIC8vICAgdG86IHsgeDogXCIwJVwiLCBvcGFjaXR5OiAxIH0sXHJcbiAgLy8gICBjb25maWc6IHsgZHVyYXRpb246IDIwMDAsIGVhc2U6IFwicG93ZXIxLm91dFwiIH0sXHJcbiAgLy8gICBkZWxheTogMjAwMCxcclxuICAvLyB9KTtcclxuXHJcbiAgLy8gY29uc3QgaGlkZSA9IHVzZVNwcmluZyh7XHJcbiAgLy8gICB0bzogeyB4OiBcIjIwMCVcIiB9LFxyXG4gIC8vICAgY29uZmlnOiB7IGR1cmF0aW9uOiAzMDAwLCBlYXNlOiBcInBvd2VyMS5vdXRcIiB9LFxyXG4gIC8vIH0pO1xyXG5cclxuICBjb25zdCBmYWRlSW4gPSB1c2VTcHJpbmcoe1xyXG4gICAgZnJvbTogeyBvcGFjaXR5OiAwIH0sXHJcbiAgICB0bzogeyBvcGFjaXR5OiAxIH0sXHJcbiAgICBjb25maWc6IHsgZHVyYXRpb246IDEwMDAsIGVhc2U6IFwicG93ZXIxLm91dFwiIH0sXHJcbiAgICBkZWxheTogMTUwMCxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZmFkZU91dCA9IHVzZVNwcmluZyh7XHJcbiAgICBmcm9tOiB7IG9wYWNpdHk6IDEsIHk6IFwiMFwiIH0sXHJcbiAgICB0bzogeyBvcGFjaXR5OiAwLCB5OiBcIi0xMDAlXCIgfSxcclxuICAgIGNvbmZpZzogeyBkdXJhdGlvbjogMTAwMCwgZWFzZTogXCJwb3dlcjEub3V0XCIgfSxcclxuICAgIGRlbGF5OiAzMDAwLFxyXG4gICAgb25SZXN0OiAoKSA9PiB7XHJcbiAgICAgIGVuZCgpO1xyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxhbmltYXRlZC5kaXYgY2xhc3NOYW1lPVwicHJlbG9hZGVyXCIgc3R5bGU9e2ZhZGVPdXR9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBybC1sb2dvXCI+XHJcbiAgICAgICAgPGFuaW1hdGVkLmgxIGNsYXNzTmFtZT1cImhpZGVcIiBzdHlsZT17ZmFkZUlufT5cclxuICAgICAgICAgIGtkb3RkZXZcclxuICAgICAgICA8L2FuaW1hdGVkLmgxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGFuaW1hdGVkLmRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cInBlcnNpYW5HcmVlbi1zbGlkZXJcIlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHByb3BzLnhcclxuICAgICAgICAgICAgLnRvKHtcclxuICAgICAgICAgICAgICByYW5nZTogWy0xMDAsIDAsIDEwMF0sXHJcbiAgICAgICAgICAgICAgb3V0cHV0OiBbXCItMTAwJVwiLCBcIjAlXCIsIFwiMTAwJVwiXSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRvKCh4KSA9PiBgdHJhbnNsYXRlWCgke3h9KWApLFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIHsvKiA8YW5pbWF0ZWQuZGl2IGNsYXNzTmFtZT1cImxpZ2h0Q3lhbi1zbGlkZXJcIiBzdHlsZT17c2xpZGUxfSAvPlxyXG4gICAgICA8YW5pbWF0ZWQuZGl2IGNsYXNzTmFtZT1cIndoaXRlLXNsaWRlclwiIHN0eWxlPXtzbGlkZTN9IC8+ICovfVxyXG4gICAgPC9hbmltYXRlZC5kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRlcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3ByaW5nIiwiYW5pbWF0ZWQiLCJMb2FkZXIiLCJlbmQiLCJwcm9wcyIsImZyb20iLCJ4IiwidG8iLCJjb25maWciLCJkdXJhdGlvbiIsImZhZGVJbiIsIm9wYWNpdHkiLCJlYXNlIiwiZGVsYXkiLCJmYWRlT3V0IiwieSIsIm9uUmVzdCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiaDEiLCJ0cmFuc2Zvcm0iLCJyYW5nZSIsIm91dHB1dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Loader/Loader.jsx\n");

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.scss */ \"./styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Loader_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Loader/Loader */ \"./components/Loader/Loader.jsx\");\n\n\n\n\n\n\n\n\n// import PageLoader from \"../components/PageLoader\"\nconst App = ({ Component , pageProps  })=>{\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const start = ()=>{\n        setLoading(true);\n    };\n    const end = ()=>{\n        setLoading(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        // Used for page transition\n        next_router__WEBPACK_IMPORTED_MODULE_5___default().events.on(\"routeChangeStart\", start);\n        // Router.events.on(\"routeChangeComplete\", end);\n        return ()=>{\n            next_router__WEBPACK_IMPORTED_MODULE_5___default().events.off(\"routeChangeStart\", start);\n        // Router.events.off(\"routeChangeComplete\", end);\n        };\n    }, []);\n    return loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        end: end\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Kartik jha\\\\Desktop\\\\Final-Port-Mk1\\\\pages\\\\_app.jsx\",\n        lineNumber: 30,\n        columnNumber: 20\n    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Kartik jha\\\\Desktop\\\\Final-Port-Mk1\\\\pages\\\\_app.jsx\",\n        lineNumber: 30,\n        columnNumber: 43\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFDTjtBQUNSO0FBQ0M7QUFDVztBQUNYO0FBQ2dCO0FBQ2pELG9EQUFvRDtBQUVwRCxNQUFNSyxNQUFNLENBQUMsRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsR0FBSztJQUN4QyxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1IsK0NBQVFBLENBQUMsS0FBSztJQUU1QyxNQUFNUyxRQUFRLElBQU07UUFDbEJELFdBQVcsSUFBSTtJQUNqQjtJQUNBLE1BQU1FLE1BQU0sSUFBTTtRQUNoQkYsV0FBVyxLQUFLO0lBQ2xCO0lBQ0FQLGdEQUFTQSxDQUFDLElBQU07UUFDZCwyQkFBMkI7UUFFM0JDLDREQUFnQixDQUFDLG9CQUFvQk87UUFDckMsZ0RBQWdEO1FBQ2hELE9BQU8sSUFBTTtZQUNYUCw2REFBaUIsQ0FBQyxvQkFBb0JPO1FBQ3RDLGlEQUFpRDtRQUNuRDtJQUNGLEdBQUcsRUFBRTtJQUVMLE9BQU9GLHdCQUFVLDhEQUFDSixpRUFBTUE7UUFBQ08sS0FBS0E7Ozs7O2tDQUFVLDhEQUFDTDtRQUFXLEdBQUdDLFNBQVM7Ozs7O2lCQUFJO0FBQ3RFO0FBQ0EsaUVBQWVGLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcmluby1uZXh0anMvLi9wYWdlcy9fYXBwLmpzeD80Y2IzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5zY3NzXCI7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9hZGVyL0xvYWRlclwiO1xuLy8gaW1wb3J0IFBhZ2VMb2FkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvUGFnZUxvYWRlclwiXG5cbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gIH07XG4gIGNvbnN0IGVuZCA9ICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBVc2VkIGZvciBwYWdlIHRyYW5zaXRpb25cblxuICAgIFJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsIHN0YXJ0KTtcbiAgICAvLyBSb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBlbmQpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLm9mZihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgc3RhcnQpO1xuICAgICAgLy8gUm91dGVyLmV2ZW50cy5vZmYoXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsIGVuZCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiBsb2FkaW5nID8gPExvYWRlciBlbmQ9e2VuZH0gLz4gOiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+O1xufTtcbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJGcmFnbWVudCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUm91dGVyIiwiTG9hZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzdGFydCIsImVuZCIsImV2ZW50cyIsIm9uIiwib2ZmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.scss":
/*!*****************************!*\
  !*** ./styles/globals.scss ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-spring":
/*!*******************************!*\
  !*** external "react-spring" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-spring");

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
var __webpack_exports__ = (__webpack_exec__("./pages/_app.jsx"));
module.exports = __webpack_exports__;

})();