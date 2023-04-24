"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/CanvasSecondary/CanvasSecondary.jsx":
/*!********************************************************!*\
  !*** ./components/CanvasSecondary/CanvasSecondary.jsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! matter-js */ \"./node_modules/matter-js/build/matter.js\");\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst CanvasSecondary = ()=>{\n    _s();\n    const matterContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const THICCNESS = 60;\n    const smashRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const matterContainer = matterContainerRef.current;\n        // module aliases\n        var Engine = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Engine), Render = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Render), Runner = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Runner), Bodies = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Bodies), Composite = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Composite);\n        // create an engine\n        var engine = Engine.create();\n        // create a renderer\n        var render = Render.create({\n            element: matterContainer,\n            engine: engine,\n            options: {\n                width: matterContainer.clientWidth,\n                height: matterContainer.clientHeight,\n                background: \"#131314\",\n                wireframes: false,\n                showAngleIndicator: false\n            }\n        });\n        var stack = matter_js__WEBPACK_IMPORTED_MODULE_2__.Composites.stack(matterContainer.clientWidth / 2, matterContainer.clientHeight / 2, 5, 10, 10, 0, function(x, y) {\n            return Bodies.rectangle(x, y, 40, 40);\n        });\n        var ground = Bodies.rectangle(matterContainer.clientWidth / 2, matterContainer.clientHeight + THICCNESS / 2, 27184, THICCNESS, {\n            isStatic: true\n        });\n        let leftWall = Bodies.rectangle(0 - THICCNESS / 2, matterContainer.clientHeight / 2, THICCNESS, matterContainer.clientHeight * 5, {\n            isStatic: true\n        });\n        let rightWall = Bodies.rectangle(matterContainer.clientWidth + THICCNESS / 2, matterContainer.clientHeight / 2, THICCNESS, matterContainer.clientHeight * 5, {\n            isStatic: true\n        });\n        // add all of the bodies to the world\n        Composite.add(engine.world, [\n            ground,\n            leftWall,\n            rightWall,\n            stack\n        ]);\n        var mouse = matter_js__WEBPACK_IMPORTED_MODULE_2__.Mouse.create(render.canvas), mouseConstraint = matter_js__WEBPACK_IMPORTED_MODULE_2__.MouseConstraint.create(engine, {\n            mouse: mouse,\n            constraint: {\n                stiffness: 0.2,\n                render: {\n                    visible: false\n                }\n            }\n        });\n        Composite.add(engine.world, mouseConstraint);\n        var ball = Bodies.circle(matterContainer.clientWidth / 8, matterContainer.clientHeight / 3, 50, {\n            density: 0.05,\n            frictionAir: 0.005\n        });\n        Composite.add(engine.world, ball);\n        Composite.add(engine.world, matter_js__WEBPACK_IMPORTED_MODULE_2__.Constraint.create({\n            pointA: {\n                x: matterContainer.clientWidth / 2.5,\n                y: matterContainer.clientHeight / 4\n            },\n            bodyB: ball\n        }));\n        var holdingThread = matter_js__WEBPACK_IMPORTED_MODULE_2__.Constraint.create({\n            pointA: {\n                x: 300,\n                y: 100\n            },\n            bodyB: ball\n        });\n        Composite.add(engine.world, holdingThread);\n        // allow scroll through the canvas\n        mouseConstraint.mouse.element.removeEventListener(\"mousewheel\", mouseConstraint.mouse.mousewheel);\n        mouseConstraint.mouse.element.removeEventListener(\"DOMMouseScroll\", mouseConstraint.mouse.mousewheel);\n        // run the renderer\n        Render.run(render);\n        // create runner\n        var runner = Runner.create();\n        // run the engine\n        Runner.run(runner, engine);\n        function handleResize() {\n            // set canvas size to new values\n            render.canvas.width = matterContainer.clientWidth;\n            render.canvas.height = matterContainer.clientHeight;\n            // reposition ground\n            matter_js__WEBPACK_IMPORTED_MODULE_2__.Body.setPosition(ground, matter_js__WEBPACK_IMPORTED_MODULE_2__.Vector.create(matterContainer.clientWidth / 2, matterContainer.clientHeight + THICCNESS / 2));\n            // reposition right wall\n            matter_js__WEBPACK_IMPORTED_MODULE_2__.Body.setPosition(rightWall, matter_js__WEBPACK_IMPORTED_MODULE_2__.Vector.create(matterContainer.clientWidth + THICCNESS / 2, matterContainer.clientHeight / 2));\n            matter_js__WEBPACK_IMPORTED_MODULE_2__.Body.setPosition(ball, matter_js__WEBPACK_IMPORTED_MODULE_2__.Vector.create(matterContainer.clientWidth / 8, matterContainer.clientHeight / 3));\n        }\n        smashRef.current.addEventListener(\"click\", ()=>{\n            Composite.remove(engine.world, holdingThread);\n        });\n        // const explosion = (engine, delta) => {\n        //   const timeScale = 1000 / 60 / delta;\n        //   const bodies = Composite.allBodies(engine.world);\n        //   for (let i = 0; i < bodies.length; i++) {\n        //     const body = bodies[i];\n        //     if (!body.isStatic && body.position.y >= 500) {\n        //       // scale force for mass and time applied\n        //       const forceMagnitude = 0.05 * body.mass * timeScale;\n        //       // apply the force over a single update\n        //       Body.applyForce(body, body.position, {\n        //         x:\n        //           (forceMagnitude + Common.random() * forceMagnitude) *\n        //           Common.choose([1, -1]),\n        //         y: -forceMagnitude + Common.random() * -forceMagnitude,\n        //       });\n        //     }\n        //   }\n        // };\n        // let timeScaleTarget = 1;\n        // let lastTime = Common.now();\n        // Events.on(engine, \"afterUpdate\", (event) => {\n        //   const timeScale = (event.delta || 1000 / 60) / 1000;\n        //   // tween the timescale for bullet time slow-mo\n        //   engine.timing.timeScale +=\n        //     (timeScaleTarget - engine.timing.timeScale) * 12 * timeScale;\n        //   // every 2 sec (real time)\n        //   if (Common.now() - lastTime >= 2000) {\n        //     // flip the timescale\n        //     if (timeScaleTarget < 1) {\n        //       timeScaleTarget = 1;\n        //     } else {\n        //       timeScaleTarget = 0;\n        //     }\n        //     // create some random forces\n        //     explosion(engine, event.delta);\n        //     // update last time\n        //     lastTime = Common.now();\n        //   }\n        // });\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n            Render.stop(render);\n            Runner.stop(runner);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: matterContainerRef,\n        style: {\n            width: \"100%\",\n            height: \"100%\",\n            cursor: \"pointer\",\n            position: \"relative\",\n            pointerEvents: \"none\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                position: \"absolute\",\n                pointerEvents: \"initial\",\n                height: \"100%\",\n                width: \"100%\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                ref: smashRef,\n                className: \"smash_button\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: \"Smash!\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Kartik jha\\\\Desktop\\\\Final-Port-Mk1\\\\components\\\\CanvasSecondary\\\\CanvasSecondary.jsx\",\n                    lineNumber: 266,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Kartik jha\\\\Desktop\\\\Final-Port-Mk1\\\\components\\\\CanvasSecondary\\\\CanvasSecondary.jsx\",\n                lineNumber: 265,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Kartik jha\\\\Desktop\\\\Final-Port-Mk1\\\\components\\\\CanvasSecondary\\\\CanvasSecondary.jsx\",\n            lineNumber: 256,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Kartik jha\\\\Desktop\\\\Final-Port-Mk1\\\\components\\\\CanvasSecondary\\\\CanvasSecondary.jsx\",\n        lineNumber: 246,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CanvasSecondary, \"T6REvUDzAT0qoj//evb5xb859h0=\");\n_c = CanvasSecondary;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CanvasSecondary);\nvar _c;\n$RefreshReg$(_c, \"CanvasSecondary\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhbnZhc1NlY29uZGFyeS9DYW52YXNTZWNvbmRhcnkuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyRDtBQVd4QztBQUVuQixNQUFNYyxrQkFBa0IsSUFBTTs7SUFDNUIsTUFBTUMscUJBQXFCYiw2Q0FBTUEsQ0FBQyxJQUFJO0lBQ3RDLE1BQU1jLFlBQVk7SUFDbEIsTUFBTUMsV0FBV2YsNkNBQU1BLENBQUMsSUFBSTtJQUU1QkQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1pQixrQkFBa0JILG1CQUFtQkksT0FBTztRQUVsRCxpQkFBaUI7UUFDakIsSUFBSUMsU0FBU2hCLHlEQUFhLEVBQ3hCaUIsU0FBU2pCLHlEQUFhLEVBQ3RCa0IsU0FBU2xCLHlEQUFhLEVBQ3RCbUIsU0FBU25CLHlEQUFhLEVBQ3RCb0IsWUFBWXBCLDREQUFnQjtRQUU5QixtQkFBbUI7UUFDbkIsSUFBSXFCLFNBQVNMLE9BQU9NLE1BQU07UUFFMUIsb0JBQW9CO1FBQ3BCLElBQUlDLFNBQVNOLE9BQU9LLE1BQU0sQ0FBQztZQUN6QkUsU0FBU1Y7WUFDVE8sUUFBUUE7WUFDUkksU0FBUztnQkFDUEMsT0FBT1osZ0JBQWdCYSxXQUFXO2dCQUNsQ0MsUUFBUWQsZ0JBQWdCZSxZQUFZO2dCQUNwQ0MsWUFBWTtnQkFDWkMsWUFBWSxLQUFLO2dCQUNqQkMsb0JBQW9CLEtBQUs7WUFDM0I7UUFDRjtRQUVBLElBQUlDLFFBQVE5Qix1REFBZ0IsQ0FDMUJXLGdCQUFnQmEsV0FBVyxHQUFHLEdBQzlCYixnQkFBZ0JlLFlBQVksR0FBRyxHQUMvQixHQUNBLElBQ0EsSUFDQSxHQUNBLFNBQVVLLENBQUMsRUFBRUMsQ0FBQyxFQUFFO1lBQ2QsT0FBT2hCLE9BQU9pQixTQUFTLENBQUNGLEdBQUdDLEdBQUcsSUFBSTtRQUNwQztRQUdGLElBQUlFLFNBQVNsQixPQUFPaUIsU0FBUyxDQUMzQnRCLGdCQUFnQmEsV0FBVyxHQUFHLEdBQzlCYixnQkFBZ0JlLFlBQVksR0FB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Q2YzQyxRQUFRO2dCQUNSRixPQUFPO1lBQ1Q7c0JBRUEsNEVBQUM4QztnQkFBT0wsS0FBS3REO2dCQUFVNEQsV0FBVTswQkFDL0IsNEVBQUNDOzhCQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEI7R0FqUU1oRTtLQUFBQTtBQW1RTiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NhbnZhc1NlY29uZGFyeS9DYW52YXNTZWNvbmRhcnkuanN4PzVkMWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTWF0dGVyLCB7XHJcbiAgQm9keSxcclxuICBDb21tb24sXHJcbiAgQ29tcG9zaXRlcyxcclxuICBDb25zdHJhaW50LFxyXG4gIEV2ZW50cyxcclxuICBNb3VzZSxcclxuICBNb3VzZUNvbnN0cmFpbnQsXHJcbiAgVmVjdG9yLFxyXG4gIFdvcmxkLFxyXG59IGZyb20gXCJtYXR0ZXItanNcIjtcclxuXHJcbmNvbnN0IENhbnZhc1NlY29uZGFyeSA9ICgpID0+IHtcclxuICBjb25zdCBtYXR0ZXJDb250YWluZXJSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgVEhJQ0NORVNTID0gNjA7XHJcbiAgY29uc3Qgc21hc2hSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBtYXR0ZXJDb250YWluZXIgPSBtYXR0ZXJDb250YWluZXJSZWYuY3VycmVudDtcclxuXHJcbiAgICAvLyBtb2R1bGUgYWxpYXNlc1xyXG4gICAgdmFyIEVuZ2luZSA9IE1hdHRlci5FbmdpbmUsXHJcbiAgICAgIFJlbmRlciA9IE1hdHRlci5SZW5kZXIsXHJcbiAgICAgIFJ1bm5lciA9IE1hdHRlci5SdW5uZXIsXHJcbiAgICAgIEJvZGllcyA9IE1hdHRlci5Cb2RpZXMsXHJcbiAgICAgIENvbXBvc2l0ZSA9IE1hdHRlci5Db21wb3NpdGU7XHJcblxyXG4gICAgLy8gY3JlYXRlIGFuIGVuZ2luZVxyXG4gICAgdmFyIGVuZ2luZSA9IEVuZ2luZS5jcmVhdGUoKTtcclxuXHJcbiAgICAvLyBjcmVhdGUgYSByZW5kZXJlclxyXG4gICAgdmFyIHJlbmRlciA9IFJlbmRlci5jcmVhdGUoe1xyXG4gICAgICBlbGVtZW50OiBtYXR0ZXJDb250YWluZXIsXHJcbiAgICAgIGVuZ2luZTogZW5naW5lLFxyXG4gICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgd2lkdGg6IG1hdHRlckNvbnRhaW5lci5jbGllbnRXaWR0aCxcclxuICAgICAgICBoZWlnaHQ6IG1hdHRlckNvbnRhaW5lci5jbGllbnRIZWlnaHQsXHJcbiAgICAgICAgYmFja2dyb3VuZDogXCIjMTMxMzE0XCIsXHJcbiAgICAgICAgd2lyZWZyYW1lczogZmFsc2UsXHJcbiAgICAgICAgc2hvd0FuZ2xlSW5kaWNhdG9yOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBzdGFjayA9IENvbXBvc2l0ZXMuc3RhY2soXHJcbiAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRXaWR0aCAvIDIsXHJcbiAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRIZWlnaHQgLyAyLFxyXG4gICAgICA1LFxyXG4gICAgICAxMCxcclxuICAgICAgMTAsXHJcbiAgICAgIDAsXHJcbiAgICAgIGZ1bmN0aW9uICh4LCB5KSB7XHJcbiAgICAgICAgcmV0dXJuIEJvZGllcy5yZWN0YW5nbGUoeCwgeSwgNDAsIDQwKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICB2YXIgZ3JvdW5kID0gQm9kaWVzLnJlY3RhbmdsZShcclxuICAgICAgbWF0dGVyQ29udGFpbmVyLmNsaWVudFdpZHRoIC8gMixcclxuICAgICAgbWF0dGVyQ29udGFpbmVyLmNsaWVudEhlaWdodCArIFRISUNDTkVTUyAvIDIsXHJcbiAgICAgIDI3MTg0LFxyXG4gICAgICBUSElDQ05FU1MsXHJcbiAgICAgIHsgaXNTdGF0aWM6IHRydWUgfVxyXG4gICAgKTtcclxuXHJcbiAgICBsZXQgbGVmdFdhbGwgPSBCb2RpZXMucmVjdGFuZ2xlKFxyXG4gICAgICAwIC0gVEhJQ0NORVNTIC8gMixcclxuICAgICAgbWF0dGVyQ29udGFpbmVyLmNsaWVudEhlaWdodCAvIDIsXHJcbiAgICAgIFRISUNDTkVTUyxcclxuICAgICAgbWF0dGVyQ29udGFpbmVyLmNsaWVudEhlaWdodCAqIDUsXHJcbiAgICAgIHtcclxuICAgICAgICBpc1N0YXRpYzogdHJ1ZSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBsZXQgcmlnaHRXYWxsID0gQm9kaWVzLnJlY3RhbmdsZShcclxuICAgICAgbWF0dGVyQ29udGFpbmVyLmNsaWVudFdpZHRoICsgVEhJQ0NORVNTIC8gMixcclxuICAgICAgbWF0dGVyQ29udGFpbmVyLmNsaWVudEhlaWdodCAvIDIsXHJcbiAgICAgIFRISUNDTkVTUyxcclxuICAgICAgbWF0dGVyQ29udGFpbmVyLmNsaWVudEhlaWdodCAqIDUsXHJcbiAgICAgIHsgaXNTdGF0aWM6IHRydWUgfVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBhZGQgYWxsIG9mIHRoZSBib2RpZXMgdG8gdGhlIHdvcmxkXHJcbiAgICBDb21wb3NpdGUuYWRkKGVuZ2luZS53b3JsZCwgW2dyb3VuZCwgbGVmdFdhbGwsIHJpZ2h0V2FsbCwgc3RhY2tdKTtcclxuXHJcbiAgICB2YXIgbW91c2UgPSBNb3VzZS5jcmVhdGUocmVuZGVyLmNhbnZhcyksXHJcbiAgICAgIG1vdXNlQ29uc3RyYWludCA9IE1vdXNlQ29uc3RyYWludC5jcmVhdGUoZW5naW5lLCB7XHJcbiAgICAgICAgbW91c2U6IG1vdXNlLFxyXG4gICAgICAgIGNvbnN0cmFpbnQ6IHtcclxuICAgICAgICAgIHN0aWZmbmVzczogMC4yLFxyXG4gICAgICAgICAgcmVuZGVyOiB7XHJcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICBDb21wb3NpdGUuYWRkKGVuZ2luZS53b3JsZCwgbW91c2VDb25zdHJhaW50KTtcclxuXHJcbiAgICB2YXIgYmFsbCA9IEJvZGllcy5jaXJjbGUoXHJcbiAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRXaWR0aCAvIDgsXHJcbiAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRIZWlnaHQgLyAzLFxyXG4gICAgICA1MCxcclxuICAgICAge1xyXG4gICAgICAgIGRlbnNpdHk6IDAuMDUsXHJcbiAgICAgICAgZnJpY3Rpb25BaXI6IDAuMDA1LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIENvbXBvc2l0ZS5hZGQoZW5naW5lLndvcmxkLCBiYWxsKTtcclxuXHJcbiAgICBDb21wb3NpdGUuYWRkKFxyXG4gICAgICBlbmdpbmUud29ybGQsXHJcbiAgICAgIENvbnN0cmFpbnQuY3JlYXRlKHtcclxuICAgICAgICBwb2ludEE6IHtcclxuICAgICAgICAgIHg6IG1hdHRlckNvbnRhaW5lci5jbGllbnRXaWR0aCAvIDIuNSxcclxuICAgICAgICAgIHk6IG1hdHRlckNvbnRhaW5lci5jbGllbnRIZWlnaHQgLyA0LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keUI6IGJhbGwsXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIHZhciBob2xkaW5nVGhyZWFkID0gQ29uc3RyYWludC5jcmVhdGUoe1xyXG4gICAgICBwb2ludEE6IHtcclxuICAgICAgICB4OiAzMDAsXHJcbiAgICAgICAgeTogMTAwLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5QjogYmFsbCxcclxuICAgIH0pO1xyXG5cclxuICAgIENvbXBvc2l0ZS5hZGQoZW5naW5lLndvcmxkLCBob2xkaW5nVGhyZWFkKTtcclxuXHJcbiAgICAvLyBhbGxvdyBzY3JvbGwgdGhyb3VnaCB0aGUgY2FudmFzXHJcbiAgICBtb3VzZUNvbnN0cmFpbnQubW91c2UuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxyXG4gICAgICBcIm1vdXNld2hlZWxcIixcclxuICAgICAgbW91c2VDb25zdHJhaW50Lm1vdXNlLm1vdXNld2hlZWxcclxuICAgICk7XHJcbiAgICBtb3VzZUNvbnN0cmFpbnQubW91c2UuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxyXG4gICAgICBcIkRPTU1vdXNlU2Nyb2xsXCIsXHJcbiAgICAgIG1vdXNlQ29uc3RyYWludC5tb3VzZS5tb3VzZXdoZWVsXHJcbiAgICApO1xyXG5cclxuICAgIC8vIHJ1biB0aGUgcmVuZGVyZXJcclxuICAgIFJlbmRlci5ydW4ocmVuZGVyKTtcclxuXHJcbiAgICAvLyBjcmVhdGUgcnVubmVyXHJcbiAgICB2YXIgcnVubmVyID0gUnVubmVyLmNyZWF0ZSgpO1xyXG5cclxuICAgIC8vIHJ1biB0aGUgZW5naW5lXHJcbiAgICBSdW5uZXIucnVuKHJ1bm5lciwgZW5naW5lKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XHJcbiAgICAgIC8vIHNldCBjYW52YXMgc2l6ZSB0byBuZXcgdmFsdWVzXHJcbiAgICAgIHJlbmRlci5jYW52YXMud2lkdGggPSBtYXR0ZXJDb250YWluZXIuY2xpZW50V2lkdGg7XHJcbiAgICAgIHJlbmRlci5jYW52YXMuaGVpZ2h0ID0gbWF0dGVyQ29udGFpbmVyLmNsaWVudEhlaWdodDtcclxuXHJcbiAgICAgIC8vIHJlcG9zaXRpb24gZ3JvdW5kXHJcbiAgICAgIEJvZHkuc2V0UG9zaXRpb24oXHJcbiAgICAgICAgZ3JvdW5kLFxyXG4gICAgICAgIFZlY3Rvci5jcmVhdGUoXHJcbiAgICAgICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50V2lkdGggLyAyLFxyXG4gICAgICAgICAgbWF0dGVyQ29udGFpbmVyLmNsaWVudEhlaWdodCArIFRISUNDTkVTUyAvIDJcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvLyByZXBvc2l0aW9uIHJpZ2h0IHdhbGxcclxuICAgICAgQm9keS5zZXRQb3NpdGlvbihcclxuICAgICAgICByaWdodFdhbGwsXHJcbiAgICAgICAgVmVjdG9yLmNyZWF0ZShcclxuICAgICAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRXaWR0aCArIFRISUNDTkVTUyAvIDIsXHJcbiAgICAgICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0IC8gMlxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuXHJcbiAgICAgIEJvZHkuc2V0UG9zaXRpb24oXHJcbiAgICAgICAgYmFsbCxcclxuICAgICAgICBWZWN0b3IuY3JlYXRlKFxyXG4gICAgICAgICAgbWF0dGVyQ29udGFpbmVyLmNsaWVudFdpZHRoIC8gOCxcclxuICAgICAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRIZWlnaHQgLyAzXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHNtYXNoUmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgQ29tcG9zaXRlLnJlbW92ZShlbmdpbmUud29ybGQsIGhvbGRpbmdUaHJlYWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY29uc3QgZXhwbG9zaW9uID0gKGVuZ2luZSwgZGVsdGEpID0+IHtcclxuICAgIC8vICAgY29uc3QgdGltZVNjYWxlID0gMTAwMCAvIDYwIC8gZGVsdGE7XHJcbiAgICAvLyAgIGNvbnN0IGJvZGllcyA9IENvbXBvc2l0ZS5hbGxCb2RpZXMoZW5naW5lLndvcmxkKTtcclxuXHJcbiAgICAvLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgY29uc3QgYm9keSA9IGJvZGllc1tpXTtcclxuXHJcbiAgICAvLyAgICAgaWYgKCFib2R5LmlzU3RhdGljICYmIGJvZHkucG9zaXRpb24ueSA+PSA1MDApIHtcclxuICAgIC8vICAgICAgIC8vIHNjYWxlIGZvcmNlIGZvciBtYXNzIGFuZCB0aW1lIGFwcGxpZWRcclxuICAgIC8vICAgICAgIGNvbnN0IGZvcmNlTWFnbml0dWRlID0gMC4wNSAqIGJvZHkubWFzcyAqIHRpbWVTY2FsZTtcclxuXHJcbiAgICAvLyAgICAgICAvLyBhcHBseSB0aGUgZm9yY2Ugb3ZlciBhIHNpbmdsZSB1cGRhdGVcclxuICAgIC8vICAgICAgIEJvZHkuYXBwbHlGb3JjZShib2R5LCBib2R5LnBvc2l0aW9uLCB7XHJcbiAgICAvLyAgICAgICAgIHg6XHJcbiAgICAvLyAgICAgICAgICAgKGZvcmNlTWFnbml0dWRlICsgQ29tbW9uLnJhbmRvbSgpICogZm9yY2VNYWduaXR1ZGUpICpcclxuICAgIC8vICAgICAgICAgICBDb21tb24uY2hvb3NlKFsxLCAtMV0pLFxyXG4gICAgLy8gICAgICAgICB5OiAtZm9yY2VNYWduaXR1ZGUgKyBDb21tb24ucmFuZG9tKCkgKiAtZm9yY2VNYWduaXR1ZGUsXHJcbiAgICAvLyAgICAgICB9KTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH07XHJcblxyXG4gICAgLy8gbGV0IHRpbWVTY2FsZVRhcmdldCA9IDE7XHJcbiAgICAvLyBsZXQgbGFzdFRpbWUgPSBDb21tb24ubm93KCk7XHJcblxyXG4gICAgLy8gRXZlbnRzLm9uKGVuZ2luZSwgXCJhZnRlclVwZGF0ZVwiLCAoZXZlbnQpID0+IHtcclxuICAgIC8vICAgY29uc3QgdGltZVNjYWxlID0gKGV2ZW50LmRlbHRhIHx8IDEwMDAgLyA2MCkgLyAxMDAwO1xyXG5cclxuICAgIC8vICAgLy8gdHdlZW4gdGhlIHRpbWVzY2FsZSBmb3IgYnVsbGV0IHRpbWUgc2xvdy1tb1xyXG4gICAgLy8gICBlbmdpbmUudGltaW5nLnRpbWVTY2FsZSArPVxyXG4gICAgLy8gICAgICh0aW1lU2NhbGVUYXJnZXQgLSBlbmdpbmUudGltaW5nLnRpbWVTY2FsZSkgKiAxMiAqIHRpbWVTY2FsZTtcclxuXHJcbiAgICAvLyAgIC8vIGV2ZXJ5IDIgc2VjIChyZWFsIHRpbWUpXHJcbiAgICAvLyAgIGlmIChDb21tb24ubm93KCkgLSBsYXN0VGltZSA+PSAyMDAwKSB7XHJcbiAgICAvLyAgICAgLy8gZmxpcCB0aGUgdGltZXNjYWxlXHJcbiAgICAvLyAgICAgaWYgKHRpbWVTY2FsZVRhcmdldCA8IDEpIHtcclxuICAgIC8vICAgICAgIHRpbWVTY2FsZVRhcmdldCA9IDE7XHJcbiAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgIHRpbWVTY2FsZVRhcmdldCA9IDA7XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICAvLyBjcmVhdGUgc29tZSByYW5kb20gZm9yY2VzXHJcbiAgICAvLyAgICAgZXhwbG9zaW9uKGVuZ2luZSwgZXZlbnQuZGVsdGEpO1xyXG5cclxuICAgIC8vICAgICAvLyB1cGRhdGUgbGFzdCB0aW1lXHJcbiAgICAvLyAgICAgbGFzdFRpbWUgPSBDb21tb24ubm93KCk7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0pO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuICAgICAgUmVuZGVyLnN0b3AocmVuZGVyKTtcclxuICAgICAgUnVubmVyLnN0b3AocnVubmVyKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICByZWY9e21hdHRlckNvbnRhaW5lclJlZn1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgcG9pbnRlckV2ZW50czogXCJub25lXCIsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuXHJcbiAgICAgICAgICBwb2ludGVyRXZlbnRzOiBcImluaXRpYWxcIixcclxuICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxidXR0b24gcmVmPXtzbWFzaFJlZn0gY2xhc3NOYW1lPVwic21hc2hfYnV0dG9uXCI+XHJcbiAgICAgICAgICA8c3Bhbj5TbWFzaCE8L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbnZhc1NlY29uZGFyeTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJNYXR0ZXIiLCJCb2R5IiwiQ29tbW9uIiwiQ29tcG9zaXRlcyIsIkNvbnN0cmFpbnQiLCJFdmVudHMiLCJNb3VzZSIsIk1vdXNlQ29uc3RyYWludCIsIlZlY3RvciIsIldvcmxkIiwiQ2FudmFzU2Vjb25kYXJ5IiwibWF0dGVyQ29udGFpbmVyUmVmIiwiVEhJQ0NORVNTIiwic21hc2hSZWYiLCJtYXR0ZXJDb250YWluZXIiLCJjdXJyZW50IiwiRW5naW5lIiwiUmVuZGVyIiwiUnVubmVyIiwiQm9kaWVzIiwiQ29tcG9zaXRlIiwiZW5naW5lIiwiY3JlYXRlIiwicmVuZGVyIiwiZWxlbWVudCIsIm9wdGlvbnMiLCJ3aWR0aCIsImNsaWVudFdpZHRoIiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiYmFja2dyb3VuZCIsIndpcmVmcmFtZXMiLCJzaG93QW5nbGVJbmRpY2F0b3IiLCJzdGFjayIsIngiLCJ5IiwicmVjdGFuZ2xlIiwiZ3JvdW5kIiwiaXNTdGF0aWMiLCJsZWZ0V2FsbCIsInJpZ2h0V2FsbCIsImFkZCIsIndvcmxkIiwibW91c2UiLCJjYW52YXMiLCJtb3VzZUNvbnN0cmFpbnQiLCJjb25zdHJhaW50Iiwic3RpZmZuZXNzIiwidmlzaWJsZSIsImJhbGwiLCJjaXJjbGUiLCJkZW5zaXR5IiwiZnJpY3Rpb25BaXIiLCJwb2ludEEiLCJib2R5QiIsImhvbGRpbmdUaHJlYWQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibW91c2V3aGVlbCIsInJ1biIsInJ1bm5lciIsImhhbmRsZVJlc2l6ZSIsInNldFBvc2l0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZSIsIndpbmRvdyIsInN0b3AiLCJkaXYiLCJyZWYiLCJzdHlsZSIsImN1cnNvciIsInBvc2l0aW9uIiwicG9pbnRlckV2ZW50cyIsImJ1dHRvbiIsImNsYXNzTmFtZSIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CanvasSecondary/CanvasSecondary.jsx\n"));

/***/ })

});