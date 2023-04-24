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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! matter-js */ \"./node_modules/matter-js/build/matter.js\");\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst CanvasSecondary = ()=>{\n    _s();\n    const matterContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const THICCNESS = 60;\n    const smashRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const overlayRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const matterContainer = matterContainerRef.current;\n        // module aliases\n        var Engine = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Engine), Render = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Render), Runner = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Runner), Bodies = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Bodies), Composite = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Composite);\n        // create an engine\n        var engine = Engine.create();\n        // create a renderer\n        var render = Render.create({\n            element: matterContainer,\n            engine: engine,\n            options: {\n                width: matterContainer.clientWidth,\n                height: matterContainer.clientHeight,\n                background: \"#131314\",\n                wireframes: false,\n                showAngleIndicator: false\n            }\n        });\n        // var firstStack = Composites.stack(\n        //   matterContainer.clientWidth / 2,\n        //   matterContainer.clientHeight / 2,\n        //   5,\n        //   15,\n        //   15,\n        //   0,\n        //   function (x, y) {\n        //     return Bodies.rectangle(x, y, 40, 40, {\n        //       render: {\n        //         strokeStyle: Common.choose([\"#00ff7f\", \"#9333ea\", \"#ffc400\"]),\n        //         fillStyle: \"transparent\",\n        //         lineWidth: 5,\n        //         chamfer: {\n        //           radius: [5, 5, 5, 5],\n        //         },\n        //       },\n        //     });\n        //   }\n        // );\n        var firstStack = matter_js__WEBPACK_IMPORTED_MODULE_2__.Composites.stack(matterContainer.clientWidth / 2, matterContainer.clientHeight / 4 - 21 - 20 * 20, 10, 10, 15, 0, function(x, y) {\n            return Bodies.circle(x, y, 20, {\n                render: {\n                    strokeStyle: matter_js__WEBPACK_IMPORTED_MODULE_2__.Common.choose([\n                        \"#00ff7f\",\n                        \"#9333ea\",\n                        \"#ffc400\"\n                    ]),\n                    fillStyle: \"transparent\",\n                    lineWidth: 2\n                }\n            });\n        });\n        var ground = Bodies.rectangle(matterContainer.clientWidth / 2, matterContainer.clientHeight + THICCNESS / 2, 27184, THICCNESS, {\n            isStatic: true\n        });\n        let leftWall = Bodies.rectangle(0 - THICCNESS / 2, matterContainer.clientHeight / 2, THICCNESS, matterContainer.clientHeight * 5, {\n            isStatic: true\n        });\n        let rightWall = Bodies.rectangle(matterContainer.clientWidth + THICCNESS / 2, matterContainer.clientHeight / 2, THICCNESS, matterContainer.clientHeight * 5, {\n            isStatic: true\n        });\n        // add all of the bodies to the world\n        Composite.add(engine.world, [\n            ground,\n            leftWall,\n            rightWall,\n            firstStack\n        ]);\n        var mouse = matter_js__WEBPACK_IMPORTED_MODULE_2__.Mouse.create(render.canvas), mouseConstraint = matter_js__WEBPACK_IMPORTED_MODULE_2__.MouseConstraint.create(engine, {\n            mouse: mouse,\n            constraint: {\n                stiffness: 0.2,\n                render: {\n                    visible: false\n                }\n            }\n        });\n        Composite.add(engine.world, mouseConstraint);\n        var ball = Bodies.circle(matterContainer.clientWidth / 8, matterContainer.clientHeight / 3, 50, {\n            density: 0.05,\n            frictionAir: 0.005,\n            render: {\n                strokeStyle: \"#00e5ff\",\n                fillStyle: \"transparent\",\n                lineWidth: 5\n            }\n        });\n        Composite.add(engine.world, ball);\n        Composite.add(engine.world, matter_js__WEBPACK_IMPORTED_MODULE_2__.Constraint.create({\n            pointA: {\n                x: matterContainer.clientWidth / 2.5,\n                y: matterContainer.clientHeight / 4\n            },\n            bodyB: ball\n        }));\n        var holdingThread = matter_js__WEBPACK_IMPORTED_MODULE_2__.Constraint.create({\n            pointA: {\n                x: 300,\n                y: 100\n            },\n            bodyB: ball\n        });\n        Composite.add(engine.world, holdingThread);\n        // allow scroll through the canvas\n        mouseConstraint.mouse.element.removeEventListener(\"mousewheel\", mouseConstraint.mouse.mousewheel);\n        mouseConstraint.mouse.element.removeEventListener(\"DOMMouseScroll\", mouseConstraint.mouse.mousewheel);\n        // run the renderer\n        Render.run(render);\n        // create runner\n        var runner = Runner.create();\n        // run the engine\n        Runner.run(runner, engine);\n        function handleResize() {\n            // set canvas size to new values\n            render.canvas.width = matterContainer.clientWidth;\n            render.canvas.height = matterContainer.clientHeight;\n            // reposition ground\n            matter_js__WEBPACK_IMPORTED_MODULE_2__.Body.setPosition(ground, matter_js__WEBPACK_IMPORTED_MODULE_2__.Vector.create(matterContainer.clientWidth / 2, matterContainer.clientHeight + THICCNESS / 2));\n            // reposition right wall\n            matter_js__WEBPACK_IMPORTED_MODULE_2__.Body.setPosition(rightWall, matter_js__WEBPACK_IMPORTED_MODULE_2__.Vector.create(matterContainer.clientWidth + THICCNESS / 2, matterContainer.clientHeight / 2));\n            matter_js__WEBPACK_IMPORTED_MODULE_2__.Body.setPosition(ball, matter_js__WEBPACK_IMPORTED_MODULE_2__.Vector.create(matterContainer.clientWidth / 8, matterContainer.clientHeight / 3));\n        }\n        smashRef.current.addEventListener(\"click\", ()=>{\n            Composite.remove(engine.world, holdingThread);\n            overlayRef.current.style.opacity = 0;\n            overlayRef.current.style.display = \"none\";\n            smashRef.current.style.opacity = 0;\n        });\n        // const explosion = (engine, delta) => {\n        //   const timeScale = 1000 / 60 / delta;\n        //   const bodies = Composite.allBodies(engine.world);\n        //   for (let i = 0; i < bodies.length; i++) {\n        //     const body = bodies[i];\n        //     if (!body.isStatic && body.position.y >= 500) {\n        //       // scale force for mass and time applied\n        //       const forceMagnitude = 0.05 * body.mass * timeScale;\n        //       // apply the force over a single update\n        //       Body.applyForce(body, body.position, {\n        //         x:\n        //           (forceMagnitude + Common.random() * forceMagnitude) *\n        //           Common.choose([1, -1]),\n        //         y: -forceMagnitude + Common.random() * -forceMagnitude,\n        //       });\n        //     }\n        //   }\n        // };\n        // let timeScaleTarget = 1;\n        // let lastTime = Common.now();\n        // Events.on(engine, \"afterUpdate\", (event) => {\n        //   const timeScale = (event.delta || 1000 / 60) / 1000;\n        //   // tween the timescale for bullet time slow-mo\n        //   engine.timing.timeScale +=\n        //     (timeScaleTarget - engine.timing.timeScale) * 12 * timeScale;\n        //   // every 2 sec (real time)\n        //   if (Common.now() - lastTime >= 2000) {\n        //     // flip the timescale\n        //     if (timeScaleTarget < 1) {\n        //       timeScaleTarget = 1;\n        //     } else {\n        //       timeScaleTarget = 0;\n        //     }\n        //     // create some random forces\n        //     explosion(engine, event.delta);\n        //     // update last time\n        //     lastTime = Common.now();\n        //   }\n        // });\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n            Render.stop(render);\n            Runner.stop(runner);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: matterContainerRef,\n        style: {\n            width: \"100%\",\n            height: \"100%\",\n            position: \"relative\",\n            pointerEvents: \"none\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                position: \"absolute\",\n                pointerEvents: \"initial\",\n                height: \"100%\",\n                width: \"100%\",\n                top: \"50%\",\n                left: \"50%\",\n                transform: \"translate(-50%, -50%)\",\n                display: \"flex\",\n                justifyContent: \"center\",\n                alignItems: \"center\",\n                background: \"rgba(0, 0, 0, 0.5)\",\n                boxShadow: \"0 0 0 100vw rgba(0, 0, 0, 0.2) inset\",\n                backdropFilter: \"blur(10px) brightness(150%) saturate(120%)\",\n                WebkitBackdropFilter: \"blur(10px) brightness(150%) saturate(120%)\"\n            },\n            ref: overlayRef,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                ref: smashRef,\n                className: \"smash_button\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: \"Smash!\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Kartik jha\\\\Desktop\\\\Final-Port-Mk1\\\\components\\\\CanvasSecondary\\\\CanvasSecondary.jsx\",\n                    lineNumber: 312,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Kartik jha\\\\Desktop\\\\Final-Port-Mk1\\\\components\\\\CanvasSecondary\\\\CanvasSecondary.jsx\",\n                lineNumber: 311,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Kartik jha\\\\Desktop\\\\Final-Port-Mk1\\\\components\\\\CanvasSecondary\\\\CanvasSecondary.jsx\",\n            lineNumber: 292,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Kartik jha\\\\Desktop\\\\Final-Port-Mk1\\\\components\\\\CanvasSecondary\\\\CanvasSecondary.jsx\",\n        lineNumber: 283,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CanvasSecondary, \"UgLcn/YohOOeI5zNYX2hX73xb/w=\");\n_c = CanvasSecondary;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CanvasSecondary);\nvar _c;\n$RefreshReg$(_c, \"CanvasSecondary\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhbnZhc1NlY29uZGFyeS9DYW52YXNTZWNvbmRhcnkuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyRDtBQVd4QztBQUVuQixNQUFNYyxrQkFBa0IsSUFBTTs7SUFDNUIsTUFBTUMscUJBQXFCYiw2Q0FBTUEsQ0FBQyxJQUFJO0lBQ3RDLE1BQU1jLFlBQVk7SUFDbEIsTUFBTUMsV0FBV2YsNkNBQU1BLENBQUMsSUFBSTtJQUM1QixNQUFNZ0IsYUFBYWhCLDZDQUFNQSxDQUFDLElBQUk7SUFFOUJELGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNa0Isa0JBQWtCSixtQkFBbUJLLE9BQU87UUFFbEQsaUJBQWlCO1FBQ2pCLElBQUlDLFNBQVNqQix5REFBYSxFQUN4QmtCLFNBQVNsQix5REFBYSxFQUN0Qm1CLFNBQVNuQix5REFBYSxFQUN0Qm9CLFNBQVNwQix5REFBYSxFQUN0QnFCLFlBQVlyQiw0REFBZ0I7UUFFOUIsbUJBQW1CO1FBQ25CLElBQUlzQixTQUFTTCxPQUFPTSxNQUFNO1FBRTFCLG9CQUFvQjtRQUNwQixJQUFJQyxTQUFTTixPQUFPSyxNQUFNLENBQUM7WUFDekJFLFNBQVNWO1lBQ1RPLFFBQVFBO1lBQ1JJLFNBQVM7Z0JBQ1BDLE9BQU9aLGdCQUFnQmEsV0FBVztnQkFDbENDLFFBQVFkLGdCQUFnQmUsWUFBWTtnQkFDcENDLFlBQVk7Z0JBQ1pDLFlBQVksS0FBSztnQkFDakJDLG9CQUFvQixLQUFLO1lBQzNCO1FBQ0Y7UUFFQSxxQ0FBcUM7UUFDckMscUNBQXFDO1FBQ3JDLHNDQUFzQztRQUN0QyxPQUFPO1FBQ1AsUUFBUTtRQUNSLFFBQVE7UUFDUixPQUFPO1FBQ1Asc0JBQXNCO1FBQ3RCLDhDQUE4QztRQUM5QyxrQkFBa0I7UUFDbEIseUVBQXlFO1FBQ3pFLG9DQUFvQztRQUNwQyx3QkFBd0I7UUFDeEIscUJBQXFCO1FBQ3JCLGtDQUFrQztRQUNsQyxhQUFhO1FBQ2IsV0FBVztRQUNYLFVBQVU7UUFDVixNQUFN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b25lbnRzL0NhbnZhc1NlY29uZGFyeS9DYW52YXNTZWNvbmRhcnkuanN4PzVkMWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTWF0dGVyLCB7XHJcbiAgQm9keSxcclxuICBDb21tb24sXHJcbiAgQ29tcG9zaXRlcyxcclxuICBDb25zdHJhaW50LFxyXG4gIEV2ZW50cyxcclxuICBNb3VzZSxcclxuICBNb3VzZUNvbnN0cmFpbnQsXHJcbiAgVmVjdG9yLFxyXG4gIFdvcmxkLFxyXG59IGZyb20gXCJtYXR0ZXItanNcIjtcclxuXHJcbmNvbnN0IENhbnZhc1NlY29uZGFyeSA9ICgpID0+IHtcclxuICBjb25zdCBtYXR0ZXJDb250YWluZXJSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgVEhJQ0NORVNTID0gNjA7XHJcbiAgY29uc3Qgc21hc2hSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3Qgb3ZlcmxheVJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG1hdHRlckNvbnRhaW5lciA9IG1hdHRlckNvbnRhaW5lclJlZi5jdXJyZW50O1xyXG5cclxuICAgIC8vIG1vZHVsZSBhbGlhc2VzXHJcbiAgICB2YXIgRW5naW5lID0gTWF0dGVyLkVuZ2luZSxcclxuICAgICAgUmVuZGVyID0gTWF0dGVyLlJlbmRlcixcclxuICAgICAgUnVubmVyID0gTWF0dGVyLlJ1bm5lcixcclxuICAgICAgQm9kaWVzID0gTWF0dGVyLkJvZGllcyxcclxuICAgICAgQ29tcG9zaXRlID0gTWF0dGVyLkNvbXBvc2l0ZTtcclxuXHJcbiAgICAvLyBjcmVhdGUgYW4gZW5naW5lXHJcbiAgICB2YXIgZW5naW5lID0gRW5naW5lLmNyZWF0ZSgpO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBhIHJlbmRlcmVyXHJcbiAgICB2YXIgcmVuZGVyID0gUmVuZGVyLmNyZWF0ZSh7XHJcbiAgICAgIGVsZW1lbnQ6IG1hdHRlckNvbnRhaW5lcixcclxuICAgICAgZW5naW5lOiBlbmdpbmUsXHJcbiAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICB3aWR0aDogbWF0dGVyQ29udGFpbmVyLmNsaWVudFdpZHRoLFxyXG4gICAgICAgIGhlaWdodDogbWF0dGVyQ29udGFpbmVyLmNsaWVudEhlaWdodCxcclxuICAgICAgICBiYWNrZ3JvdW5kOiBcIiMxMzEzMTRcIixcclxuICAgICAgICB3aXJlZnJhbWVzOiBmYWxzZSxcclxuICAgICAgICBzaG93QW5nbGVJbmRpY2F0b3I6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gdmFyIGZpcnN0U3RhY2sgPSBDb21wb3NpdGVzLnN0YWNrKFxyXG4gICAgLy8gICBtYXR0ZXJDb250YWluZXIuY2xpZW50V2lkdGggLyAyLFxyXG4gICAgLy8gICBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0IC8gMixcclxuICAgIC8vICAgNSxcclxuICAgIC8vICAgMTUsXHJcbiAgICAvLyAgIDE1LFxyXG4gICAgLy8gICAwLFxyXG4gICAgLy8gICBmdW5jdGlvbiAoeCwgeSkge1xyXG4gICAgLy8gICAgIHJldHVybiBCb2RpZXMucmVjdGFuZ2xlKHgsIHksIDQwLCA0MCwge1xyXG4gICAgLy8gICAgICAgcmVuZGVyOiB7XHJcbiAgICAvLyAgICAgICAgIHN0cm9rZVN0eWxlOiBDb21tb24uY2hvb3NlKFtcIiMwMGZmN2ZcIiwgXCIjOTMzM2VhXCIsIFwiI2ZmYzQwMFwiXSksXHJcbiAgICAvLyAgICAgICAgIGZpbGxTdHlsZTogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgLy8gICAgICAgICBsaW5lV2lkdGg6IDUsXHJcbiAgICAvLyAgICAgICAgIGNoYW1mZXI6IHtcclxuICAgIC8vICAgICAgICAgICByYWRpdXM6IFs1LCA1LCA1LCA1XSxcclxuICAgIC8vICAgICAgICAgfSxcclxuICAgIC8vICAgICAgIH0sXHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vICk7XHJcbiAgICB2YXIgZmlyc3RTdGFjayA9IENvbXBvc2l0ZXMuc3RhY2soXHJcbiAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRXaWR0aCAvIDIsXHJcbiAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRIZWlnaHQgLyA0IC0gMjEgLSAyMCAqIDIwLFxyXG4gICAgICAxMCxcclxuICAgICAgMTAsXHJcbiAgICAgIDE1LFxyXG4gICAgICAwLFxyXG4gICAgICBmdW5jdGlvbiAoeCwgeSkge1xyXG4gICAgICAgIHJldHVybiBCb2RpZXMuY2lyY2xlKHgsIHksIDIwLCB7XHJcbiAgICAgICAgICByZW5kZXI6IHtcclxuICAgICAgICAgICAgc3Ryb2tlU3R5bGU6IENvbW1vbi5jaG9vc2UoW1wiIzAwZmY3ZlwiLCBcIiM5MzMzZWFcIiwgXCIjZmZjNDAwXCJdKSxcclxuICAgICAgICAgICAgZmlsbFN0eWxlOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgICAgIGxpbmVXaWR0aDogMixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgdmFyIGdyb3VuZCA9IEJvZGllcy5yZWN0YW5nbGUoXHJcbiAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRXaWR0aCAvIDIsXHJcbiAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRIZWlnaHQgKyBUSElDQ05FU1MgLyAyLFxyXG4gICAgICAyNzE4NCxcclxuICAgICAgVEhJQ0NORVNTLFxyXG4gICAgICB7IGlzU3RhdGljOiB0cnVlIH1cclxuICAgICk7XHJcblxyXG4gICAgbGV0IGxlZnRXYWxsID0gQm9kaWVzLnJlY3RhbmdsZShcclxuICAgICAgMCAtIFRISUNDTkVTUyAvIDIsXHJcbiAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRIZWlnaHQgLyAyLFxyXG4gICAgICBUSElDQ05FU1MsXHJcbiAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRIZWlnaHQgKiA1LFxyXG4gICAgICB7XHJcbiAgICAgICAgaXNTdGF0aWM6IHRydWUsXHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgbGV0IHJpZ2h0V2FsbCA9IEJvZGllcy5yZWN0YW5nbGUoXHJcbiAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRXaWR0aCArIFRISUNDTkVTUyAvIDIsXHJcbiAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRIZWlnaHQgLyAyLFxyXG4gICAgICBUSElDQ05FU1MsXHJcbiAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRIZWlnaHQgKiA1LFxyXG4gICAgICB7IGlzU3RhdGljOiB0cnVlIH1cclxuICAgICk7XHJcblxyXG4gICAgLy8gYWRkIGFsbCBvZiB0aGUgYm9kaWVzIHRvIHRoZSB3b3JsZFxyXG4gICAgQ29tcG9zaXRlLmFkZChlbmdpbmUud29ybGQsIFtncm91bmQsIGxlZnRXYWxsLCByaWdodFdhbGwsIGZpcnN0U3RhY2tdKTtcclxuXHJcbiAgICB2YXIgbW91c2UgPSBNb3VzZS5jcmVhdGUocmVuZGVyLmNhbnZhcyksXHJcbiAgICAgIG1vdXNlQ29uc3RyYWludCA9IE1vdXNlQ29uc3RyYWludC5jcmVhdGUoZW5naW5lLCB7XHJcbiAgICAgICAgbW91c2U6IG1vdXNlLFxyXG4gICAgICAgIGNvbnN0cmFpbnQ6IHtcclxuICAgICAgICAgIHN0aWZmbmVzczogMC4yLFxyXG4gICAgICAgICAgcmVuZGVyOiB7XHJcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICBDb21wb3NpdGUuYWRkKGVuZ2luZS53b3JsZCwgbW91c2VDb25zdHJhaW50KTtcclxuXHJcbiAgICB2YXIgYmFsbCA9IEJvZGllcy5jaXJjbGUoXHJcbiAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRXaWR0aCAvIDgsXHJcbiAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRIZWlnaHQgLyAzLFxyXG4gICAgICA1MCxcclxuICAgICAge1xyXG4gICAgICAgIGRlbnNpdHk6IDAuMDUsXHJcbiAgICAgICAgZnJpY3Rpb25BaXI6IDAuMDA1LFxyXG4gICAgICAgIHJlbmRlcjoge1xyXG4gICAgICAgICAgc3Ryb2tlU3R5bGU6IFwiIzAwZTVmZlwiLFxyXG4gICAgICAgICAgZmlsbFN0eWxlOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgICBsaW5lV2lkdGg6IDUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBDb21wb3NpdGUuYWRkKGVuZ2luZS53b3JsZCwgYmFsbCk7XHJcblxyXG4gICAgQ29tcG9zaXRlLmFkZChcclxuICAgICAgZW5naW5lLndvcmxkLFxyXG4gICAgICBDb25zdHJhaW50LmNyZWF0ZSh7XHJcbiAgICAgICAgcG9pbnRBOiB7XHJcbiAgICAgICAgICB4OiBtYXR0ZXJDb250YWluZXIuY2xpZW50V2lkdGggLyAyLjUsXHJcbiAgICAgICAgICB5OiBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0IC8gNCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHlCOiBiYWxsLFxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICB2YXIgaG9sZGluZ1RocmVhZCA9IENvbnN0cmFpbnQuY3JlYXRlKHtcclxuICAgICAgcG9pbnRBOiB7XHJcbiAgICAgICAgeDogMzAwLFxyXG4gICAgICAgIHk6IDEwMCxcclxuICAgICAgfSxcclxuICAgICAgYm9keUI6IGJhbGwsXHJcbiAgICB9KTtcclxuXHJcbiAgICBDb21wb3NpdGUuYWRkKGVuZ2luZS53b3JsZCwgaG9sZGluZ1RocmVhZCk7XHJcblxyXG4gICAgLy8gYWxsb3cgc2Nyb2xsIHRocm91Z2ggdGhlIGNhbnZhc1xyXG4gICAgbW91c2VDb25zdHJhaW50Lm1vdXNlLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcclxuICAgICAgXCJtb3VzZXdoZWVsXCIsXHJcbiAgICAgIG1vdXNlQ29uc3RyYWludC5tb3VzZS5tb3VzZXdoZWVsXHJcbiAgICApO1xyXG4gICAgbW91c2VDb25zdHJhaW50Lm1vdXNlLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcclxuICAgICAgXCJET01Nb3VzZVNjcm9sbFwiLFxyXG4gICAgICBtb3VzZUNvbnN0cmFpbnQubW91c2UubW91c2V3aGVlbFxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBydW4gdGhlIHJlbmRlcmVyXHJcbiAgICBSZW5kZXIucnVuKHJlbmRlcik7XHJcblxyXG4gICAgLy8gY3JlYXRlIHJ1bm5lclxyXG4gICAgdmFyIHJ1bm5lciA9IFJ1bm5lci5jcmVhdGUoKTtcclxuXHJcbiAgICAvLyBydW4gdGhlIGVuZ2luZVxyXG4gICAgUnVubmVyLnJ1bihydW5uZXIsIGVuZ2luZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlUmVzaXplKCkge1xyXG4gICAgICAvLyBzZXQgY2FudmFzIHNpemUgdG8gbmV3IHZhbHVlc1xyXG4gICAgICByZW5kZXIuY2FudmFzLndpZHRoID0gbWF0dGVyQ29udGFpbmVyLmNsaWVudFdpZHRoO1xyXG4gICAgICByZW5kZXIuY2FudmFzLmhlaWdodCA9IG1hdHRlckNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XHJcblxyXG4gICAgICAvLyByZXBvc2l0aW9uIGdyb3VuZFxyXG4gICAgICBCb2R5LnNldFBvc2l0aW9uKFxyXG4gICAgICAgIGdyb3VuZCxcclxuICAgICAgICBWZWN0b3IuY3JlYXRlKFxyXG4gICAgICAgICAgbWF0dGVyQ29udGFpbmVyLmNsaWVudFdpZHRoIC8gMixcclxuICAgICAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRIZWlnaHQgKyBUSElDQ05FU1MgLyAyXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgLy8gcmVwb3NpdGlvbiByaWdodCB3YWxsXHJcbiAgICAgIEJvZHkuc2V0UG9zaXRpb24oXHJcbiAgICAgICAgcmlnaHRXYWxsLFxyXG4gICAgICAgIFZlY3Rvci5jcmVhdGUoXHJcbiAgICAgICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50V2lkdGggKyBUSElDQ05FU1MgLyAyLFxyXG4gICAgICAgICAgbWF0dGVyQ29udGFpbmVyLmNsaWVudEhlaWdodCAvIDJcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBCb2R5LnNldFBvc2l0aW9uKFxyXG4gICAgICAgIGJhbGwsXHJcbiAgICAgICAgVmVjdG9yLmNyZWF0ZShcclxuICAgICAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRXaWR0aCAvIDgsXHJcbiAgICAgICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0IC8gM1xyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzbWFzaFJlZi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIENvbXBvc2l0ZS5yZW1vdmUoZW5naW5lLndvcmxkLCBob2xkaW5nVGhyZWFkKTtcclxuXHJcbiAgICAgIG92ZXJsYXlSZWYuY3VycmVudC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgb3ZlcmxheVJlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbiAgICAgIHNtYXNoUmVmLmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjb25zdCBleHBsb3Npb24gPSAoZW5naW5lLCBkZWx0YSkgPT4ge1xyXG4gICAgLy8gICBjb25zdCB0aW1lU2NhbGUgPSAxMDAwIC8gNjAgLyBkZWx0YTtcclxuICAgIC8vICAgY29uc3QgYm9kaWVzID0gQ29tcG9zaXRlLmFsbEJvZGllcyhlbmdpbmUud29ybGQpO1xyXG5cclxuICAgIC8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICBjb25zdCBib2R5ID0gYm9kaWVzW2ldO1xyXG5cclxuICAgIC8vICAgICBpZiAoIWJvZHkuaXNTdGF0aWMgJiYgYm9keS5wb3NpdGlvbi55ID49IDUwMCkge1xyXG4gICAgLy8gICAgICAgLy8gc2NhbGUgZm9yY2UgZm9yIG1hc3MgYW5kIHRpbWUgYXBwbGllZFxyXG4gICAgLy8gICAgICAgY29uc3QgZm9yY2VNYWduaXR1ZGUgPSAwLjA1ICogYm9keS5tYXNzICogdGltZVNjYWxlO1xyXG5cclxuICAgIC8vICAgICAgIC8vIGFwcGx5IHRoZSBmb3JjZSBvdmVyIGEgc2luZ2xlIHVwZGF0ZVxyXG4gICAgLy8gICAgICAgQm9keS5hcHBseUZvcmNlKGJvZHksIGJvZHkucG9zaXRpb24sIHtcclxuICAgIC8vICAgICAgICAgeDpcclxuICAgIC8vICAgICAgICAgICAoZm9yY2VNYWduaXR1ZGUgKyBDb21tb24ucmFuZG9tKCkgKiBmb3JjZU1hZ25pdHVkZSkgKlxyXG4gICAgLy8gICAgICAgICAgIENvbW1vbi5jaG9vc2UoWzEsIC0xXSksXHJcbiAgICAvLyAgICAgICAgIHk6IC1mb3JjZU1hZ25pdHVkZSArIENvbW1vbi5yYW5kb20oKSAqIC1mb3JjZU1hZ25pdHVkZSxcclxuICAgIC8vICAgICAgIH0pO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgfVxyXG4gICAgLy8gfTtcclxuXHJcbiAgICAvLyBsZXQgdGltZVNjYWxlVGFyZ2V0ID0gMTtcclxuICAgIC8vIGxldCBsYXN0VGltZSA9IENvbW1vbi5ub3coKTtcclxuXHJcbiAgICAvLyBFdmVudHMub24oZW5naW5lLCBcImFmdGVyVXBkYXRlXCIsIChldmVudCkgPT4ge1xyXG4gICAgLy8gICBjb25zdCB0aW1lU2NhbGUgPSAoZXZlbnQuZGVsdGEgfHwgMTAwMCAvIDYwKSAvIDEwMDA7XHJcblxyXG4gICAgLy8gICAvLyB0d2VlbiB0aGUgdGltZXNjYWxlIGZvciBidWxsZXQgdGltZSBzbG93LW1vXHJcbiAgICAvLyAgIGVuZ2luZS50aW1pbmcudGltZVNjYWxlICs9XHJcbiAgICAvLyAgICAgKHRpbWVTY2FsZVRhcmdldCAtIGVuZ2luZS50aW1pbmcudGltZVNjYWxlKSAqIDEyICogdGltZVNjYWxlO1xyXG5cclxuICAgIC8vICAgLy8gZXZlcnkgMiBzZWMgKHJlYWwgdGltZSlcclxuICAgIC8vICAgaWYgKENvbW1vbi5ub3coKSAtIGxhc3RUaW1lID49IDIwMDApIHtcclxuICAgIC8vICAgICAvLyBmbGlwIHRoZSB0aW1lc2NhbGVcclxuICAgIC8vICAgICBpZiAodGltZVNjYWxlVGFyZ2V0IDwgMSkge1xyXG4gICAgLy8gICAgICAgdGltZVNjYWxlVGFyZ2V0ID0gMTtcclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgdGltZVNjYWxlVGFyZ2V0ID0gMDtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIC8vIGNyZWF0ZSBzb21lIHJhbmRvbSBmb3JjZXNcclxuICAgIC8vICAgICBleHBsb3Npb24oZW5naW5lLCBldmVudC5kZWx0YSk7XHJcblxyXG4gICAgLy8gICAgIC8vIHVwZGF0ZSBsYXN0IHRpbWVcclxuICAgIC8vICAgICBsYXN0VGltZSA9IENvbW1vbi5ub3coKTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgICBSZW5kZXIuc3RvcChyZW5kZXIpO1xyXG4gICAgICBSdW5uZXIuc3RvcChydW5uZXIpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHJlZj17bWF0dGVyQ29udGFpbmVyUmVmfVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgcG9pbnRlckV2ZW50czogXCJub25lXCIsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgIHBvaW50ZXJFdmVudHM6IFwiaW5pdGlhbFwiLFxyXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgIHRvcDogXCI1MCVcIixcclxuICAgICAgICAgIGxlZnQ6IFwiNTAlXCIsXHJcbiAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUsIC01MCUpXCIsXHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgwLCAwLCAwLCAwLjUpXCIsXHJcbiAgICAgICAgICBib3hTaGFkb3c6IFwiMCAwIDAgMTAwdncgcmdiYSgwLCAwLCAwLCAwLjIpIGluc2V0XCIsXHJcbiAgICAgICAgICBiYWNrZHJvcEZpbHRlcjogXCJibHVyKDEwcHgpIGJyaWdodG5lc3MoMTUwJSkgc2F0dXJhdGUoMTIwJSlcIixcclxuICAgICAgICAgIFdlYmtpdEJhY2tkcm9wRmlsdGVyOiBcImJsdXIoMTBweCkgYnJpZ2h0bmVzcygxNTAlKSBzYXR1cmF0ZSgxMjAlKVwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgcmVmPXtvdmVybGF5UmVmfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGJ1dHRvbiByZWY9e3NtYXNoUmVmfSBjbGFzc05hbWU9XCJzbWFzaF9idXR0b25cIj5cclxuICAgICAgICAgIDxzcGFuPlNtYXNoITwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FudmFzU2Vjb25kYXJ5O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIk1hdHRlciIsIkJvZHkiLCJDb21tb24iLCJDb21wb3NpdGVzIiwiQ29uc3RyYWludCIsIkV2ZW50cyIsIk1vdXNlIiwiTW91c2VDb25zdHJhaW50IiwiVmVjdG9yIiwiV29ybGQiLCJDYW52YXNTZWNvbmRhcnkiLCJtYXR0ZXJDb250YWluZXJSZWYiLCJUSElDQ05FU1MiLCJzbWFzaFJlZiIsIm92ZXJsYXlSZWYiLCJtYXR0ZXJDb250YWluZXIiLCJjdXJyZW50IiwiRW5naW5lIiwiUmVuZGVyIiwiUnVubmVyIiwiQm9kaWVzIiwiQ29tcG9zaXRlIiwiZW5naW5lIiwiY3JlYXRlIiwicmVuZGVyIiwiZWxlbWVudCIsIm9wdGlvbnMiLCJ3aWR0aCIsImNsaWVudFdpZHRoIiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiYmFja2dyb3VuZCIsIndpcmVmcmFtZXMiLCJzaG93QW5nbGVJbmRpY2F0b3IiLCJmaXJzdFN0YWNrIiwic3RhY2siLCJ4IiwieSIsImNpcmNsZSIsInN0cm9rZVN0eWxlIiwiY2hvb3NlIiwiZmlsbFN0eWxlIiwibGluZVdpZHRoIiwiZ3JvdW5kIiwicmVjdGFuZ2xlIiwiaXNTdGF0aWMiLCJsZWZ0V2FsbCIsInJpZ2h0V2FsbCIsImFkZCIsIndvcmxkIiwibW91c2UiLCJjYW52YXMiLCJtb3VzZUNvbnN0cmFpbnQiLCJjb25zdHJhaW50Iiwic3RpZmZuZXNzIiwidmlzaWJsZSIsImJhbGwiLCJkZW5zaXR5IiwiZnJpY3Rpb25BaXIiLCJwb2ludEEiLCJib2R5QiIsImhvbGRpbmdUaHJlYWQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibW91c2V3aGVlbCIsInJ1biIsInJ1bm5lciIsImhhbmRsZVJlc2l6ZSIsInNldFBvc2l0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZSIsInN0eWxlIiwib3BhY2l0eSIsImRpc3BsYXkiLCJ3aW5kb3ciLCJzdG9wIiwiZGl2IiwicmVmIiwicG9zaXRpb24iLCJwb2ludGVyRXZlbnRzIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImJveFNoYWRvdyIsImJhY2tkcm9wRmlsdGVyIiwiV2Via2l0QmFja2Ryb3BGaWx0ZXIiLCJidXR0b24iLCJjbGFzc05hbWUiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CanvasSecondary/CanvasSecondary.jsx\n"));

/***/ })

});