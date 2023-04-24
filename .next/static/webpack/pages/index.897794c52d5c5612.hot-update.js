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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! matter-js */ \"./node_modules/matter-js/build/matter.js\");\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst CanvasSecondary = (param)=>{\n    let { didSmash  } = param;\n    _s();\n    const matterContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const THICCNESS = 60;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const matterContainer = matterContainerRef.current;\n        // module aliases\n        var Engine = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Engine), Render = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Render), Runner = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Runner), Bodies = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Bodies), Composite = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Composite);\n        // create an engine\n        var engine = Engine.create();\n        // create a renderer\n        var render = Render.create({\n            element: matterContainer,\n            engine: engine,\n            options: {\n                width: matterContainer.clientWidth,\n                height: matterContainer.clientHeight,\n                background: \"#131314\",\n                wireframes: false,\n                showAngleIndicator: false\n            }\n        });\n        var stack = matter_js__WEBPACK_IMPORTED_MODULE_2__.Composites.stack(matterContainer.clientWidth / 2, matterContainer.clientHeight / 2, 5, 10, 10, 0, function(x, y) {\n            return Bodies.rectangle(x, y, 40, 40);\n        });\n        var ground = Bodies.rectangle(matterContainer.clientWidth / 2, matterContainer.clientHeight + THICCNESS / 2, 27184, THICCNESS, {\n            isStatic: true\n        });\n        let leftWall = Bodies.rectangle(0 - THICCNESS / 2, matterContainer.clientHeight / 2, THICCNESS, matterContainer.clientHeight * 5, {\n            isStatic: true\n        });\n        let rightWall = Bodies.rectangle(matterContainer.clientWidth + THICCNESS / 2, matterContainer.clientHeight / 2, THICCNESS, matterContainer.clientHeight * 5, {\n            isStatic: true\n        });\n        // add all of the bodies to the world\n        Composite.add(engine.world, [\n            ground,\n            leftWall,\n            rightWall,\n            stack\n        ]);\n        var mouse = matter_js__WEBPACK_IMPORTED_MODULE_2__.Mouse.create(render.canvas), mouseConstraint = matter_js__WEBPACK_IMPORTED_MODULE_2__.MouseConstraint.create(engine, {\n            mouse: mouse,\n            constraint: {\n                stiffness: 0.2,\n                render: {\n                    visible: false\n                }\n            }\n        });\n        Composite.add(engine.world, mouseConstraint);\n        var ball = Bodies.circle(matterContainer.clientWidth / 8, matterContainer.clientHeight / 3, 50, {\n            density: 0.05,\n            frictionAir: 0.005\n        });\n        Composite.add(engine.world, ball);\n        Composite.add(engine.world, matter_js__WEBPACK_IMPORTED_MODULE_2__.Constraint.create({\n            pointA: {\n                x: matterContainer.clientWidth / 2.5,\n                y: matterContainer.clientHeight / 4\n            },\n            bodyB: ball\n        }));\n        var holdingThread = matter_js__WEBPACK_IMPORTED_MODULE_2__.Constraint.create({\n            pointA: {\n                x: 300,\n                y: 100\n            },\n            bodyB: ball\n        });\n        Composite.add(engine.world, holdingThread);\n        // allow scroll through the canvas\n        mouseConstraint.mouse.element.removeEventListener(\"mousewheel\", mouseConstraint.mouse.mousewheel);\n        mouseConstraint.mouse.element.removeEventListener(\"DOMMouseScroll\", mouseConstraint.mouse.mousewheel);\n        // run the renderer\n        Render.run(render);\n        // create runner\n        var runner = Runner.create();\n        // run the engine\n        Runner.run(runner, engine);\n        function handleResize() {\n            // set canvas size to new values\n            render.canvas.width = matterContainer.clientWidth;\n            render.canvas.height = matterContainer.clientHeight;\n            // reposition ground\n            matter_js__WEBPACK_IMPORTED_MODULE_2__.Body.setPosition(ground, matter_js__WEBPACK_IMPORTED_MODULE_2__.Vector.create(matterContainer.clientWidth / 2, matterContainer.clientHeight + THICCNESS / 2));\n            // reposition right wall\n            matter_js__WEBPACK_IMPORTED_MODULE_2__.Body.setPosition(rightWall, matter_js__WEBPACK_IMPORTED_MODULE_2__.Vector.create(matterContainer.clientWidth + THICCNESS / 2, matterContainer.clientHeight / 2));\n            matter_js__WEBPACK_IMPORTED_MODULE_2__.Body.setPosition(ball, matter_js__WEBPACK_IMPORTED_MODULE_2__.Vector.create(matterContainer.clientWidth / 8, matterContainer.clientHeight / 3));\n        }\n        // const explosion = (engine, delta) => {\n        //   const timeScale = 1000 / 60 / delta;\n        //   const bodies = Composite.allBodies(engine.world);\n        //   for (let i = 0; i < bodies.length; i++) {\n        //     const body = bodies[i];\n        //     if (!body.isStatic && body.position.y >= 500) {\n        //       // scale force for mass and time applied\n        //       const forceMagnitude = 0.05 * body.mass * timeScale;\n        //       // apply the force over a single update\n        //       Body.applyForce(body, body.position, {\n        //         x:\n        //           (forceMagnitude + Common.random() * forceMagnitude) *\n        //           Common.choose([1, -1]),\n        //         y: -forceMagnitude + Common.random() * -forceMagnitude,\n        //       });\n        //     }\n        //   }\n        // };\n        // let timeScaleTarget = 1;\n        // let lastTime = Common.now();\n        // Events.on(engine, \"afterUpdate\", (event) => {\n        //   const timeScale = (event.delta || 1000 / 60) / 1000;\n        //   // tween the timescale for bullet time slow-mo\n        //   engine.timing.timeScale +=\n        //     (timeScaleTarget - engine.timing.timeScale) * 12 * timeScale;\n        //   // every 2 sec (real time)\n        //   if (Common.now() - lastTime >= 2000) {\n        //     // flip the timescale\n        //     if (timeScaleTarget < 1) {\n        //       timeScaleTarget = 1;\n        //     } else {\n        //       timeScaleTarget = 0;\n        //     }\n        //     // create some random forces\n        //     explosion(engine, event.delta);\n        //     // update last time\n        //     lastTime = Common.now();\n        //   }\n        // });\n        if (matterContainerRef) {\n            matterContainerRef.current.addEventListener(\"click\", ()=>{\n                console.log(\"hello\");\n            });\n            matterContainerRef.current.addEventListener(\"click\", ()=>{\n                Composite.remove(engine.world, holdingThread);\n            });\n        }\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n            Render.stop(render);\n            Runner.stop(runner);\n        };\n    }, [\n        matterContainerRef\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: matterContainerRef,\n        style: {\n            width: \"100%\",\n            height: \"100%\",\n            cursor: \"pointer\"\n        }\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Kartik jha\\\\Desktop\\\\Final-Port-Mk1\\\\components\\\\CanvasSecondary\\\\CanvasSecondary.jsx\",\n        lineNumber: 250,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CanvasSecondary, \"EC5p7TwiwOKcS+IJQCwbrNix8j8=\");\n_c = CanvasSecondary;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CanvasSecondary);\nvar _c;\n$RefreshReg$(_c, \"CanvasSecondary\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhbnZhc1NlY29uZGFyeS9DYW52YXNTZWNvbmRhcnkuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFpRDtBQVc5QjtBQUVuQixNQUFNYSxrQkFBa0IsU0FBa0I7UUFBakIsRUFBRUMsU0FBUSxFQUFFOztJQUNuQyxNQUFNQyxxQkFBcUJiLDZDQUFNQSxDQUFDLElBQUk7SUFDdEMsTUFBTWMsWUFBWTtJQUVsQmYsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1nQixrQkFBa0JGLG1CQUFtQkcsT0FBTztRQUVsRCxpQkFBaUI7UUFDakIsSUFBSUMsU0FBU2hCLHlEQUFhLEVBQ3hCaUIsU0FBU2pCLHlEQUFhLEVBQ3RCa0IsU0FBU2xCLHlEQUFhLEVBQ3RCbUIsU0FBU25CLHlEQUFhLEVBQ3RCb0IsWUFBWXBCLDREQUFnQjtRQUU5QixtQkFBbUI7UUFDbkIsSUFBSXFCLFNBQVNMLE9BQU9NLE1BQU07UUFFMUIsb0JBQW9CO1FBQ3BCLElBQUlDLFNBQVNOLE9BQU9LLE1BQU0sQ0FBQztZQUN6QkUsU0FBU1Y7WUFDVE8sUUFBUUE7WUFDUkksU0FBUztnQkFDUEMsT0FBT1osZ0JBQWdCYSxXQUFXO2dCQUNsQ0MsUUFBUWQsZ0JBQWdCZSxZQUFZO2dCQUNwQ0MsWUFBWTtnQkFDWkMsWUFBWSxLQUFLO2dCQUNqQkMsb0JBQW9CLEtBQUs7WUFDM0I7UUFDRjtRQUVBLElBQUlDLFFBQVE5Qix1REFBZ0IsQ0FDMUJXLGdCQUFnQmEsV0FBVyxHQUFHLEdBQzlCYixnQkFBZ0JlLFlBQVksR0FBRyxHQUMvQixHQUNBLElBQ0EsSUFDQSxHQUNBLFNBQVVLLENBQUMsRUFBRUMsQ0FBQyxFQUFFO1lBQ2QsT0FBT2hCLE9BQU9pQixTQUFTLENBQUNGLEdBQUdDLEdBQUcsSUFBSTtRQUNwQztRQUdGLElBQUlFLFNBQVNsQixPQUFPaUIsU0FBUyxDQUMzQnRCLGdCQUFnQmEsV0FBVyxHQUFHLEdBQzlCYixnQkFBZ0JlLFlBQVksR0FBR2hCLFlBQVksR0FD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LE9BQU87WUFDUEUsUUFBUTtZQUNSMkMsUUFBUTtRQUNWOzs7Ozs7QUFHTjtHQXJQTTdEO0tBQUFBO0FBdVBOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2FudmFzU2Vjb25kYXJ5L0NhbnZhc1NlY29uZGFyeS5qc3g/NWQxZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1hdHRlciwge1xyXG4gIEJvZHksXHJcbiAgQ29tbW9uLFxyXG4gIENvbXBvc2l0ZXMsXHJcbiAgQ29uc3RyYWludCxcclxuICBFdmVudHMsXHJcbiAgTW91c2UsXHJcbiAgTW91c2VDb25zdHJhaW50LFxyXG4gIFZlY3RvcixcclxuICBXb3JsZCxcclxufSBmcm9tIFwibWF0dGVyLWpzXCI7XHJcblxyXG5jb25zdCBDYW52YXNTZWNvbmRhcnkgPSAoeyBkaWRTbWFzaCB9KSA9PiB7XHJcbiAgY29uc3QgbWF0dGVyQ29udGFpbmVyUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IFRISUNDTkVTUyA9IDYwO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgbWF0dGVyQ29udGFpbmVyID0gbWF0dGVyQ29udGFpbmVyUmVmLmN1cnJlbnQ7XHJcblxyXG4gICAgLy8gbW9kdWxlIGFsaWFzZXNcclxuICAgIHZhciBFbmdpbmUgPSBNYXR0ZXIuRW5naW5lLFxyXG4gICAgICBSZW5kZXIgPSBNYXR0ZXIuUmVuZGVyLFxyXG4gICAgICBSdW5uZXIgPSBNYXR0ZXIuUnVubmVyLFxyXG4gICAgICBCb2RpZXMgPSBNYXR0ZXIuQm9kaWVzLFxyXG4gICAgICBDb21wb3NpdGUgPSBNYXR0ZXIuQ29tcG9zaXRlO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBhbiBlbmdpbmVcclxuICAgIHZhciBlbmdpbmUgPSBFbmdpbmUuY3JlYXRlKCk7XHJcblxyXG4gICAgLy8gY3JlYXRlIGEgcmVuZGVyZXJcclxuICAgIHZhciByZW5kZXIgPSBSZW5kZXIuY3JlYXRlKHtcclxuICAgICAgZWxlbWVudDogbWF0dGVyQ29udGFpbmVyLFxyXG4gICAgICBlbmdpbmU6IGVuZ2luZSxcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIHdpZHRoOiBtYXR0ZXJDb250YWluZXIuY2xpZW50V2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0LFxyXG4gICAgICAgIGJhY2tncm91bmQ6IFwiIzEzMTMxNFwiLFxyXG4gICAgICAgIHdpcmVmcmFtZXM6IGZhbHNlLFxyXG4gICAgICAgIHNob3dBbmdsZUluZGljYXRvcjogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgc3RhY2sgPSBDb21wb3NpdGVzLnN0YWNrKFxyXG4gICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50V2lkdGggLyAyLFxyXG4gICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0IC8gMixcclxuICAgICAgNSxcclxuICAgICAgMTAsXHJcbiAgICAgIDEwLFxyXG4gICAgICAwLFxyXG4gICAgICBmdW5jdGlvbiAoeCwgeSkge1xyXG4gICAgICAgIHJldHVybiBCb2RpZXMucmVjdGFuZ2xlKHgsIHksIDQwLCA0MCk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgdmFyIGdyb3VuZCA9IEJvZGllcy5yZWN0YW5nbGUoXHJcbiAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRXaWR0aCAvIDIsXHJcbiAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRIZWlnaHQgKyBUSElDQ05FU1MgLyAyLFxyXG4gICAgICAyNzE4NCxcclxuICAgICAgVEhJQ0NORVNTLFxyXG4gICAgICB7IGlzU3RhdGljOiB0cnVlIH1cclxuICAgICk7XHJcblxyXG4gICAgbGV0IGxlZnRXYWxsID0gQm9kaWVzLnJlY3RhbmdsZShcclxuICAgICAgMCAtIFRISUNDTkVTUyAvIDIsXHJcbiAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRIZWlnaHQgLyAyLFxyXG4gICAgICBUSElDQ05FU1MsXHJcbiAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRIZWlnaHQgKiA1LFxyXG4gICAgICB7XHJcbiAgICAgICAgaXNTdGF0aWM6IHRydWUsXHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgbGV0IHJpZ2h0V2FsbCA9IEJvZGllcy5yZWN0YW5nbGUoXHJcbiAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRXaWR0aCArIFRISUNDTkVTUyAvIDIsXHJcbiAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRIZWlnaHQgLyAyLFxyXG4gICAgICBUSElDQ05FU1MsXHJcbiAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRIZWlnaHQgKiA1LFxyXG4gICAgICB7IGlzU3RhdGljOiB0cnVlIH1cclxuICAgICk7XHJcblxyXG4gICAgLy8gYWRkIGFsbCBvZiB0aGUgYm9kaWVzIHRvIHRoZSB3b3JsZFxyXG4gICAgQ29tcG9zaXRlLmFkZChlbmdpbmUud29ybGQsIFtncm91bmQsIGxlZnRXYWxsLCByaWdodFdhbGwsIHN0YWNrXSk7XHJcblxyXG4gICAgdmFyIG1vdXNlID0gTW91c2UuY3JlYXRlKHJlbmRlci5jYW52YXMpLFxyXG4gICAgICBtb3VzZUNvbnN0cmFpbnQgPSBNb3VzZUNvbnN0cmFpbnQuY3JlYXRlKGVuZ2luZSwge1xyXG4gICAgICAgIG1vdXNlOiBtb3VzZSxcclxuICAgICAgICBjb25zdHJhaW50OiB7XHJcbiAgICAgICAgICBzdGlmZm5lc3M6IDAuMixcclxuICAgICAgICAgIHJlbmRlcjoge1xyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgQ29tcG9zaXRlLmFkZChlbmdpbmUud29ybGQsIG1vdXNlQ29uc3RyYWludCk7XHJcblxyXG4gICAgdmFyIGJhbGwgPSBCb2RpZXMuY2lyY2xlKFxyXG4gICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50V2lkdGggLyA4LFxyXG4gICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0IC8gMyxcclxuICAgICAgNTAsXHJcbiAgICAgIHtcclxuICAgICAgICBkZW5zaXR5OiAwLjA1LFxyXG4gICAgICAgIGZyaWN0aW9uQWlyOiAwLjAwNSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBDb21wb3NpdGUuYWRkKGVuZ2luZS53b3JsZCwgYmFsbCk7XHJcblxyXG4gICAgQ29tcG9zaXRlLmFkZChcclxuICAgICAgZW5naW5lLndvcmxkLFxyXG4gICAgICBDb25zdHJhaW50LmNyZWF0ZSh7XHJcbiAgICAgICAgcG9pbnRBOiB7XHJcbiAgICAgICAgICB4OiBtYXR0ZXJDb250YWluZXIuY2xpZW50V2lkdGggLyAyLjUsXHJcbiAgICAgICAgICB5OiBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0IC8gNCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHlCOiBiYWxsLFxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICB2YXIgaG9sZGluZ1RocmVhZCA9IENvbnN0cmFpbnQuY3JlYXRlKHtcclxuICAgICAgcG9pbnRBOiB7XHJcbiAgICAgICAgeDogMzAwLFxyXG4gICAgICAgIHk6IDEwMCxcclxuICAgICAgfSxcclxuICAgICAgYm9keUI6IGJhbGwsXHJcbiAgICB9KTtcclxuXHJcbiAgICBDb21wb3NpdGUuYWRkKGVuZ2luZS53b3JsZCwgaG9sZGluZ1RocmVhZCk7XHJcblxyXG4gICAgLy8gYWxsb3cgc2Nyb2xsIHRocm91Z2ggdGhlIGNhbnZhc1xyXG4gICAgbW91c2VDb25zdHJhaW50Lm1vdXNlLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcclxuICAgICAgXCJtb3VzZXdoZWVsXCIsXHJcbiAgICAgIG1vdXNlQ29uc3RyYWludC5tb3VzZS5tb3VzZXdoZWVsXHJcbiAgICApO1xyXG4gICAgbW91c2VDb25zdHJhaW50Lm1vdXNlLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcclxuICAgICAgXCJET01Nb3VzZVNjcm9sbFwiLFxyXG4gICAgICBtb3VzZUNvbnN0cmFpbnQubW91c2UubW91c2V3aGVlbFxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBydW4gdGhlIHJlbmRlcmVyXHJcbiAgICBSZW5kZXIucnVuKHJlbmRlcik7XHJcblxyXG4gICAgLy8gY3JlYXRlIHJ1bm5lclxyXG4gICAgdmFyIHJ1bm5lciA9IFJ1bm5lci5jcmVhdGUoKTtcclxuXHJcbiAgICAvLyBydW4gdGhlIGVuZ2luZVxyXG4gICAgUnVubmVyLnJ1bihydW5uZXIsIGVuZ2luZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlUmVzaXplKCkge1xyXG4gICAgICAvLyBzZXQgY2FudmFzIHNpemUgdG8gbmV3IHZhbHVlc1xyXG4gICAgICByZW5kZXIuY2FudmFzLndpZHRoID0gbWF0dGVyQ29udGFpbmVyLmNsaWVudFdpZHRoO1xyXG4gICAgICByZW5kZXIuY2FudmFzLmhlaWdodCA9IG1hdHRlckNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XHJcblxyXG4gICAgICAvLyByZXBvc2l0aW9uIGdyb3VuZFxyXG4gICAgICBCb2R5LnNldFBvc2l0aW9uKFxyXG4gICAgICAgIGdyb3VuZCxcclxuICAgICAgICBWZWN0b3IuY3JlYXRlKFxyXG4gICAgICAgICAgbWF0dGVyQ29udGFpbmVyLmNsaWVudFdpZHRoIC8gMixcclxuICAgICAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRIZWlnaHQgKyBUSElDQ05FU1MgLyAyXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgLy8gcmVwb3NpdGlvbiByaWdodCB3YWxsXHJcbiAgICAgIEJvZHkuc2V0UG9zaXRpb24oXHJcbiAgICAgICAgcmlnaHRXYWxsLFxyXG4gICAgICAgIFZlY3Rvci5jcmVhdGUoXHJcbiAgICAgICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50V2lkdGggKyBUSElDQ05FU1MgLyAyLFxyXG4gICAgICAgICAgbWF0dGVyQ29udGFpbmVyLmNsaWVudEhlaWdodCAvIDJcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBCb2R5LnNldFBvc2l0aW9uKFxyXG4gICAgICAgIGJhbGwsXHJcbiAgICAgICAgVmVjdG9yLmNyZWF0ZShcclxuICAgICAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRXaWR0aCAvIDgsXHJcbiAgICAgICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0IC8gM1xyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb25zdCBleHBsb3Npb24gPSAoZW5naW5lLCBkZWx0YSkgPT4ge1xyXG4gICAgLy8gICBjb25zdCB0aW1lU2NhbGUgPSAxMDAwIC8gNjAgLyBkZWx0YTtcclxuICAgIC8vICAgY29uc3QgYm9kaWVzID0gQ29tcG9zaXRlLmFsbEJvZGllcyhlbmdpbmUud29ybGQpO1xyXG5cclxuICAgIC8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICBjb25zdCBib2R5ID0gYm9kaWVzW2ldO1xyXG5cclxuICAgIC8vICAgICBpZiAoIWJvZHkuaXNTdGF0aWMgJiYgYm9keS5wb3NpdGlvbi55ID49IDUwMCkge1xyXG4gICAgLy8gICAgICAgLy8gc2NhbGUgZm9yY2UgZm9yIG1hc3MgYW5kIHRpbWUgYXBwbGllZFxyXG4gICAgLy8gICAgICAgY29uc3QgZm9yY2VNYWduaXR1ZGUgPSAwLjA1ICogYm9keS5tYXNzICogdGltZVNjYWxlO1xyXG5cclxuICAgIC8vICAgICAgIC8vIGFwcGx5IHRoZSBmb3JjZSBvdmVyIGEgc2luZ2xlIHVwZGF0ZVxyXG4gICAgLy8gICAgICAgQm9keS5hcHBseUZvcmNlKGJvZHksIGJvZHkucG9zaXRpb24sIHtcclxuICAgIC8vICAgICAgICAgeDpcclxuICAgIC8vICAgICAgICAgICAoZm9yY2VNYWduaXR1ZGUgKyBDb21tb24ucmFuZG9tKCkgKiBmb3JjZU1hZ25pdHVkZSkgKlxyXG4gICAgLy8gICAgICAgICAgIENvbW1vbi5jaG9vc2UoWzEsIC0xXSksXHJcbiAgICAvLyAgICAgICAgIHk6IC1mb3JjZU1hZ25pdHVkZSArIENvbW1vbi5yYW5kb20oKSAqIC1mb3JjZU1hZ25pdHVkZSxcclxuICAgIC8vICAgICAgIH0pO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgfVxyXG4gICAgLy8gfTtcclxuXHJcbiAgICAvLyBsZXQgdGltZVNjYWxlVGFyZ2V0ID0gMTtcclxuICAgIC8vIGxldCBsYXN0VGltZSA9IENvbW1vbi5ub3coKTtcclxuXHJcbiAgICAvLyBFdmVudHMub24oZW5naW5lLCBcImFmdGVyVXBkYXRlXCIsIChldmVudCkgPT4ge1xyXG4gICAgLy8gICBjb25zdCB0aW1lU2NhbGUgPSAoZXZlbnQuZGVsdGEgfHwgMTAwMCAvIDYwKSAvIDEwMDA7XHJcblxyXG4gICAgLy8gICAvLyB0d2VlbiB0aGUgdGltZXNjYWxlIGZvciBidWxsZXQgdGltZSBzbG93LW1vXHJcbiAgICAvLyAgIGVuZ2luZS50aW1pbmcudGltZVNjYWxlICs9XHJcbiAgICAvLyAgICAgKHRpbWVTY2FsZVRhcmdldCAtIGVuZ2luZS50aW1pbmcudGltZVNjYWxlKSAqIDEyICogdGltZVNjYWxlO1xyXG5cclxuICAgIC8vICAgLy8gZXZlcnkgMiBzZWMgKHJlYWwgdGltZSlcclxuICAgIC8vICAgaWYgKENvbW1vbi5ub3coKSAtIGxhc3RUaW1lID49IDIwMDApIHtcclxuICAgIC8vICAgICAvLyBmbGlwIHRoZSB0aW1lc2NhbGVcclxuICAgIC8vICAgICBpZiAodGltZVNjYWxlVGFyZ2V0IDwgMSkge1xyXG4gICAgLy8gICAgICAgdGltZVNjYWxlVGFyZ2V0ID0gMTtcclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgdGltZVNjYWxlVGFyZ2V0ID0gMDtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIC8vIGNyZWF0ZSBzb21lIHJhbmRvbSBmb3JjZXNcclxuICAgIC8vICAgICBleHBsb3Npb24oZW5naW5lLCBldmVudC5kZWx0YSk7XHJcblxyXG4gICAgLy8gICAgIC8vIHVwZGF0ZSBsYXN0IHRpbWVcclxuICAgIC8vICAgICBsYXN0VGltZSA9IENvbW1vbi5ub3coKTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgaWYgKG1hdHRlckNvbnRhaW5lclJlZikge1xyXG4gICAgICBtYXR0ZXJDb250YWluZXJSZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbWF0dGVyQ29udGFpbmVyUmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBDb21wb3NpdGUucmVtb3ZlKGVuZ2luZS53b3JsZCwgaG9sZGluZ1RocmVhZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgICBSZW5kZXIuc3RvcChyZW5kZXIpO1xyXG4gICAgICBSdW5uZXIuc3RvcChydW5uZXIpO1xyXG4gICAgfTtcclxuICB9LCBbbWF0dGVyQ29udGFpbmVyUmVmXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHJlZj17bWF0dGVyQ29udGFpbmVyUmVmfVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgIH19XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYW52YXNTZWNvbmRhcnk7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsIk1hdHRlciIsIkJvZHkiLCJDb21tb24iLCJDb21wb3NpdGVzIiwiQ29uc3RyYWludCIsIkV2ZW50cyIsIk1vdXNlIiwiTW91c2VDb25zdHJhaW50IiwiVmVjdG9yIiwiV29ybGQiLCJDYW52YXNTZWNvbmRhcnkiLCJkaWRTbWFzaCIsIm1hdHRlckNvbnRhaW5lclJlZiIsIlRISUNDTkVTUyIsIm1hdHRlckNvbnRhaW5lciIsImN1cnJlbnQiLCJFbmdpbmUiLCJSZW5kZXIiLCJSdW5uZXIiLCJCb2RpZXMiLCJDb21wb3NpdGUiLCJlbmdpbmUiLCJjcmVhdGUiLCJyZW5kZXIiLCJlbGVtZW50Iiwib3B0aW9ucyIsIndpZHRoIiwiY2xpZW50V2lkdGgiLCJoZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJiYWNrZ3JvdW5kIiwid2lyZWZyYW1lcyIsInNob3dBbmdsZUluZGljYXRvciIsInN0YWNrIiwieCIsInkiLCJyZWN0YW5nbGUiLCJncm91bmQiLCJpc1N0YXRpYyIsImxlZnRXYWxsIiwicmlnaHRXYWxsIiwiYWRkIiwid29ybGQiLCJtb3VzZSIsImNhbnZhcyIsIm1vdXNlQ29uc3RyYWludCIsImNvbnN0cmFpbnQiLCJzdGlmZm5lc3MiLCJ2aXNpYmxlIiwiYmFsbCIsImNpcmNsZSIsImRlbnNpdHkiLCJmcmljdGlvbkFpciIsInBvaW50QSIsImJvZHlCIiwiaG9sZGluZ1RocmVhZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtb3VzZXdoZWVsIiwicnVuIiwicnVubmVyIiwiaGFuZGxlUmVzaXplIiwic2V0UG9zaXRpb24iLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsInJlbW92ZSIsIndpbmRvdyIsInN0b3AiLCJkaXYiLCJyZWYiLCJzdHlsZSIsImN1cnNvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CanvasSecondary/CanvasSecondary.jsx\n"));

/***/ })

});