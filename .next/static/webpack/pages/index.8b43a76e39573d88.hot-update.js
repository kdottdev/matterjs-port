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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! matter-js */ \"./node_modules/matter-js/build/matter.js\");\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst CanvasSecondary = (param)=>{\n    let { didSmash  } = param;\n    _s();\n    const matterContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const THICCNESS = 60;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const matterContainer = matterContainerRef.current;\n        // module aliases\n        var Engine = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Engine), Render = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Render), Runner = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Runner), Bodies = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Bodies), Composite = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Composite);\n        // create an engine\n        var engine = Engine.create();\n        // create a renderer\n        var render = Render.create({\n            element: matterContainer,\n            engine: engine,\n            options: {\n                width: matterContainer.clientWidth,\n                height: matterContainer.clientHeight,\n                background: \"#131314\",\n                wireframes: false,\n                showAngleIndicator: false\n            }\n        });\n        var stack = matter_js__WEBPACK_IMPORTED_MODULE_2__.Composites.stack(matterContainer.clientWidth / 2, matterContainer.clientHeight / 2, 5, 10, 10, 0, function(x, y) {\n            return Bodies.rectangle(x, y, 40, 40);\n        });\n        var ground = Bodies.rectangle(matterContainer.clientWidth / 2, matterContainer.clientHeight + THICCNESS / 2, 27184, THICCNESS, {\n            isStatic: true\n        });\n        let leftWall = Bodies.rectangle(0 - THICCNESS / 2, matterContainer.clientHeight / 2, THICCNESS, matterContainer.clientHeight * 5, {\n            isStatic: true\n        });\n        let rightWall = Bodies.rectangle(matterContainer.clientWidth + THICCNESS / 2, matterContainer.clientHeight / 2, THICCNESS, matterContainer.clientHeight * 5, {\n            isStatic: true\n        });\n        // add all of the bodies to the world\n        Composite.add(engine.world, [\n            ground,\n            leftWall,\n            rightWall,\n            stack\n        ]);\n        var mouse = matter_js__WEBPACK_IMPORTED_MODULE_2__.Mouse.create(render.canvas), mouseConstraint = matter_js__WEBPACK_IMPORTED_MODULE_2__.MouseConstraint.create(engine, {\n            mouse: mouse,\n            constraint: {\n                stiffness: 0.2,\n                render: {\n                    visible: false\n                }\n            }\n        });\n        Composite.add(engine.world, mouseConstraint);\n        var ball = Bodies.circle(matterContainer.clientWidth / 8, matterContainer.clientHeight / 3, 50, {\n            density: 0.05,\n            frictionAir: 0.005\n        });\n        Composite.add(engine.world, ball);\n        Composite.add(engine.world, matter_js__WEBPACK_IMPORTED_MODULE_2__.Constraint.create({\n            pointA: {\n                x: matterContainer.clientWidth / 2.5,\n                y: matterContainer.clientHeight / 4\n            },\n            bodyB: ball\n        }));\n        var holdingThread = matter_js__WEBPACK_IMPORTED_MODULE_2__.Constraint.create({\n            pointA: {\n                x: 300,\n                y: 100\n            },\n            bodyB: ball\n        });\n        Composite.add(engine.world, holdingThread);\n        // allow scroll through the canvas\n        mouseConstraint.mouse.element.removeEventListener(\"mousewheel\", mouseConstraint.mouse.mousewheel);\n        mouseConstraint.mouse.element.removeEventListener(\"DOMMouseScroll\", mouseConstraint.mouse.mousewheel);\n        // run the renderer\n        Render.run(render);\n        // create runner\n        var runner = Runner.create();\n        // run the engine\n        Runner.run(runner, engine);\n        function handleResize() {\n            // set canvas size to new values\n            render.canvas.width = matterContainer.clientWidth;\n            render.canvas.height = matterContainer.clientHeight;\n            // reposition ground\n            matter_js__WEBPACK_IMPORTED_MODULE_2__.Body.setPosition(ground, matter_js__WEBPACK_IMPORTED_MODULE_2__.Vector.create(matterContainer.clientWidth / 2, matterContainer.clientHeight + THICCNESS / 2));\n            // reposition right wall\n            matter_js__WEBPACK_IMPORTED_MODULE_2__.Body.setPosition(rightWall, matter_js__WEBPACK_IMPORTED_MODULE_2__.Vector.create(matterContainer.clientWidth + THICCNESS / 2, matterContainer.clientHeight / 2));\n            matter_js__WEBPACK_IMPORTED_MODULE_2__.Body.setPosition(ball, matter_js__WEBPACK_IMPORTED_MODULE_2__.Vector.create(matterContainer.clientWidth / 8, matterContainer.clientHeight / 3));\n        }\n        // const explosion = (engine, delta) => {\n        //   const timeScale = 1000 / 60 / delta;\n        //   const bodies = Composite.allBodies(engine.world);\n        //   for (let i = 0; i < bodies.length; i++) {\n        //     const body = bodies[i];\n        //     if (!body.isStatic && body.position.y >= 500) {\n        //       // scale force for mass and time applied\n        //       const forceMagnitude = 0.05 * body.mass * timeScale;\n        //       // apply the force over a single update\n        //       Body.applyForce(body, body.position, {\n        //         x:\n        //           (forceMagnitude + Common.random() * forceMagnitude) *\n        //           Common.choose([1, -1]),\n        //         y: -forceMagnitude + Common.random() * -forceMagnitude,\n        //       });\n        //     }\n        //   }\n        // };\n        // let timeScaleTarget = 1;\n        // let lastTime = Common.now();\n        // Events.on(engine, \"afterUpdate\", (event) => {\n        //   const timeScale = (event.delta || 1000 / 60) / 1000;\n        //   // tween the timescale for bullet time slow-mo\n        //   engine.timing.timeScale +=\n        //     (timeScaleTarget - engine.timing.timeScale) * 12 * timeScale;\n        //   // every 2 sec (real time)\n        //   if (Common.now() - lastTime >= 2000) {\n        //     // flip the timescale\n        //     if (timeScaleTarget < 1) {\n        //       timeScaleTarget = 1;\n        //     } else {\n        //       timeScaleTarget = 0;\n        //     }\n        //     // create some random forces\n        //     explosion(engine, event.delta);\n        //     // update last time\n        //     lastTime = Common.now();\n        //   }\n        // });\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n            Render.stop(render);\n            Runner.stop(runner);\n        };\n    }, [\n        didSmash\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: matterContainerRef,\n        style: {\n            width: \"100%\",\n            height: \"100%\",\n            cursor: \"pointer\",\n            pointerEvents: \"none\"\n        }\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Kartik jha\\\\Desktop\\\\Final-Port-Mk1\\\\components\\\\CanvasSecondary\\\\CanvasSecondary.jsx\",\n        lineNumber: 241,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CanvasSecondary, \"EC5p7TwiwOKcS+IJQCwbrNix8j8=\");\n_c = CanvasSecondary;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CanvasSecondary);\nvar _c;\n$RefreshReg$(_c, \"CanvasSecondary\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhbnZhc1NlY29uZGFyeS9DYW52YXNTZWNvbmRhcnkuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFpRDtBQVc5QjtBQUVuQixNQUFNYSxrQkFBa0IsU0FBa0I7UUFBakIsRUFBRUMsU0FBUSxFQUFFOztJQUNuQyxNQUFNQyxxQkFBcUJiLDZDQUFNQSxDQUFDLElBQUk7SUFDdEMsTUFBTWMsWUFBWTtJQUVsQmYsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1nQixrQkFBa0JGLG1CQUFtQkcsT0FBTztRQUVsRCxpQkFBaUI7UUFDakIsSUFBSUMsU0FBU2hCLHlEQUFhLEVBQ3hCaUIsU0FBU2pCLHlEQUFhLEVBQ3RCa0IsU0FBU2xCLHlEQUFhLEVBQ3RCbUIsU0FBU25CLHlEQUFhLEVBQ3RCb0IsWUFBWXBCLDREQUFnQjtRQUU5QixtQkFBbUI7UUFDbkIsSUFBSXFCLFNBQVNMLE9BQU9NLE1BQU07UUFFMUIsb0JBQW9CO1FBQ3BCLElBQUlDLFNBQVNOLE9BQU9LLE1BQU0sQ0FBQztZQUN6QkUsU0FBU1Y7WUFDVE8sUUFBUUE7WUFDUkksU0FBUztnQkFDUEMsT0FBT1osZ0JBQWdCYSxXQUFXO2dCQUNsQ0MsUUFBUWQsZ0JBQWdCZSxZQUFZO2dCQUNwQ0MsWUFBWTtnQkFDWkMsWUFBWSxLQUFLO2dCQUNqQkMsb0JBQW9CLEtBQUs7WUFDM0I7UUFDRjtRQUVBLElBQUlDLFFBQVE5Qix1REFBZ0IsQ0FDMUJXLGdCQUFnQmEsV0FBVyxHQUFHLEdBQzlCYixnQkFBZ0JlLFlBQVksR0FBRyxHQUMvQixHQUNBLElBQ0EsSUFDQSxHQUNBLFNBQVVLLENBQUMsRUFBRUMsQ0FBQyxFQUFFO1lBQ2QsT0FBT2hCLE9BQU9pQixTQUFTLENBQUNGLEdBQUdDLEdBQUcsSUFBSTtRQUNwQztRQUdGLElBQUlFLFNBQVNsQixPQUFPaUIsU0FBUyxDQUMzQnRCLGdCQUFnQmEsV0FBVyxHQUFHLEdBQzlCYixnQkFBZ0JlLFlBQVksR0FBR2hCLFlBQVksR0FD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UUFHckM7UUFFQSx5Q0FBeUM7UUFDekMseUNBQXlDO1FBQ3pDLHNEQUFzRDtRQUV0RCw4Q0FBOEM7UUFDOUMsOEJBQThCO1FBRTlCLHNEQUFzRDtRQUN0RCxpREFBaUQ7UUFDakQsNkRBQTZEO1FBRTdELGdEQUFnRDtRQUNoRCwrQ0FBK0M7UUFDL0MsYUFBYTtRQUNiLGtFQUFrRTtRQUNsRSxvQ0FBb0M7UUFDcEMsa0VBQWtFO1FBQ2xFLFlBQVk7UUFDWixRQUFRO1FBQ1IsTUFBTTtRQUNOLEtBQUs7UUFFTCwyQkFBMkI7UUFDM0IsK0JBQStCO1FBRS9CLGdEQUFnRDtRQUNoRCx5REFBeUQ7UUFFekQsbURBQW1EO1FBQ25ELCtCQUErQjtRQUMvQixvRUFBb0U7UUFFcEUsK0JBQStCO1FBQy9CLDJDQUEyQztRQUMzQyw0QkFBNEI7UUFDNUIsaUNBQWlDO1FBQ2pDLDZCQUE2QjtRQUM3QixlQUFlO1FBQ2YsNkJBQTZCO1FBQzdCLFFBQVE7UUFFUixtQ0FBbUM7UUFDbkMsc0NBQXNDO1FBRXRDLDBCQUEwQjtRQUMxQiwrQkFBK0I7UUFDL0IsTUFBTTtRQUNOLE1BQU07UUFFTmlDLE9BQU9DLGdCQUFnQixDQUFDLFVBQVVIO1FBRWxDLE9BQU8sSUFBTTtZQUNYRSxPQUFPTixtQkFBbUIsQ0FBQyxVQUFVSTtZQUNyQzNDLE9BQU8rQyxJQUFJLENBQUN6QztZQUNaTCxPQUFPOEMsSUFBSSxDQUFDTDtRQUNkO0lBQ0YsR0FBRztRQUFDaEQ7S0FBUztJQUViLHFCQUNFLDhEQUFDc0Q7UUFDQ0MsS0FBS3REO1FBQ0x1RCxPQUFPO1lBQ0x6QyxPQUFPO1lBQ1BFLFFBQVE7WUFDUndDLFFBQVE7WUFDUkMsZUFBZTtRQUNqQjs7Ozs7O0FBR047R0E3T00zRDtLQUFBQTtBQStPTiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NhbnZhc1NlY29uZGFyeS9DYW52YXNTZWNvbmRhcnkuanN4PzVkMWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNYXR0ZXIsIHtcclxuICBCb2R5LFxyXG4gIENvbW1vbixcclxuICBDb21wb3NpdGVzLFxyXG4gIENvbnN0cmFpbnQsXHJcbiAgRXZlbnRzLFxyXG4gIE1vdXNlLFxyXG4gIE1vdXNlQ29uc3RyYWludCxcclxuICBWZWN0b3IsXHJcbiAgV29ybGQsXHJcbn0gZnJvbSBcIm1hdHRlci1qc1wiO1xyXG5cclxuY29uc3QgQ2FudmFzU2Vjb25kYXJ5ID0gKHsgZGlkU21hc2ggfSkgPT4ge1xyXG4gIGNvbnN0IG1hdHRlckNvbnRhaW5lclJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBUSElDQ05FU1MgPSA2MDtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG1hdHRlckNvbnRhaW5lciA9IG1hdHRlckNvbnRhaW5lclJlZi5jdXJyZW50O1xyXG5cclxuICAgIC8vIG1vZHVsZSBhbGlhc2VzXHJcbiAgICB2YXIgRW5naW5lID0gTWF0dGVyLkVuZ2luZSxcclxuICAgICAgUmVuZGVyID0gTWF0dGVyLlJlbmRlcixcclxuICAgICAgUnVubmVyID0gTWF0dGVyLlJ1bm5lcixcclxuICAgICAgQm9kaWVzID0gTWF0dGVyLkJvZGllcyxcclxuICAgICAgQ29tcG9zaXRlID0gTWF0dGVyLkNvbXBvc2l0ZTtcclxuXHJcbiAgICAvLyBjcmVhdGUgYW4gZW5naW5lXHJcbiAgICB2YXIgZW5naW5lID0gRW5naW5lLmNyZWF0ZSgpO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBhIHJlbmRlcmVyXHJcbiAgICB2YXIgcmVuZGVyID0gUmVuZGVyLmNyZWF0ZSh7XHJcbiAgICAgIGVsZW1lbnQ6IG1hdHRlckNvbnRhaW5lcixcclxuICAgICAgZW5naW5lOiBlbmdpbmUsXHJcbiAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICB3aWR0aDogbWF0dGVyQ29udGFpbmVyLmNsaWVudFdpZHRoLFxyXG4gICAgICAgIGhlaWdodDogbWF0dGVyQ29udGFpbmVyLmNsaWVudEhlaWdodCxcclxuICAgICAgICBiYWNrZ3JvdW5kOiBcIiMxMzEzMTRcIixcclxuICAgICAgICB3aXJlZnJhbWVzOiBmYWxzZSxcclxuICAgICAgICBzaG93QW5nbGVJbmRpY2F0b3I6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHN0YWNrID0gQ29tcG9zaXRlcy5zdGFjayhcclxuICAgICAgbWF0dGVyQ29udGFpbmVyLmNsaWVudFdpZHRoIC8gMixcclxuICAgICAgbWF0dGVyQ29udGFpbmVyLmNsaWVudEhlaWdodCAvIDIsXHJcbiAgICAgIDUsXHJcbiAgICAgIDEwLFxyXG4gICAgICAxMCxcclxuICAgICAgMCxcclxuICAgICAgZnVuY3Rpb24gKHgsIHkpIHtcclxuICAgICAgICByZXR1cm4gQm9kaWVzLnJlY3RhbmdsZSh4LCB5LCA0MCwgNDApO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHZhciBncm91bmQgPSBCb2RpZXMucmVjdGFuZ2xlKFxyXG4gICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50V2lkdGggLyAyLFxyXG4gICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0ICsgVEhJQ0NORVNTIC8gMixcclxuICAgICAgMjcxODQsXHJcbiAgICAgIFRISUNDTkVTUyxcclxuICAgICAgeyBpc1N0YXRpYzogdHJ1ZSB9XHJcbiAgICApO1xyXG5cclxuICAgIGxldCBsZWZ0V2FsbCA9IEJvZGllcy5yZWN0YW5nbGUoXHJcbiAgICAgIDAgLSBUSElDQ05FU1MgLyAyLFxyXG4gICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0IC8gMixcclxuICAgICAgVEhJQ0NORVNTLFxyXG4gICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0ICogNSxcclxuICAgICAge1xyXG4gICAgICAgIGlzU3RhdGljOiB0cnVlLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGxldCByaWdodFdhbGwgPSBCb2RpZXMucmVjdGFuZ2xlKFxyXG4gICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50V2lkdGggKyBUSElDQ05FU1MgLyAyLFxyXG4gICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0IC8gMixcclxuICAgICAgVEhJQ0NORVNTLFxyXG4gICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0ICogNSxcclxuICAgICAgeyBpc1N0YXRpYzogdHJ1ZSB9XHJcbiAgICApO1xyXG5cclxuICAgIC8vIGFkZCBhbGwgb2YgdGhlIGJvZGllcyB0byB0aGUgd29ybGRcclxuICAgIENvbXBvc2l0ZS5hZGQoZW5naW5lLndvcmxkLCBbZ3JvdW5kLCBsZWZ0V2FsbCwgcmlnaHRXYWxsLCBzdGFja10pO1xyXG5cclxuICAgIHZhciBtb3VzZSA9IE1vdXNlLmNyZWF0ZShyZW5kZXIuY2FudmFzKSxcclxuICAgICAgbW91c2VDb25zdHJhaW50ID0gTW91c2VDb25zdHJhaW50LmNyZWF0ZShlbmdpbmUsIHtcclxuICAgICAgICBtb3VzZTogbW91c2UsXHJcbiAgICAgICAgY29uc3RyYWludDoge1xyXG4gICAgICAgICAgc3RpZmZuZXNzOiAwLjIsXHJcbiAgICAgICAgICByZW5kZXI6IHtcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIENvbXBvc2l0ZS5hZGQoZW5naW5lLndvcmxkLCBtb3VzZUNvbnN0cmFpbnQpO1xyXG5cclxuICAgIHZhciBiYWxsID0gQm9kaWVzLmNpcmNsZShcclxuICAgICAgbWF0dGVyQ29udGFpbmVyLmNsaWVudFdpZHRoIC8gOCxcclxuICAgICAgbWF0dGVyQ29udGFpbmVyLmNsaWVudEhlaWdodCAvIDMsXHJcbiAgICAgIDUwLFxyXG4gICAgICB7XHJcbiAgICAgICAgZGVuc2l0eTogMC4wNSxcclxuICAgICAgICBmcmljdGlvbkFpcjogMC4wMDUsXHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgQ29tcG9zaXRlLmFkZChlbmdpbmUud29ybGQsIGJhbGwpO1xyXG5cclxuICAgIENvbXBvc2l0ZS5hZGQoXHJcbiAgICAgIGVuZ2luZS53b3JsZCxcclxuICAgICAgQ29uc3RyYWludC5jcmVhdGUoe1xyXG4gICAgICAgIHBvaW50QToge1xyXG4gICAgICAgICAgeDogbWF0dGVyQ29udGFpbmVyLmNsaWVudFdpZHRoIC8gMi41LFxyXG4gICAgICAgICAgeTogbWF0dGVyQ29udGFpbmVyLmNsaWVudEhlaWdodCAvIDQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5QjogYmFsbCxcclxuICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gICAgdmFyIGhvbGRpbmdUaHJlYWQgPSBDb25zdHJhaW50LmNyZWF0ZSh7XHJcbiAgICAgIHBvaW50QToge1xyXG4gICAgICAgIHg6IDMwMCxcclxuICAgICAgICB5OiAxMDAsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHlCOiBiYWxsLFxyXG4gICAgfSk7XHJcblxyXG4gICAgQ29tcG9zaXRlLmFkZChlbmdpbmUud29ybGQsIGhvbGRpbmdUaHJlYWQpO1xyXG5cclxuICAgIC8vIGFsbG93IHNjcm9sbCB0aHJvdWdoIHRoZSBjYW52YXNcclxuICAgIG1vdXNlQ29uc3RyYWludC5tb3VzZS5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIFwibW91c2V3aGVlbFwiLFxyXG4gICAgICBtb3VzZUNvbnN0cmFpbnQubW91c2UubW91c2V3aGVlbFxyXG4gICAgKTtcclxuICAgIG1vdXNlQ29uc3RyYWludC5tb3VzZS5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIFwiRE9NTW91c2VTY3JvbGxcIixcclxuICAgICAgbW91c2VDb25zdHJhaW50Lm1vdXNlLm1vdXNld2hlZWxcclxuICAgICk7XHJcblxyXG4gICAgLy8gcnVuIHRoZSByZW5kZXJlclxyXG4gICAgUmVuZGVyLnJ1bihyZW5kZXIpO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBydW5uZXJcclxuICAgIHZhciBydW5uZXIgPSBSdW5uZXIuY3JlYXRlKCk7XHJcblxyXG4gICAgLy8gcnVuIHRoZSBlbmdpbmVcclxuICAgIFJ1bm5lci5ydW4ocnVubmVyLCBlbmdpbmUpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcclxuICAgICAgLy8gc2V0IGNhbnZhcyBzaXplIHRvIG5ldyB2YWx1ZXNcclxuICAgICAgcmVuZGVyLmNhbnZhcy53aWR0aCA9IG1hdHRlckNvbnRhaW5lci5jbGllbnRXaWR0aDtcclxuICAgICAgcmVuZGVyLmNhbnZhcy5oZWlnaHQgPSBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgICAgLy8gcmVwb3NpdGlvbiBncm91bmRcclxuICAgICAgQm9keS5zZXRQb3NpdGlvbihcclxuICAgICAgICBncm91bmQsXHJcbiAgICAgICAgVmVjdG9yLmNyZWF0ZShcclxuICAgICAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRXaWR0aCAvIDIsXHJcbiAgICAgICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0ICsgVEhJQ0NORVNTIC8gMlxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vIHJlcG9zaXRpb24gcmlnaHQgd2FsbFxyXG4gICAgICBCb2R5LnNldFBvc2l0aW9uKFxyXG4gICAgICAgIHJpZ2h0V2FsbCxcclxuICAgICAgICBWZWN0b3IuY3JlYXRlKFxyXG4gICAgICAgICAgbWF0dGVyQ29udGFpbmVyLmNsaWVudFdpZHRoICsgVEhJQ0NORVNTIC8gMixcclxuICAgICAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRIZWlnaHQgLyAyXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgQm9keS5zZXRQb3NpdGlvbihcclxuICAgICAgICBiYWxsLFxyXG4gICAgICAgIFZlY3Rvci5jcmVhdGUoXHJcbiAgICAgICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50V2lkdGggLyA4LFxyXG4gICAgICAgICAgbWF0dGVyQ29udGFpbmVyLmNsaWVudEhlaWdodCAvIDNcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uc3QgZXhwbG9zaW9uID0gKGVuZ2luZSwgZGVsdGEpID0+IHtcclxuICAgIC8vICAgY29uc3QgdGltZVNjYWxlID0gMTAwMCAvIDYwIC8gZGVsdGE7XHJcbiAgICAvLyAgIGNvbnN0IGJvZGllcyA9IENvbXBvc2l0ZS5hbGxCb2RpZXMoZW5naW5lLndvcmxkKTtcclxuXHJcbiAgICAvLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgY29uc3QgYm9keSA9IGJvZGllc1tpXTtcclxuXHJcbiAgICAvLyAgICAgaWYgKCFib2R5LmlzU3RhdGljICYmIGJvZHkucG9zaXRpb24ueSA+PSA1MDApIHtcclxuICAgIC8vICAgICAgIC8vIHNjYWxlIGZvcmNlIGZvciBtYXNzIGFuZCB0aW1lIGFwcGxpZWRcclxuICAgIC8vICAgICAgIGNvbnN0IGZvcmNlTWFnbml0dWRlID0gMC4wNSAqIGJvZHkubWFzcyAqIHRpbWVTY2FsZTtcclxuXHJcbiAgICAvLyAgICAgICAvLyBhcHBseSB0aGUgZm9yY2Ugb3ZlciBhIHNpbmdsZSB1cGRhdGVcclxuICAgIC8vICAgICAgIEJvZHkuYXBwbHlGb3JjZShib2R5LCBib2R5LnBvc2l0aW9uLCB7XHJcbiAgICAvLyAgICAgICAgIHg6XHJcbiAgICAvLyAgICAgICAgICAgKGZvcmNlTWFnbml0dWRlICsgQ29tbW9uLnJhbmRvbSgpICogZm9yY2VNYWduaXR1ZGUpICpcclxuICAgIC8vICAgICAgICAgICBDb21tb24uY2hvb3NlKFsxLCAtMV0pLFxyXG4gICAgLy8gICAgICAgICB5OiAtZm9yY2VNYWduaXR1ZGUgKyBDb21tb24ucmFuZG9tKCkgKiAtZm9yY2VNYWduaXR1ZGUsXHJcbiAgICAvLyAgICAgICB9KTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH07XHJcblxyXG4gICAgLy8gbGV0IHRpbWVTY2FsZVRhcmdldCA9IDE7XHJcbiAgICAvLyBsZXQgbGFzdFRpbWUgPSBDb21tb24ubm93KCk7XHJcblxyXG4gICAgLy8gRXZlbnRzLm9uKGVuZ2luZSwgXCJhZnRlclVwZGF0ZVwiLCAoZXZlbnQpID0+IHtcclxuICAgIC8vICAgY29uc3QgdGltZVNjYWxlID0gKGV2ZW50LmRlbHRhIHx8IDEwMDAgLyA2MCkgLyAxMDAwO1xyXG5cclxuICAgIC8vICAgLy8gdHdlZW4gdGhlIHRpbWVzY2FsZSBmb3IgYnVsbGV0IHRpbWUgc2xvdy1tb1xyXG4gICAgLy8gICBlbmdpbmUudGltaW5nLnRpbWVTY2FsZSArPVxyXG4gICAgLy8gICAgICh0aW1lU2NhbGVUYXJnZXQgLSBlbmdpbmUudGltaW5nLnRpbWVTY2FsZSkgKiAxMiAqIHRpbWVTY2FsZTtcclxuXHJcbiAgICAvLyAgIC8vIGV2ZXJ5IDIgc2VjIChyZWFsIHRpbWUpXHJcbiAgICAvLyAgIGlmIChDb21tb24ubm93KCkgLSBsYXN0VGltZSA+PSAyMDAwKSB7XHJcbiAgICAvLyAgICAgLy8gZmxpcCB0aGUgdGltZXNjYWxlXHJcbiAgICAvLyAgICAgaWYgKHRpbWVTY2FsZVRhcmdldCA8IDEpIHtcclxuICAgIC8vICAgICAgIHRpbWVTY2FsZVRhcmdldCA9IDE7XHJcbiAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgIHRpbWVTY2FsZVRhcmdldCA9IDA7XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICAvLyBjcmVhdGUgc29tZSByYW5kb20gZm9yY2VzXHJcbiAgICAvLyAgICAgZXhwbG9zaW9uKGVuZ2luZSwgZXZlbnQuZGVsdGEpO1xyXG5cclxuICAgIC8vICAgICAvLyB1cGRhdGUgbGFzdCB0aW1lXHJcbiAgICAvLyAgICAgbGFzdFRpbWUgPSBDb21tb24ubm93KCk7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0pO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuICAgICAgUmVuZGVyLnN0b3AocmVuZGVyKTtcclxuICAgICAgUnVubmVyLnN0b3AocnVubmVyKTtcclxuICAgIH07XHJcbiAgfSwgW2RpZFNtYXNoXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHJlZj17bWF0dGVyQ29udGFpbmVyUmVmfVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgcG9pbnRlckV2ZW50czogXCJub25lXCIsXHJcbiAgICAgIH19XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYW52YXNTZWNvbmRhcnk7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsIk1hdHRlciIsIkJvZHkiLCJDb21tb24iLCJDb21wb3NpdGVzIiwiQ29uc3RyYWludCIsIkV2ZW50cyIsIk1vdXNlIiwiTW91c2VDb25zdHJhaW50IiwiVmVjdG9yIiwiV29ybGQiLCJDYW52YXNTZWNvbmRhcnkiLCJkaWRTbWFzaCIsIm1hdHRlckNvbnRhaW5lclJlZiIsIlRISUNDTkVTUyIsIm1hdHRlckNvbnRhaW5lciIsImN1cnJlbnQiLCJFbmdpbmUiLCJSZW5kZXIiLCJSdW5uZXIiLCJCb2RpZXMiLCJDb21wb3NpdGUiLCJlbmdpbmUiLCJjcmVhdGUiLCJyZW5kZXIiLCJlbGVtZW50Iiwib3B0aW9ucyIsIndpZHRoIiwiY2xpZW50V2lkdGgiLCJoZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJiYWNrZ3JvdW5kIiwid2lyZWZyYW1lcyIsInNob3dBbmdsZUluZGljYXRvciIsInN0YWNrIiwieCIsInkiLCJyZWN0YW5nbGUiLCJncm91bmQiLCJpc1N0YXRpYyIsImxlZnRXYWxsIiwicmlnaHRXYWxsIiwiYWRkIiwid29ybGQiLCJtb3VzZSIsImNhbnZhcyIsIm1vdXNlQ29uc3RyYWludCIsImNvbnN0cmFpbnQiLCJzdGlmZm5lc3MiLCJ2aXNpYmxlIiwiYmFsbCIsImNpcmNsZSIsImRlbnNpdHkiLCJmcmljdGlvbkFpciIsInBvaW50QSIsImJvZHlCIiwiaG9sZGluZ1RocmVhZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtb3VzZXdoZWVsIiwicnVuIiwicnVubmVyIiwiaGFuZGxlUmVzaXplIiwic2V0UG9zaXRpb24iLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcCIsImRpdiIsInJlZiIsInN0eWxlIiwiY3Vyc29yIiwicG9pbnRlckV2ZW50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CanvasSecondary/CanvasSecondary.jsx\n"));

/***/ })

});