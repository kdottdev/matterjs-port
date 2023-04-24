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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! matter-js */ \"./node_modules/matter-js/build/matter.js\");\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst CanvasSecondary = ()=>{\n    _s();\n    const matterContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const THICCNESS = 60;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const matterContainer = matterContainerRef.current;\n        // module aliases\n        var Engine = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Engine), Render = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Render), Runner = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Runner), Bodies = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Bodies), Composite = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Composite);\n        // create an engine\n        var engine = Engine.create();\n        // create a renderer\n        var render = Render.create({\n            element: matterContainer,\n            engine: engine,\n            options: {\n                width: matterContainer.clientWidth,\n                height: matterContainer.clientHeight,\n                background: \"#131314\",\n                wireframes: false,\n                showAngleIndicator: false\n            }\n        });\n        var stack = matter_js__WEBPACK_IMPORTED_MODULE_2__.Composites.stack(matterContainer.clientWidth / 2, matterContainer.clientHeight / 2, 10, 10, 0, 0, function(x, y) {\n            return Bodies.rectangle(x, y, 40, 40);\n        });\n        var ground = Bodies.rectangle(matterContainer.clientWidth / 2, matterContainer.clientHeight + THICCNESS / 2, 27184, THICCNESS, {\n            isStatic: true\n        });\n        let leftWall = Bodies.rectangle(0 - THICCNESS / 2, matterContainer.clientHeight / 2, THICCNESS, matterContainer.clientHeight * 5, {\n            isStatic: true\n        });\n        let rightWall = Bodies.rectangle(matterContainer.clientWidth + THICCNESS / 2, matterContainer.clientHeight / 2, THICCNESS, matterContainer.clientHeight * 5, {\n            isStatic: true\n        });\n        // add all of the bodies to the world\n        Composite.add(engine.world, [\n            ground,\n            leftWall,\n            rightWall,\n            stack\n        ]);\n        var mouse = matter_js__WEBPACK_IMPORTED_MODULE_2__.Mouse.create(render.canvas), mouseConstraint = matter_js__WEBPACK_IMPORTED_MODULE_2__.MouseConstraint.create(engine, {\n            mouse: mouse,\n            constraint: {\n                stiffness: 0.2,\n                render: {\n                    visible: false\n                }\n            }\n        });\n        Composite.add(engine.world, mouseConstraint);\n        var ball = Bodies.circle(100, matterContainer.clientHeight / 3, 50, {\n            density: 0.04,\n            frictionAir: 0.005\n        });\n        Composite.add(engine.world, ball);\n        Composite.add(engine.world, matter_js__WEBPACK_IMPORTED_MODULE_2__.Constraint.create({\n            pointA: {\n                x: matterContainer.clientWidth / 2.5,\n                y: matterContainer.clientHeight / 4\n            },\n            bodyB: ball\n        }));\n        // allow scroll through the canvas\n        mouseConstraint.mouse.element.removeEventListener(\"mousewheel\", mouseConstraint.mouse.mousewheel);\n        mouseConstraint.mouse.element.removeEventListener(\"DOMMouseScroll\", mouseConstraint.mouse.mousewheel);\n        // run the renderer\n        Render.run(render);\n        // create runner\n        var runner = Runner.create();\n        // run the engine\n        Runner.run(runner, engine);\n        function handleResize() {\n            // set canvas size to new values\n            render.canvas.width = matterContainer.clientWidth;\n            render.canvas.height = matterContainer.clientHeight;\n            // reposition ground\n            matter_js__WEBPACK_IMPORTED_MODULE_2__.Body.setPosition(ground, matter_js__WEBPACK_IMPORTED_MODULE_2__.Vector.create(matterContainer.clientWidth / 2, matterContainer.clientHeight + THICCNESS / 2));\n            // reposition right wall\n            matter_js__WEBPACK_IMPORTED_MODULE_2__.Body.setPosition(rightWall, matter_js__WEBPACK_IMPORTED_MODULE_2__.Vector.create(matterContainer.clientWidth + THICCNESS / 2, matterContainer.clientHeight / 2));\n        }\n        // const explosion = (engine, delta) => {\n        //   const timeScale = 1000 / 60 / delta;\n        //   const bodies = Composite.allBodies(engine.world);\n        //   for (let i = 0; i < bodies.length; i++) {\n        //     const body = bodies[i];\n        //     if (!body.isStatic && body.position.y >= 500) {\n        //       // scale force for mass and time applied\n        //       const forceMagnitude = 0.05 * body.mass * timeScale;\n        //       // apply the force over a single update\n        //       Body.applyForce(body, body.position, {\n        //         x:\n        //           (forceMagnitude + Common.random() * forceMagnitude) *\n        //           Common.choose([1, -1]),\n        //         y: -forceMagnitude + Common.random() * -forceMagnitude,\n        //       });\n        //     }\n        //   }\n        // };\n        // let timeScaleTarget = 1;\n        // let lastTime = Common.now();\n        // Events.on(engine, \"afterUpdate\", (event) => {\n        //   const timeScale = (event.delta || 1000 / 60) / 1000;\n        //   // tween the timescale for bullet time slow-mo\n        //   engine.timing.timeScale +=\n        //     (timeScaleTarget - engine.timing.timeScale) * 12 * timeScale;\n        //   // every 2 sec (real time)\n        //   if (Common.now() - lastTime >= 2000) {\n        //     // flip the timescale\n        //     if (timeScaleTarget < 1) {\n        //       timeScaleTarget = 1;\n        //     } else {\n        //       timeScaleTarget = 0;\n        //     }\n        //     // create some random forces\n        //     explosion(engine, event.delta);\n        //     // update last time\n        //     lastTime = Common.now();\n        //   }\n        // });\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n            Render.stop(render);\n            Runner.stop(runner);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: matterContainerRef,\n        style: {\n            width: \"100%\",\n            height: \"100%\"\n        }\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Kartik jha\\\\Desktop\\\\Final-Port-Mk1\\\\components\\\\CanvasSecondary\\\\CanvasSecondary.jsx\",\n        lineNumber: 217,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CanvasSecondary, \"EC5p7TwiwOKcS+IJQCwbrNix8j8=\");\n_c = CanvasSecondary;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CanvasSecondary);\nvar _c;\n$RefreshReg$(_c, \"CanvasSecondary\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhbnZhc1NlY29uZGFyeS9DYW52YXNTZWNvbmRhcnkuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFpRDtBQVU5QjtBQUVuQixNQUFNWSxrQkFBa0IsSUFBTTs7SUFDNUIsTUFBTUMscUJBQXFCWCw2Q0FBTUEsQ0FBQyxJQUFJO0lBQ3RDLE1BQU1ZLFlBQVk7SUFFbEJiLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNYyxrQkFBa0JGLG1CQUFtQkcsT0FBTztRQUVsRCxpQkFBaUI7UUFDakIsSUFBSUMsU0FBU2QseURBQWEsRUFDeEJlLFNBQVNmLHlEQUFhLEVBQ3RCZ0IsU0FBU2hCLHlEQUFhLEVBQ3RCaUIsU0FBU2pCLHlEQUFhLEVBQ3RCa0IsWUFBWWxCLDREQUFnQjtRQUU5QixtQkFBbUI7UUFDbkIsSUFBSW1CLFNBQVNMLE9BQU9NLE1BQU07UUFFMUIsb0JBQW9CO1FBQ3BCLElBQUlDLFNBQVNOLE9BQU9LLE1BQU0sQ0FBQztZQUN6QkUsU0FBU1Y7WUFDVE8sUUFBUUE7WUFDUkksU0FBUztnQkFDUEMsT0FBT1osZ0JBQWdCYSxXQUFXO2dCQUNsQ0MsUUFBUWQsZ0JBQWdCZSxZQUFZO2dCQUNwQ0MsWUFBWTtnQkFDWkMsWUFBWSxLQUFLO2dCQUNqQkMsb0JBQW9CLEtBQUs7WUFDM0I7UUFDRjtRQUVBLElBQUlDLFFBQVE1Qix1REFBZ0IsQ0FDMUJTLGdCQUFnQmEsV0FBVyxHQUFHLEdBQzlCYixnQkFBZ0JlLFlBQVksR0FBRyxHQUMvQixJQUNBLElBQ0EsR0FDQSxHQUNBLFNBQVVLLENBQUMsRUFBRUMsQ0FBQyxFQUFFO1lBQ2QsT0FBT2hCLE9BQU9pQixTQUFTLENBQUNGLEdBQUdDLEdBQUcsSUFBSTtRQUNwQztRQUdGLElBQUlFLFNBQVNsQixPQUFPaUIsU0FBUyxDQUMzQnRCLGdCQUFnQmEsV0FBVyxHQUFHLEdBQzlCYixnQkFBZ0JlLFlBQVksR0FBR2hCLFlBQVksR0FDM0MsT0FDQUEsV0FDQTtZQUFFeUIsVUFBVSxJ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QUF5RDtRQUV6RCxtREFBbUQ7UUFDbkQsK0JBQStCO1FBQy9CLG9FQUFvRTtRQUVwRSwrQkFBK0I7UUFDL0IsMkNBQTJDO1FBQzNDLDRCQUE0QjtRQUM1QixpQ0FBaUM7UUFDakMsNkJBQTZCO1FBQzdCLGVBQWU7UUFDZiw2QkFBNkI7UUFDN0IsUUFBUTtRQUVSLG1DQUFtQztRQUNuQyxzQ0FBc0M7UUFFdEMsMEJBQTBCO1FBQzFCLCtCQUErQjtRQUMvQixNQUFNO1FBQ04sTUFBTTtRQUVOZ0MsT0FBT0MsZ0JBQWdCLENBQUMsVUFBVUg7UUFFbEMsT0FBTyxJQUFNO1lBQ1hFLE9BQU9OLG1CQUFtQixDQUFDLFVBQVVJO1lBQ3JDMUMsT0FBTzhDLElBQUksQ0FBQ3hDO1lBQ1pMLE9BQU82QyxJQUFJLENBQUNMO1FBQ2Q7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ007UUFBSUMsS0FBS3JEO1FBQW9Cc0QsT0FBTztZQUFFeEMsT0FBTztZQUFRRSxRQUFRO1FBQU87Ozs7OztBQUV6RTtHQTlNTWpCO0tBQUFBO0FBZ05OLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2FudmFzU2Vjb25kYXJ5L0NhbnZhc1NlY29uZGFyeS5qc3g/NWQxZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1hdHRlciwge1xyXG4gIEJvZHksXHJcbiAgQ29tbW9uLFxyXG4gIENvbXBvc2l0ZXMsXHJcbiAgQ29uc3RyYWludCxcclxuICBFdmVudHMsXHJcbiAgTW91c2UsXHJcbiAgTW91c2VDb25zdHJhaW50LFxyXG4gIFZlY3RvcixcclxufSBmcm9tIFwibWF0dGVyLWpzXCI7XHJcblxyXG5jb25zdCBDYW52YXNTZWNvbmRhcnkgPSAoKSA9PiB7XHJcbiAgY29uc3QgbWF0dGVyQ29udGFpbmVyUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IFRISUNDTkVTUyA9IDYwO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgbWF0dGVyQ29udGFpbmVyID0gbWF0dGVyQ29udGFpbmVyUmVmLmN1cnJlbnQ7XHJcblxyXG4gICAgLy8gbW9kdWxlIGFsaWFzZXNcclxuICAgIHZhciBFbmdpbmUgPSBNYXR0ZXIuRW5naW5lLFxyXG4gICAgICBSZW5kZXIgPSBNYXR0ZXIuUmVuZGVyLFxyXG4gICAgICBSdW5uZXIgPSBNYXR0ZXIuUnVubmVyLFxyXG4gICAgICBCb2RpZXMgPSBNYXR0ZXIuQm9kaWVzLFxyXG4gICAgICBDb21wb3NpdGUgPSBNYXR0ZXIuQ29tcG9zaXRlO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBhbiBlbmdpbmVcclxuICAgIHZhciBlbmdpbmUgPSBFbmdpbmUuY3JlYXRlKCk7XHJcblxyXG4gICAgLy8gY3JlYXRlIGEgcmVuZGVyZXJcclxuICAgIHZhciByZW5kZXIgPSBSZW5kZXIuY3JlYXRlKHtcclxuICAgICAgZWxlbWVudDogbWF0dGVyQ29udGFpbmVyLFxyXG4gICAgICBlbmdpbmU6IGVuZ2luZSxcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIHdpZHRoOiBtYXR0ZXJDb250YWluZXIuY2xpZW50V2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0LFxyXG4gICAgICAgIGJhY2tncm91bmQ6IFwiIzEzMTMxNFwiLFxyXG4gICAgICAgIHdpcmVmcmFtZXM6IGZhbHNlLFxyXG4gICAgICAgIHNob3dBbmdsZUluZGljYXRvcjogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgc3RhY2sgPSBDb21wb3NpdGVzLnN0YWNrKFxyXG4gICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50V2lkdGggLyAyLFxyXG4gICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0IC8gMixcclxuICAgICAgMTAsXHJcbiAgICAgIDEwLFxyXG4gICAgICAwLFxyXG4gICAgICAwLFxyXG4gICAgICBmdW5jdGlvbiAoeCwgeSkge1xyXG4gICAgICAgIHJldHVybiBCb2RpZXMucmVjdGFuZ2xlKHgsIHksIDQwLCA0MCk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgdmFyIGdyb3VuZCA9IEJvZGllcy5yZWN0YW5nbGUoXHJcbiAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRXaWR0aCAvIDIsXHJcbiAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRIZWlnaHQgKyBUSElDQ05FU1MgLyAyLFxyXG4gICAgICAyNzE4NCxcclxuICAgICAgVEhJQ0NORVNTLFxyXG4gICAgICB7IGlzU3RhdGljOiB0cnVlIH1cclxuICAgICk7XHJcblxyXG4gICAgbGV0IGxlZnRXYWxsID0gQm9kaWVzLnJlY3RhbmdsZShcclxuICAgICAgMCAtIFRISUNDTkVTUyAvIDIsXHJcbiAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRIZWlnaHQgLyAyLFxyXG4gICAgICBUSElDQ05FU1MsXHJcbiAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRIZWlnaHQgKiA1LFxyXG4gICAgICB7XHJcbiAgICAgICAgaXNTdGF0aWM6IHRydWUsXHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgbGV0IHJpZ2h0V2FsbCA9IEJvZGllcy5yZWN0YW5nbGUoXHJcbiAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRXaWR0aCArIFRISUNDTkVTUyAvIDIsXHJcbiAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRIZWlnaHQgLyAyLFxyXG4gICAgICBUSElDQ05FU1MsXHJcbiAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRIZWlnaHQgKiA1LFxyXG4gICAgICB7IGlzU3RhdGljOiB0cnVlIH1cclxuICAgICk7XHJcblxyXG4gICAgLy8gYWRkIGFsbCBvZiB0aGUgYm9kaWVzIHRvIHRoZSB3b3JsZFxyXG4gICAgQ29tcG9zaXRlLmFkZChlbmdpbmUud29ybGQsIFtncm91bmQsIGxlZnRXYWxsLCByaWdodFdhbGwsIHN0YWNrXSk7XHJcblxyXG4gICAgdmFyIG1vdXNlID0gTW91c2UuY3JlYXRlKHJlbmRlci5jYW52YXMpLFxyXG4gICAgICBtb3VzZUNvbnN0cmFpbnQgPSBNb3VzZUNvbnN0cmFpbnQuY3JlYXRlKGVuZ2luZSwge1xyXG4gICAgICAgIG1vdXNlOiBtb3VzZSxcclxuICAgICAgICBjb25zdHJhaW50OiB7XHJcbiAgICAgICAgICBzdGlmZm5lc3M6IDAuMixcclxuICAgICAgICAgIHJlbmRlcjoge1xyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgQ29tcG9zaXRlLmFkZChlbmdpbmUud29ybGQsIG1vdXNlQ29uc3RyYWludCk7XHJcblxyXG4gICAgdmFyIGJhbGwgPSBCb2RpZXMuY2lyY2xlKDEwMCwgbWF0dGVyQ29udGFpbmVyLmNsaWVudEhlaWdodCAvIDMsIDUwLCB7XHJcbiAgICAgIGRlbnNpdHk6IDAuMDQsXHJcbiAgICAgIGZyaWN0aW9uQWlyOiAwLjAwNSxcclxuICAgIH0pO1xyXG5cclxuICAgIENvbXBvc2l0ZS5hZGQoZW5naW5lLndvcmxkLCBiYWxsKTtcclxuXHJcbiAgICBDb21wb3NpdGUuYWRkKFxyXG4gICAgICBlbmdpbmUud29ybGQsXHJcbiAgICAgIENvbnN0cmFpbnQuY3JlYXRlKHtcclxuICAgICAgICBwb2ludEE6IHtcclxuICAgICAgICAgIHg6IG1hdHRlckNvbnRhaW5lci5jbGllbnRXaWR0aCAvIDIuNSxcclxuICAgICAgICAgIHk6IG1hdHRlckNvbnRhaW5lci5jbGllbnRIZWlnaHQgLyA0LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keUI6IGJhbGwsXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIC8vIGFsbG93IHNjcm9sbCB0aHJvdWdoIHRoZSBjYW52YXNcclxuICAgIG1vdXNlQ29uc3RyYWludC5tb3VzZS5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIFwibW91c2V3aGVlbFwiLFxyXG4gICAgICBtb3VzZUNvbnN0cmFpbnQubW91c2UubW91c2V3aGVlbFxyXG4gICAgKTtcclxuICAgIG1vdXNlQ29uc3RyYWludC5tb3VzZS5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIFwiRE9NTW91c2VTY3JvbGxcIixcclxuICAgICAgbW91c2VDb25zdHJhaW50Lm1vdXNlLm1vdXNld2hlZWxcclxuICAgICk7XHJcblxyXG4gICAgLy8gcnVuIHRoZSByZW5kZXJlclxyXG4gICAgUmVuZGVyLnJ1bihyZW5kZXIpO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBydW5uZXJcclxuICAgIHZhciBydW5uZXIgPSBSdW5uZXIuY3JlYXRlKCk7XHJcblxyXG4gICAgLy8gcnVuIHRoZSBlbmdpbmVcclxuICAgIFJ1bm5lci5ydW4ocnVubmVyLCBlbmdpbmUpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcclxuICAgICAgLy8gc2V0IGNhbnZhcyBzaXplIHRvIG5ldyB2YWx1ZXNcclxuICAgICAgcmVuZGVyLmNhbnZhcy53aWR0aCA9IG1hdHRlckNvbnRhaW5lci5jbGllbnRXaWR0aDtcclxuICAgICAgcmVuZGVyLmNhbnZhcy5oZWlnaHQgPSBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgICAgLy8gcmVwb3NpdGlvbiBncm91bmRcclxuICAgICAgQm9keS5zZXRQb3NpdGlvbihcclxuICAgICAgICBncm91bmQsXHJcbiAgICAgICAgVmVjdG9yLmNyZWF0ZShcclxuICAgICAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRXaWR0aCAvIDIsXHJcbiAgICAgICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0ICsgVEhJQ0NORVNTIC8gMlxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vIHJlcG9zaXRpb24gcmlnaHQgd2FsbFxyXG4gICAgICBCb2R5LnNldFBvc2l0aW9uKFxyXG4gICAgICAgIHJpZ2h0V2FsbCxcclxuICAgICAgICBWZWN0b3IuY3JlYXRlKFxyXG4gICAgICAgICAgbWF0dGVyQ29udGFpbmVyLmNsaWVudFdpZHRoICsgVEhJQ0NORVNTIC8gMixcclxuICAgICAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRIZWlnaHQgLyAyXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnN0IGV4cGxvc2lvbiA9IChlbmdpbmUsIGRlbHRhKSA9PiB7XHJcbiAgICAvLyAgIGNvbnN0IHRpbWVTY2FsZSA9IDEwMDAgLyA2MCAvIGRlbHRhO1xyXG4gICAgLy8gICBjb25zdCBib2RpZXMgPSBDb21wb3NpdGUuYWxsQm9kaWVzKGVuZ2luZS53b3JsZCk7XHJcblxyXG4gICAgLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgIGNvbnN0IGJvZHkgPSBib2RpZXNbaV07XHJcblxyXG4gICAgLy8gICAgIGlmICghYm9keS5pc1N0YXRpYyAmJiBib2R5LnBvc2l0aW9uLnkgPj0gNTAwKSB7XHJcbiAgICAvLyAgICAgICAvLyBzY2FsZSBmb3JjZSBmb3IgbWFzcyBhbmQgdGltZSBhcHBsaWVkXHJcbiAgICAvLyAgICAgICBjb25zdCBmb3JjZU1hZ25pdHVkZSA9IDAuMDUgKiBib2R5Lm1hc3MgKiB0aW1lU2NhbGU7XHJcblxyXG4gICAgLy8gICAgICAgLy8gYXBwbHkgdGhlIGZvcmNlIG92ZXIgYSBzaW5nbGUgdXBkYXRlXHJcbiAgICAvLyAgICAgICBCb2R5LmFwcGx5Rm9yY2UoYm9keSwgYm9keS5wb3NpdGlvbiwge1xyXG4gICAgLy8gICAgICAgICB4OlxyXG4gICAgLy8gICAgICAgICAgIChmb3JjZU1hZ25pdHVkZSArIENvbW1vbi5yYW5kb20oKSAqIGZvcmNlTWFnbml0dWRlKSAqXHJcbiAgICAvLyAgICAgICAgICAgQ29tbW9uLmNob29zZShbMSwgLTFdKSxcclxuICAgIC8vICAgICAgICAgeTogLWZvcmNlTWFnbml0dWRlICsgQ29tbW9uLnJhbmRvbSgpICogLWZvcmNlTWFnbml0dWRlLFxyXG4gICAgLy8gICAgICAgfSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9O1xyXG5cclxuICAgIC8vIGxldCB0aW1lU2NhbGVUYXJnZXQgPSAxO1xyXG4gICAgLy8gbGV0IGxhc3RUaW1lID0gQ29tbW9uLm5vdygpO1xyXG5cclxuICAgIC8vIEV2ZW50cy5vbihlbmdpbmUsIFwiYWZ0ZXJVcGRhdGVcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAvLyAgIGNvbnN0IHRpbWVTY2FsZSA9IChldmVudC5kZWx0YSB8fCAxMDAwIC8gNjApIC8gMTAwMDtcclxuXHJcbiAgICAvLyAgIC8vIHR3ZWVuIHRoZSB0aW1lc2NhbGUgZm9yIGJ1bGxldCB0aW1lIHNsb3ctbW9cclxuICAgIC8vICAgZW5naW5lLnRpbWluZy50aW1lU2NhbGUgKz1cclxuICAgIC8vICAgICAodGltZVNjYWxlVGFyZ2V0IC0gZW5naW5lLnRpbWluZy50aW1lU2NhbGUpICogMTIgKiB0aW1lU2NhbGU7XHJcblxyXG4gICAgLy8gICAvLyBldmVyeSAyIHNlYyAocmVhbCB0aW1lKVxyXG4gICAgLy8gICBpZiAoQ29tbW9uLm5vdygpIC0gbGFzdFRpbWUgPj0gMjAwMCkge1xyXG4gICAgLy8gICAgIC8vIGZsaXAgdGhlIHRpbWVzY2FsZVxyXG4gICAgLy8gICAgIGlmICh0aW1lU2NhbGVUYXJnZXQgPCAxKSB7XHJcbiAgICAvLyAgICAgICB0aW1lU2NhbGVUYXJnZXQgPSAxO1xyXG4gICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICB0aW1lU2NhbGVUYXJnZXQgPSAwO1xyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgLy8gY3JlYXRlIHNvbWUgcmFuZG9tIGZvcmNlc1xyXG4gICAgLy8gICAgIGV4cGxvc2lvbihlbmdpbmUsIGV2ZW50LmRlbHRhKTtcclxuXHJcbiAgICAvLyAgICAgLy8gdXBkYXRlIGxhc3QgdGltZVxyXG4gICAgLy8gICAgIGxhc3RUaW1lID0gQ29tbW9uLm5vdygpO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgICAgIFJlbmRlci5zdG9wKHJlbmRlcik7XHJcbiAgICAgIFJ1bm5lci5zdG9wKHJ1bm5lcik7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgcmVmPXttYXR0ZXJDb250YWluZXJSZWZ9IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fSAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYW52YXNTZWNvbmRhcnk7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsIk1hdHRlciIsIkJvZHkiLCJDb21tb24iLCJDb21wb3NpdGVzIiwiQ29uc3RyYWludCIsIkV2ZW50cyIsIk1vdXNlIiwiTW91c2VDb25zdHJhaW50IiwiVmVjdG9yIiwiQ2FudmFzU2Vjb25kYXJ5IiwibWF0dGVyQ29udGFpbmVyUmVmIiwiVEhJQ0NORVNTIiwibWF0dGVyQ29udGFpbmVyIiwiY3VycmVudCIsIkVuZ2luZSIsIlJlbmRlciIsIlJ1bm5lciIsIkJvZGllcyIsIkNvbXBvc2l0ZSIsImVuZ2luZSIsImNyZWF0ZSIsInJlbmRlciIsImVsZW1lbnQiLCJvcHRpb25zIiwid2lkdGgiLCJjbGllbnRXaWR0aCIsImhlaWdodCIsImNsaWVudEhlaWdodCIsImJhY2tncm91bmQiLCJ3aXJlZnJhbWVzIiwic2hvd0FuZ2xlSW5kaWNhdG9yIiwic3RhY2siLCJ4IiwieSIsInJlY3RhbmdsZSIsImdyb3VuZCIsImlzU3RhdGljIiwibGVmdFdhbGwiLCJyaWdodFdhbGwiLCJhZGQiLCJ3b3JsZCIsIm1vdXNlIiwiY2FudmFzIiwibW91c2VDb25zdHJhaW50IiwiY29uc3RyYWludCIsInN0aWZmbmVzcyIsInZpc2libGUiLCJiYWxsIiwiY2lyY2xlIiwiZGVuc2l0eSIsImZyaWN0aW9uQWlyIiwicG9pbnRBIiwiYm9keUIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibW91c2V3aGVlbCIsInJ1biIsInJ1bm5lciIsImhhbmRsZVJlc2l6ZSIsInNldFBvc2l0aW9uIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3AiLCJkaXYiLCJyZWYiLCJzdHlsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CanvasSecondary/CanvasSecondary.jsx\n"));

/***/ })

});