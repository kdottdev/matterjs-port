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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! matter-js */ \"./node_modules/matter-js/build/matter.js\");\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst CanvasSecondary = ()=>{\n    _s();\n    const matterContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const THICCNESS = 60;\n    const smashRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const overlayRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const matterContainer = matterContainerRef.current;\n        // module aliases\n        var Engine = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Engine), Render = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Render), Runner = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Runner), Bodies = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Bodies), Composite = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Composite);\n        // create an engine\n        var engine = Engine.create();\n        // create a renderer\n        var render = Render.create({\n            element: matterContainer,\n            engine: engine,\n            options: {\n                width: matterContainer.clientWidth,\n                height: matterContainer.clientHeight,\n                background: \"#131314\",\n                wireframes: false,\n                showAngleIndicator: false\n            }\n        });\n        var firstStack = matter_js__WEBPACK_IMPORTED_MODULE_2__.Composites.stack(matterContainer.clientWidth / 2, matterContainer.clientHeight / 2, 5, 15, 15, 0, function(x, y) {\n            return Bodies.rectangle(x, y, 40, 40, {\n                render: {\n                    strokeStyle: matter_js__WEBPACK_IMPORTED_MODULE_2__.Common.choose([\n                        \"#00ff7f\",\n                        \"#9333ea\",\n                        \"#ffc400\"\n                    ]),\n                    fillStyle: \"transparent\",\n                    lineWidth: 5,\n                    chamfer: 5\n                }\n            });\n        });\n        var ground = Bodies.rectangle(matterContainer.clientWidth / 2, matterContainer.clientHeight + THICCNESS / 2, 27184, THICCNESS, {\n            isStatic: true\n        });\n        let leftWall = Bodies.rectangle(0 - THICCNESS / 2, matterContainer.clientHeight / 2, THICCNESS, matterContainer.clientHeight * 5, {\n            isStatic: true\n        });\n        let rightWall = Bodies.rectangle(matterContainer.clientWidth + THICCNESS / 2, matterContainer.clientHeight / 2, THICCNESS, matterContainer.clientHeight * 5, {\n            isStatic: true\n        });\n        // add all of the bodies to the world\n        Composite.add(engine.world, [\n            ground,\n            leftWall,\n            rightWall,\n            firstStack\n        ]);\n        var mouse = matter_js__WEBPACK_IMPORTED_MODULE_2__.Mouse.create(render.canvas), mouseConstraint = matter_js__WEBPACK_IMPORTED_MODULE_2__.MouseConstraint.create(engine, {\n            mouse: mouse,\n            constraint: {\n                stiffness: 0.2,\n                render: {\n                    visible: false\n                }\n            }\n        });\n        Composite.add(engine.world, mouseConstraint);\n        var ball = Bodies.circle(matterContainer.clientWidth / 8, matterContainer.clientHeight / 3, 50, {\n            density: 0.05,\n            frictionAir: 0.005,\n            render: {\n                strokeStyle: \"#00e5ff\",\n                fillStyle: \"transparent\",\n                lineWidth: 5\n            }\n        });\n        Composite.add(engine.world, ball);\n        Composite.add(engine.world, matter_js__WEBPACK_IMPORTED_MODULE_2__.Constraint.create({\n            pointA: {\n                x: matterContainer.clientWidth / 2.5,\n                y: matterContainer.clientHeight / 4\n            },\n            bodyB: ball\n        }));\n        var holdingThread = matter_js__WEBPACK_IMPORTED_MODULE_2__.Constraint.create({\n            pointA: {\n                x: 300,\n                y: 100\n            },\n            bodyB: ball\n        });\n        Composite.add(engine.world, holdingThread);\n        // allow scroll through the canvas\n        mouseConstraint.mouse.element.removeEventListener(\"mousewheel\", mouseConstraint.mouse.mousewheel);\n        mouseConstraint.mouse.element.removeEventListener(\"DOMMouseScroll\", mouseConstraint.mouse.mousewheel);\n        // run the renderer\n        Render.run(render);\n        // create runner\n        var runner = Runner.create();\n        // run the engine\n        Runner.run(runner, engine);\n        function handleResize() {\n            // set canvas size to new values\n            render.canvas.width = matterContainer.clientWidth;\n            render.canvas.height = matterContainer.clientHeight;\n            // reposition ground\n            matter_js__WEBPACK_IMPORTED_MODULE_2__.Body.setPosition(ground, matter_js__WEBPACK_IMPORTED_MODULE_2__.Vector.create(matterContainer.clientWidth / 2, matterContainer.clientHeight + THICCNESS / 2));\n            // reposition right wall\n            matter_js__WEBPACK_IMPORTED_MODULE_2__.Body.setPosition(rightWall, matter_js__WEBPACK_IMPORTED_MODULE_2__.Vector.create(matterContainer.clientWidth + THICCNESS / 2, matterContainer.clientHeight / 2));\n            matter_js__WEBPACK_IMPORTED_MODULE_2__.Body.setPosition(ball, matter_js__WEBPACK_IMPORTED_MODULE_2__.Vector.create(matterContainer.clientWidth / 8, matterContainer.clientHeight / 3));\n        }\n        smashRef.current.addEventListener(\"click\", ()=>{\n            Composite.remove(engine.world, holdingThread);\n            overlayRef.current.style.opacity = 0;\n            overlayRef.current.style.display = \"none\";\n            smashRef.current.style.opacity = 0;\n        });\n        // const explosion = (engine, delta) => {\n        //   const timeScale = 1000 / 60 / delta;\n        //   const bodies = Composite.allBodies(engine.world);\n        //   for (let i = 0; i < bodies.length; i++) {\n        //     const body = bodies[i];\n        //     if (!body.isStatic && body.position.y >= 500) {\n        //       // scale force for mass and time applied\n        //       const forceMagnitude = 0.05 * body.mass * timeScale;\n        //       // apply the force over a single update\n        //       Body.applyForce(body, body.position, {\n        //         x:\n        //           (forceMagnitude + Common.random() * forceMagnitude) *\n        //           Common.choose([1, -1]),\n        //         y: -forceMagnitude + Common.random() * -forceMagnitude,\n        //       });\n        //     }\n        //   }\n        // };\n        // let timeScaleTarget = 1;\n        // let lastTime = Common.now();\n        // Events.on(engine, \"afterUpdate\", (event) => {\n        //   const timeScale = (event.delta || 1000 / 60) / 1000;\n        //   // tween the timescale for bullet time slow-mo\n        //   engine.timing.timeScale +=\n        //     (timeScaleTarget - engine.timing.timeScale) * 12 * timeScale;\n        //   // every 2 sec (real time)\n        //   if (Common.now() - lastTime >= 2000) {\n        //     // flip the timescale\n        //     if (timeScaleTarget < 1) {\n        //       timeScaleTarget = 1;\n        //     } else {\n        //       timeScaleTarget = 0;\n        //     }\n        //     // create some random forces\n        //     explosion(engine, event.delta);\n        //     // update last time\n        //     lastTime = Common.now();\n        //   }\n        // });\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n            Render.stop(render);\n            Runner.stop(runner);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: matterContainerRef,\n        style: {\n            width: \"100%\",\n            height: \"100%\",\n            position: \"relative\",\n            pointerEvents: \"none\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                position: \"absolute\",\n                pointerEvents: \"initial\",\n                height: \"100%\",\n                width: \"100%\",\n                top: \"50%\",\n                left: \"50%\",\n                transform: \"translate(-50%, -50%)\",\n                display: \"flex\",\n                justifyContent: \"center\",\n                alignItems: \"center\",\n                background: \"rgba(0, 0, 0, 0.5)\",\n                boxShadow: \"0 0 0 100vw rgba(0, 0, 0, 0.2) inset\",\n                backdropFilter: \"blur(10px) brightness(150%) saturate(120%)\",\n                WebkitBackdropFilter: \"blur(10px) brightness(150%) saturate(120%)\"\n            },\n            ref: overlayRef,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                ref: smashRef,\n                className: \"smash_button\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: \"Smash!\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Kartik jha\\\\Desktop\\\\Final-Port-Mk1\\\\components\\\\CanvasSecondary\\\\CanvasSecondary.jsx\",\n                    lineNumber: 293,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Kartik jha\\\\Desktop\\\\Final-Port-Mk1\\\\components\\\\CanvasSecondary\\\\CanvasSecondary.jsx\",\n                lineNumber: 292,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Kartik jha\\\\Desktop\\\\Final-Port-Mk1\\\\components\\\\CanvasSecondary\\\\CanvasSecondary.jsx\",\n            lineNumber: 273,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Kartik jha\\\\Desktop\\\\Final-Port-Mk1\\\\components\\\\CanvasSecondary\\\\CanvasSecondary.jsx\",\n        lineNumber: 264,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CanvasSecondary, \"UgLcn/YohOOeI5zNYX2hX73xb/w=\");\n_c = CanvasSecondary;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CanvasSecondary);\nvar _c;\n$RefreshReg$(_c, \"CanvasSecondary\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhbnZhc1NlY29uZGFyeS9DYW52YXNTZWNvbmRhcnkuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyRDtBQVd4QztBQUVuQixNQUFNYyxrQkFBa0IsSUFBTTs7SUFDNUIsTUFBTUMscUJBQXFCYiw2Q0FBTUEsQ0FBQyxJQUFJO0lBQ3RDLE1BQU1jLFlBQVk7SUFDbEIsTUFBTUMsV0FBV2YsNkNBQU1BLENBQUMsSUFBSTtJQUM1QixNQUFNZ0IsYUFBYWhCLDZDQUFNQSxDQUFDLElBQUk7SUFFOUJELGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNa0Isa0JBQWtCSixtQkFBbUJLLE9BQU87UUFFbEQsaUJBQWlCO1FBQ2pCLElBQUlDLFNBQVNqQix5REFBYSxFQUN4QmtCLFNBQVNsQix5REFBYSxFQUN0Qm1CLFNBQVNuQix5REFBYSxFQUN0Qm9CLFNBQVNwQix5REFBYSxFQUN0QnFCLFlBQVlyQiw0REFBZ0I7UUFFOUIsbUJBQW1CO1FBQ25CLElBQUlzQixTQUFTTCxPQUFPTSxNQUFNO1FBRTFCLG9CQUFvQjtRQUNwQixJQUFJQyxTQUFTTixPQUFPSyxNQUFNLENBQUM7WUFDekJFLFNBQVNWO1lBQ1RPLFFBQVFBO1lBQ1JJLFNBQVM7Z0JBQ1BDLE9BQU9aLGdCQUFnQmEsV0FBVztnQkFDbENDLFFBQVFkLGdCQUFnQmUsWUFBWTtnQkFDcENDLFlBQVk7Z0JBQ1pDLFlBQVksS0FBSztnQkFDakJDLG9CQUFvQixLQUFLO1lBQzNCO1FBQ0Y7UUFFQSxJQUFJQyxhQUFhL0IsdURBQWdCLENBQy9CWSxnQkFBZ0JhLFdBQVcsR0FBRyxHQUM5QmIsZ0JBQWdCZSxZQUFZLEdBQUcsR0FDL0IsR0FDQSxJQUNBLElBQ0EsR0FDQSxTQUFVTSxDQUFDLEVBQUVDLENBQUMsRUFBRTtZQUNkLE9BQU9qQixPQUFPa0IsU0FBUyxDQUFDRixHQUFHQyxHQUFHLElBQUksSUFBSTtnQkFDcENiLFFBQVE7b0JBQ05lLGFBQWFyQyxvREFBYSxDQUFDO3dCQUFD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RXRDLDBCQUEwQjtRQUMxQiwrQkFBK0I7UUFDL0IsTUFBTTtRQUNOLE1BQU07UUFFTkUsT0FBT0wsZ0JBQWdCLENBQUMsVUFBVUY7UUFFbEMsT0FBTyxJQUFNO1lBQ1hPLE9BQU9YLG1CQUFtQixDQUFDLFVBQVVJO1lBQ3JDakQsT0FBT3lELElBQUksQ0FBQ25EO1lBQ1pMLE9BQU93RCxJQUFJLENBQUNUO1FBQ2Q7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1U7UUFDQ0MsS0FBS2xFO1FBQ0w0RCxPQUFPO1lBQ0w1QyxPQUFPO1lBQ1BFLFFBQVE7WUFDUmlELFVBQVU7WUFDVkMsZUFBZTtRQUNqQjtrQkFFQSw0RUFBQ0g7WUFDQ0wsT0FBTztnQkFDTE8sVUFBVTtnQkFDVkMsZUFBZTtnQkFDZmxELFFBQVE7Z0JBQ1JGLE9BQU87Z0JBQ1BxRCxLQUFLO2dCQUNMQyxNQUFNO2dCQUNOQyxXQUFXO2dCQUNYVCxTQUFTO2dCQUNUVSxnQkFBZ0I7Z0JBQ2hCQyxZQUFZO2dCQUNackQsWUFBWTtnQkFDWnNELFdBQVc7Z0JBQ1hDLGdCQUFnQjtnQkFDaEJDLHNCQUFzQjtZQUN4QjtZQUNBVixLQUFLL0Q7c0JBRUwsNEVBQUMwRTtnQkFBT1gsS0FBS2hFO2dCQUFVNEUsV0FBVTswQkFDL0IsNEVBQUNDOzhCQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEI7R0E1Uk1oRjtLQUFBQTtBQThSTiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NhbnZhc1NlY29uZGFyeS9DYW52YXNTZWNvbmRhcnkuanN4PzVkMWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTWF0dGVyLCB7XHJcbiAgQm9keSxcclxuICBDb21tb24sXHJcbiAgQ29tcG9zaXRlcyxcclxuICBDb25zdHJhaW50LFxyXG4gIEV2ZW50cyxcclxuICBNb3VzZSxcclxuICBNb3VzZUNvbnN0cmFpbnQsXHJcbiAgVmVjdG9yLFxyXG4gIFdvcmxkLFxyXG59IGZyb20gXCJtYXR0ZXItanNcIjtcclxuXHJcbmNvbnN0IENhbnZhc1NlY29uZGFyeSA9ICgpID0+IHtcclxuICBjb25zdCBtYXR0ZXJDb250YWluZXJSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgVEhJQ0NORVNTID0gNjA7XHJcbiAgY29uc3Qgc21hc2hSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3Qgb3ZlcmxheVJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG1hdHRlckNvbnRhaW5lciA9IG1hdHRlckNvbnRhaW5lclJlZi5jdXJyZW50O1xyXG5cclxuICAgIC8vIG1vZHVsZSBhbGlhc2VzXHJcbiAgICB2YXIgRW5naW5lID0gTWF0dGVyLkVuZ2luZSxcclxuICAgICAgUmVuZGVyID0gTWF0dGVyLlJlbmRlcixcclxuICAgICAgUnVubmVyID0gTWF0dGVyLlJ1bm5lcixcclxuICAgICAgQm9kaWVzID0gTWF0dGVyLkJvZGllcyxcclxuICAgICAgQ29tcG9zaXRlID0gTWF0dGVyLkNvbXBvc2l0ZTtcclxuXHJcbiAgICAvLyBjcmVhdGUgYW4gZW5naW5lXHJcbiAgICB2YXIgZW5naW5lID0gRW5naW5lLmNyZWF0ZSgpO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBhIHJlbmRlcmVyXHJcbiAgICB2YXIgcmVuZGVyID0gUmVuZGVyLmNyZWF0ZSh7XHJcbiAgICAgIGVsZW1lbnQ6IG1hdHRlckNvbnRhaW5lcixcclxuICAgICAgZW5naW5lOiBlbmdpbmUsXHJcbiAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICB3aWR0aDogbWF0dGVyQ29udGFpbmVyLmNsaWVudFdpZHRoLFxyXG4gICAgICAgIGhlaWdodDogbWF0dGVyQ29udGFpbmVyLmNsaWVudEhlaWdodCxcclxuICAgICAgICBiYWNrZ3JvdW5kOiBcIiMxMzEzMTRcIixcclxuICAgICAgICB3aXJlZnJhbWVzOiBmYWxzZSxcclxuICAgICAgICBzaG93QW5nbGVJbmRpY2F0b3I6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIGZpcnN0U3RhY2sgPSBDb21wb3NpdGVzLnN0YWNrKFxyXG4gICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50V2lkdGggLyAyLFxyXG4gICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0IC8gMixcclxuICAgICAgNSxcclxuICAgICAgMTUsXHJcbiAgICAgIDE1LFxyXG4gICAgICAwLFxyXG4gICAgICBmdW5jdGlvbiAoeCwgeSkge1xyXG4gICAgICAgIHJldHVybiBCb2RpZXMucmVjdGFuZ2xlKHgsIHksIDQwLCA0MCwge1xyXG4gICAgICAgICAgcmVuZGVyOiB7XHJcbiAgICAgICAgICAgIHN0cm9rZVN0eWxlOiBDb21tb24uY2hvb3NlKFtcIiMwMGZmN2ZcIiwgXCIjOTMzM2VhXCIsIFwiI2ZmYzQwMFwiXSksXHJcbiAgICAgICAgICAgIGZpbGxTdHlsZTogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgICAgICBsaW5lV2lkdGg6IDUsXHJcbiAgICAgICAgICAgIGNoYW1mZXI6IDUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHZhciBncm91bmQgPSBCb2RpZXMucmVjdGFuZ2xlKFxyXG4gICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50V2lkdGggLyAyLFxyXG4gICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0ICsgVEhJQ0NORVNTIC8gMixcclxuICAgICAgMjcxODQsXHJcbiAgICAgIFRISUNDTkVTUyxcclxuICAgICAgeyBpc1N0YXRpYzogdHJ1ZSB9XHJcbiAgICApO1xyXG5cclxuICAgIGxldCBsZWZ0V2FsbCA9IEJvZGllcy5yZWN0YW5nbGUoXHJcbiAgICAgIDAgLSBUSElDQ05FU1MgLyAyLFxyXG4gICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0IC8gMixcclxuICAgICAgVEhJQ0NORVNTLFxyXG4gICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0ICogNSxcclxuICAgICAge1xyXG4gICAgICAgIGlzU3RhdGljOiB0cnVlLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGxldCByaWdodFdhbGwgPSBCb2RpZXMucmVjdGFuZ2xlKFxyXG4gICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50V2lkdGggKyBUSElDQ05FU1MgLyAyLFxyXG4gICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0IC8gMixcclxuICAgICAgVEhJQ0NORVNTLFxyXG4gICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0ICogNSxcclxuICAgICAgeyBpc1N0YXRpYzogdHJ1ZSB9XHJcbiAgICApO1xyXG5cclxuICAgIC8vIGFkZCBhbGwgb2YgdGhlIGJvZGllcyB0byB0aGUgd29ybGRcclxuICAgIENvbXBvc2l0ZS5hZGQoZW5naW5lLndvcmxkLCBbZ3JvdW5kLCBsZWZ0V2FsbCwgcmlnaHRXYWxsLCBmaXJzdFN0YWNrXSk7XHJcblxyXG4gICAgdmFyIG1vdXNlID0gTW91c2UuY3JlYXRlKHJlbmRlci5jYW52YXMpLFxyXG4gICAgICBtb3VzZUNvbnN0cmFpbnQgPSBNb3VzZUNvbnN0cmFpbnQuY3JlYXRlKGVuZ2luZSwge1xyXG4gICAgICAgIG1vdXNlOiBtb3VzZSxcclxuICAgICAgICBjb25zdHJhaW50OiB7XHJcbiAgICAgICAgICBzdGlmZm5lc3M6IDAuMixcclxuICAgICAgICAgIHJlbmRlcjoge1xyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgQ29tcG9zaXRlLmFkZChlbmdpbmUud29ybGQsIG1vdXNlQ29uc3RyYWludCk7XHJcblxyXG4gICAgdmFyIGJhbGwgPSBCb2RpZXMuY2lyY2xlKFxyXG4gICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50V2lkdGggLyA4LFxyXG4gICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0IC8gMyxcclxuICAgICAgNTAsXHJcbiAgICAgIHtcclxuICAgICAgICBkZW5zaXR5OiAwLjA1LFxyXG4gICAgICAgIGZyaWN0aW9uQWlyOiAwLjAwNSxcclxuICAgICAgICByZW5kZXI6IHtcclxuICAgICAgICAgIHN0cm9rZVN0eWxlOiBcIiMwMGU1ZmZcIixcclxuICAgICAgICAgIGZpbGxTdHlsZTogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgICAgbGluZVdpZHRoOiA1LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgQ29tcG9zaXRlLmFkZChlbmdpbmUud29ybGQsIGJhbGwpO1xyXG5cclxuICAgIENvbXBvc2l0ZS5hZGQoXHJcbiAgICAgIGVuZ2luZS53b3JsZCxcclxuICAgICAgQ29uc3RyYWludC5jcmVhdGUoe1xyXG4gICAgICAgIHBvaW50QToge1xyXG4gICAgICAgICAgeDogbWF0dGVyQ29udGFpbmVyLmNsaWVudFdpZHRoIC8gMi41LFxyXG4gICAgICAgICAgeTogbWF0dGVyQ29udGFpbmVyLmNsaWVudEhlaWdodCAvIDQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5QjogYmFsbCxcclxuICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gICAgdmFyIGhvbGRpbmdUaHJlYWQgPSBDb25zdHJhaW50LmNyZWF0ZSh7XHJcbiAgICAgIHBvaW50QToge1xyXG4gICAgICAgIHg6IDMwMCxcclxuICAgICAgICB5OiAxMDAsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHlCOiBiYWxsLFxyXG4gICAgfSk7XHJcblxyXG4gICAgQ29tcG9zaXRlLmFkZChlbmdpbmUud29ybGQsIGhvbGRpbmdUaHJlYWQpO1xyXG5cclxuICAgIC8vIGFsbG93IHNjcm9sbCB0aHJvdWdoIHRoZSBjYW52YXNcclxuICAgIG1vdXNlQ29uc3RyYWludC5tb3VzZS5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIFwibW91c2V3aGVlbFwiLFxyXG4gICAgICBtb3VzZUNvbnN0cmFpbnQubW91c2UubW91c2V3aGVlbFxyXG4gICAgKTtcclxuICAgIG1vdXNlQ29uc3RyYWludC5tb3VzZS5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIFwiRE9NTW91c2VTY3JvbGxcIixcclxuICAgICAgbW91c2VDb25zdHJhaW50Lm1vdXNlLm1vdXNld2hlZWxcclxuICAgICk7XHJcblxyXG4gICAgLy8gcnVuIHRoZSByZW5kZXJlclxyXG4gICAgUmVuZGVyLnJ1bihyZW5kZXIpO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBydW5uZXJcclxuICAgIHZhciBydW5uZXIgPSBSdW5uZXIuY3JlYXRlKCk7XHJcblxyXG4gICAgLy8gcnVuIHRoZSBlbmdpbmVcclxuICAgIFJ1bm5lci5ydW4ocnVubmVyLCBlbmdpbmUpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcclxuICAgICAgLy8gc2V0IGNhbnZhcyBzaXplIHRvIG5ldyB2YWx1ZXNcclxuICAgICAgcmVuZGVyLmNhbnZhcy53aWR0aCA9IG1hdHRlckNvbnRhaW5lci5jbGllbnRXaWR0aDtcclxuICAgICAgcmVuZGVyLmNhbnZhcy5oZWlnaHQgPSBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgICAgLy8gcmVwb3NpdGlvbiBncm91bmRcclxuICAgICAgQm9keS5zZXRQb3NpdGlvbihcclxuICAgICAgICBncm91bmQsXHJcbiAgICAgICAgVmVjdG9yLmNyZWF0ZShcclxuICAgICAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRXaWR0aCAvIDIsXHJcbiAgICAgICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0ICsgVEhJQ0NORVNTIC8gMlxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vIHJlcG9zaXRpb24gcmlnaHQgd2FsbFxyXG4gICAgICBCb2R5LnNldFBvc2l0aW9uKFxyXG4gICAgICAgIHJpZ2h0V2FsbCxcclxuICAgICAgICBWZWN0b3IuY3JlYXRlKFxyXG4gICAgICAgICAgbWF0dGVyQ29udGFpbmVyLmNsaWVudFdpZHRoICsgVEhJQ0NORVNTIC8gMixcclxuICAgICAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRIZWlnaHQgLyAyXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgQm9keS5zZXRQb3NpdGlvbihcclxuICAgICAgICBiYWxsLFxyXG4gICAgICAgIFZlY3Rvci5jcmVhdGUoXHJcbiAgICAgICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50V2lkdGggLyA4LFxyXG4gICAgICAgICAgbWF0dGVyQ29udGFpbmVyLmNsaWVudEhlaWdodCAvIDNcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc21hc2hSZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBDb21wb3NpdGUucmVtb3ZlKGVuZ2luZS53b3JsZCwgaG9sZGluZ1RocmVhZCk7XHJcblxyXG4gICAgICBvdmVybGF5UmVmLmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAgIG92ZXJsYXlSZWYuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblxyXG4gICAgICBzbWFzaFJlZi5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY29uc3QgZXhwbG9zaW9uID0gKGVuZ2luZSwgZGVsdGEpID0+IHtcclxuICAgIC8vICAgY29uc3QgdGltZVNjYWxlID0gMTAwMCAvIDYwIC8gZGVsdGE7XHJcbiAgICAvLyAgIGNvbnN0IGJvZGllcyA9IENvbXBvc2l0ZS5hbGxCb2RpZXMoZW5naW5lLndvcmxkKTtcclxuXHJcbiAgICAvLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgY29uc3QgYm9keSA9IGJvZGllc1tpXTtcclxuXHJcbiAgICAvLyAgICAgaWYgKCFib2R5LmlzU3RhdGljICYmIGJvZHkucG9zaXRpb24ueSA+PSA1MDApIHtcclxuICAgIC8vICAgICAgIC8vIHNjYWxlIGZvcmNlIGZvciBtYXNzIGFuZCB0aW1lIGFwcGxpZWRcclxuICAgIC8vICAgICAgIGNvbnN0IGZvcmNlTWFnbml0dWRlID0gMC4wNSAqIGJvZHkubWFzcyAqIHRpbWVTY2FsZTtcclxuXHJcbiAgICAvLyAgICAgICAvLyBhcHBseSB0aGUgZm9yY2Ugb3ZlciBhIHNpbmdsZSB1cGRhdGVcclxuICAgIC8vICAgICAgIEJvZHkuYXBwbHlGb3JjZShib2R5LCBib2R5LnBvc2l0aW9uLCB7XHJcbiAgICAvLyAgICAgICAgIHg6XHJcbiAgICAvLyAgICAgICAgICAgKGZvcmNlTWFnbml0dWRlICsgQ29tbW9uLnJhbmRvbSgpICogZm9yY2VNYWduaXR1ZGUpICpcclxuICAgIC8vICAgICAgICAgICBDb21tb24uY2hvb3NlKFsxLCAtMV0pLFxyXG4gICAgLy8gICAgICAgICB5OiAtZm9yY2VNYWduaXR1ZGUgKyBDb21tb24ucmFuZG9tKCkgKiAtZm9yY2VNYWduaXR1ZGUsXHJcbiAgICAvLyAgICAgICB9KTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH07XHJcblxyXG4gICAgLy8gbGV0IHRpbWVTY2FsZVRhcmdldCA9IDE7XHJcbiAgICAvLyBsZXQgbGFzdFRpbWUgPSBDb21tb24ubm93KCk7XHJcblxyXG4gICAgLy8gRXZlbnRzLm9uKGVuZ2luZSwgXCJhZnRlclVwZGF0ZVwiLCAoZXZlbnQpID0+IHtcclxuICAgIC8vICAgY29uc3QgdGltZVNjYWxlID0gKGV2ZW50LmRlbHRhIHx8IDEwMDAgLyA2MCkgLyAxMDAwO1xyXG5cclxuICAgIC8vICAgLy8gdHdlZW4gdGhlIHRpbWVzY2FsZSBmb3IgYnVsbGV0IHRpbWUgc2xvdy1tb1xyXG4gICAgLy8gICBlbmdpbmUudGltaW5nLnRpbWVTY2FsZSArPVxyXG4gICAgLy8gICAgICh0aW1lU2NhbGVUYXJnZXQgLSBlbmdpbmUudGltaW5nLnRpbWVTY2FsZSkgKiAxMiAqIHRpbWVTY2FsZTtcclxuXHJcbiAgICAvLyAgIC8vIGV2ZXJ5IDIgc2VjIChyZWFsIHRpbWUpXHJcbiAgICAvLyAgIGlmIChDb21tb24ubm93KCkgLSBsYXN0VGltZSA+PSAyMDAwKSB7XHJcbiAgICAvLyAgICAgLy8gZmxpcCB0aGUgdGltZXNjYWxlXHJcbiAgICAvLyAgICAgaWYgKHRpbWVTY2FsZVRhcmdldCA8IDEpIHtcclxuICAgIC8vICAgICAgIHRpbWVTY2FsZVRhcmdldCA9IDE7XHJcbiAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgIHRpbWVTY2FsZVRhcmdldCA9IDA7XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICAvLyBjcmVhdGUgc29tZSByYW5kb20gZm9yY2VzXHJcbiAgICAvLyAgICAgZXhwbG9zaW9uKGVuZ2luZSwgZXZlbnQuZGVsdGEpO1xyXG5cclxuICAgIC8vICAgICAvLyB1cGRhdGUgbGFzdCB0aW1lXHJcbiAgICAvLyAgICAgbGFzdFRpbWUgPSBDb21tb24ubm93KCk7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0pO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuICAgICAgUmVuZGVyLnN0b3AocmVuZGVyKTtcclxuICAgICAgUnVubmVyLnN0b3AocnVubmVyKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICByZWY9e21hdHRlckNvbnRhaW5lclJlZn1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICBwb2ludGVyRXZlbnRzOiBcImluaXRpYWxcIixcclxuICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICB0b3A6IFwiNTAlXCIsXHJcbiAgICAgICAgICBsZWZ0OiBcIjUwJVwiLFxyXG4gICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwiLFxyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMCwgMCwgMCwgMC41KVwiLFxyXG4gICAgICAgICAgYm94U2hhZG93OiBcIjAgMCAwIDEwMHZ3IHJnYmEoMCwgMCwgMCwgMC4yKSBpbnNldFwiLFxyXG4gICAgICAgICAgYmFja2Ryb3BGaWx0ZXI6IFwiYmx1cigxMHB4KSBicmlnaHRuZXNzKDE1MCUpIHNhdHVyYXRlKDEyMCUpXCIsXHJcbiAgICAgICAgICBXZWJraXRCYWNrZHJvcEZpbHRlcjogXCJibHVyKDEwcHgpIGJyaWdodG5lc3MoMTUwJSkgc2F0dXJhdGUoMTIwJSlcIixcclxuICAgICAgICB9fVxyXG4gICAgICAgIHJlZj17b3ZlcmxheVJlZn1cclxuICAgICAgPlxyXG4gICAgICAgIDxidXR0b24gcmVmPXtzbWFzaFJlZn0gY2xhc3NOYW1lPVwic21hc2hfYnV0dG9uXCI+XHJcbiAgICAgICAgICA8c3Bhbj5TbWFzaCE8L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbnZhc1NlY29uZGFyeTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJNYXR0ZXIiLCJCb2R5IiwiQ29tbW9uIiwiQ29tcG9zaXRlcyIsIkNvbnN0cmFpbnQiLCJFdmVudHMiLCJNb3VzZSIsIk1vdXNlQ29uc3RyYWludCIsIlZlY3RvciIsIldvcmxkIiwiQ2FudmFzU2Vjb25kYXJ5IiwibWF0dGVyQ29udGFpbmVyUmVmIiwiVEhJQ0NORVNTIiwic21hc2hSZWYiLCJvdmVybGF5UmVmIiwibWF0dGVyQ29udGFpbmVyIiwiY3VycmVudCIsIkVuZ2luZSIsIlJlbmRlciIsIlJ1bm5lciIsIkJvZGllcyIsIkNvbXBvc2l0ZSIsImVuZ2luZSIsImNyZWF0ZSIsInJlbmRlciIsImVsZW1lbnQiLCJvcHRpb25zIiwid2lkdGgiLCJjbGllbnRXaWR0aCIsImhlaWdodCIsImNsaWVudEhlaWdodCIsImJhY2tncm91bmQiLCJ3aXJlZnJhbWVzIiwic2hvd0FuZ2xlSW5kaWNhdG9yIiwiZmlyc3RTdGFjayIsInN0YWNrIiwieCIsInkiLCJyZWN0YW5nbGUiLCJzdHJva2VTdHlsZSIsImNob29zZSIsImZpbGxTdHlsZSIsImxpbmVXaWR0aCIsImNoYW1mZXIiLCJncm91bmQiLCJpc1N0YXRpYyIsImxlZnRXYWxsIiwicmlnaHRXYWxsIiwiYWRkIiwid29ybGQiLCJtb3VzZSIsImNhbnZhcyIsIm1vdXNlQ29uc3RyYWludCIsImNvbnN0cmFpbnQiLCJzdGlmZm5lc3MiLCJ2aXNpYmxlIiwiYmFsbCIsImNpcmNsZSIsImRlbnNpdHkiLCJmcmljdGlvbkFpciIsInBvaW50QSIsImJvZHlCIiwiaG9sZGluZ1RocmVhZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtb3VzZXdoZWVsIiwicnVuIiwicnVubmVyIiwiaGFuZGxlUmVzaXplIiwic2V0UG9zaXRpb24iLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwic3R5bGUiLCJvcGFjaXR5IiwiZGlzcGxheSIsIndpbmRvdyIsInN0b3AiLCJkaXYiLCJyZWYiLCJwb3NpdGlvbiIsInBvaW50ZXJFdmVudHMiLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYm94U2hhZG93IiwiYmFja2Ryb3BGaWx0ZXIiLCJXZWJraXRCYWNrZHJvcEZpbHRlciIsImJ1dHRvbiIsImNsYXNzTmFtZSIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CanvasSecondary/CanvasSecondary.jsx\n"));

/***/ })

});