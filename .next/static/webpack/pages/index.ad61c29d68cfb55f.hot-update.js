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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! matter-js */ \"./node_modules/matter-js/build/matter.js\");\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst CanvasSecondary = ()=>{\n    _s();\n    const matterContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const THICCNESS = 60;\n    const smashRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const overlayRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const matterContainer = matterContainerRef.current;\n        // module aliases\n        var Engine = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Engine), Render = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Render), Runner = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Runner), Bodies = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Bodies), Composite = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Composite);\n        // create an engine\n        var engine = Engine.create();\n        // create a renderer\n        var render = Render.create({\n            element: matterContainer,\n            engine: engine,\n            options: {\n                width: matterContainer.clientWidth,\n                height: matterContainer.clientHeight,\n                background: \"#131314\",\n                wireframes: false,\n                showAngleIndicator: false\n            }\n        });\n        var stack = matter_js__WEBPACK_IMPORTED_MODULE_2__.Composites.stack(matterContainer.clientWidth / 2, matterContainer.clientHeight / 2, 5, 5, 5, 0, function(x, y) {\n            return Bodies.rectangle(x, y, 40, 40, {\n                render: {\n                    strokeStyle: \"#9333ea\",\n                    fillStyle: \"transparent\",\n                    lineWidth: 5\n                }\n            });\n        });\n        var ground = Bodies.rectangle(matterContainer.clientWidth / 2, matterContainer.clientHeight + THICCNESS / 2, 27184, THICCNESS, {\n            isStatic: true\n        });\n        let leftWall = Bodies.rectangle(0 - THICCNESS / 2, matterContainer.clientHeight / 2, THICCNESS, matterContainer.clientHeight * 5, {\n            isStatic: true\n        });\n        let rightWall = Bodies.rectangle(matterContainer.clientWidth + THICCNESS / 2, matterContainer.clientHeight / 2, THICCNESS, matterContainer.clientHeight * 5, {\n            isStatic: true\n        });\n        // add all of the bodies to the world\n        Composite.add(engine.world, [\n            ground,\n            leftWall,\n            rightWall,\n            stack\n        ]);\n        var mouse = matter_js__WEBPACK_IMPORTED_MODULE_2__.Mouse.create(render.canvas), mouseConstraint = matter_js__WEBPACK_IMPORTED_MODULE_2__.MouseConstraint.create(engine, {\n            mouse: mouse,\n            constraint: {\n                stiffness: 0.2,\n                render: {\n                    visible: false\n                }\n            }\n        });\n        Composite.add(engine.world, mouseConstraint);\n        var ball = Bodies.circle(matterContainer.clientWidth / 8, matterContainer.clientHeight / 3, 50, {\n            density: 0.05,\n            frictionAir: 0.005,\n            render: {\n                strokeStyle: \"#00e5ff\",\n                fillStyle: \"transparent\",\n                lineWidth: 5\n            }\n        });\n        Composite.add(engine.world, ball);\n        Composite.add(engine.world, matter_js__WEBPACK_IMPORTED_MODULE_2__.Constraint.create({\n            pointA: {\n                x: matterContainer.clientWidth / 2.5,\n                y: matterContainer.clientHeight / 4\n            },\n            bodyB: ball\n        }));\n        var holdingThread = matter_js__WEBPACK_IMPORTED_MODULE_2__.Constraint.create({\n            pointA: {\n                x: 300,\n                y: 100\n            },\n            bodyB: ball\n        });\n        Composite.add(engine.world, holdingThread);\n        // allow scroll through the canvas\n        mouseConstraint.mouse.element.removeEventListener(\"mousewheel\", mouseConstraint.mouse.mousewheel);\n        mouseConstraint.mouse.element.removeEventListener(\"DOMMouseScroll\", mouseConstraint.mouse.mousewheel);\n        // run the renderer\n        Render.run(render);\n        // create runner\n        var runner = Runner.create();\n        // run the engine\n        Runner.run(runner, engine);\n        function handleResize() {\n            // set canvas size to new values\n            render.canvas.width = matterContainer.clientWidth;\n            render.canvas.height = matterContainer.clientHeight;\n            // reposition ground\n            matter_js__WEBPACK_IMPORTED_MODULE_2__.Body.setPosition(ground, matter_js__WEBPACK_IMPORTED_MODULE_2__.Vector.create(matterContainer.clientWidth / 2, matterContainer.clientHeight + THICCNESS / 2));\n            // reposition right wall\n            matter_js__WEBPACK_IMPORTED_MODULE_2__.Body.setPosition(rightWall, matter_js__WEBPACK_IMPORTED_MODULE_2__.Vector.create(matterContainer.clientWidth + THICCNESS / 2, matterContainer.clientHeight / 2));\n            matter_js__WEBPACK_IMPORTED_MODULE_2__.Body.setPosition(ball, matter_js__WEBPACK_IMPORTED_MODULE_2__.Vector.create(matterContainer.clientWidth / 8, matterContainer.clientHeight / 3));\n        }\n        smashRef.current.addEventListener(\"click\", ()=>{\n            Composite.remove(engine.world, holdingThread);\n            overlayRef.current.style.opacity = 0;\n            overlayRef.current.style.display = \"none\";\n            smashRef.current.style.opacity = 0;\n        });\n        // const explosion = (engine, delta) => {\n        //   const timeScale = 1000 / 60 / delta;\n        //   const bodies = Composite.allBodies(engine.world);\n        //   for (let i = 0; i < bodies.length; i++) {\n        //     const body = bodies[i];\n        //     if (!body.isStatic && body.position.y >= 500) {\n        //       // scale force for mass and time applied\n        //       const forceMagnitude = 0.05 * body.mass * timeScale;\n        //       // apply the force over a single update\n        //       Body.applyForce(body, body.position, {\n        //         x:\n        //           (forceMagnitude + Common.random() * forceMagnitude) *\n        //           Common.choose([1, -1]),\n        //         y: -forceMagnitude + Common.random() * -forceMagnitude,\n        //       });\n        //     }\n        //   }\n        // };\n        // let timeScaleTarget = 1;\n        // let lastTime = Common.now();\n        // Events.on(engine, \"afterUpdate\", (event) => {\n        //   const timeScale = (event.delta || 1000 / 60) / 1000;\n        //   // tween the timescale for bullet time slow-mo\n        //   engine.timing.timeScale +=\n        //     (timeScaleTarget - engine.timing.timeScale) * 12 * timeScale;\n        //   // every 2 sec (real time)\n        //   if (Common.now() - lastTime >= 2000) {\n        //     // flip the timescale\n        //     if (timeScaleTarget < 1) {\n        //       timeScaleTarget = 1;\n        //     } else {\n        //       timeScaleTarget = 0;\n        //     }\n        //     // create some random forces\n        //     explosion(engine, event.delta);\n        //     // update last time\n        //     lastTime = Common.now();\n        //   }\n        // });\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n            Render.stop(render);\n            Runner.stop(runner);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: matterContainerRef,\n        style: {\n            width: \"100%\",\n            height: \"100%\",\n            position: \"relative\",\n            pointerEvents: \"none\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                position: \"absolute\",\n                pointerEvents: \"initial\",\n                height: \"100%\",\n                width: \"100%\",\n                top: \"50%\",\n                left: \"50%\",\n                transform: \"translate(-50%, -50%)\",\n                display: \"flex\",\n                justifyContent: \"center\",\n                alignItems: \"center\",\n                background: \"rgba(0, 0, 0, 0.5)\",\n                boxShadow: \"0 0 0 100vw rgba(0, 0, 0, 0.2) inset\",\n                backdropFilter: \"blur(10px) brightness(150%) saturate(120%)\",\n                WebkitBackdropFilter: \"blur(10px) brightness(150%) saturate(120%)\"\n            },\n            ref: overlayRef,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                ref: smashRef,\n                className: \"smash_button\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: \"Smash!\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Kartik jha\\\\Desktop\\\\Final-Port-Mk1\\\\components\\\\CanvasSecondary\\\\CanvasSecondary.jsx\",\n                    lineNumber: 292,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Kartik jha\\\\Desktop\\\\Final-Port-Mk1\\\\components\\\\CanvasSecondary\\\\CanvasSecondary.jsx\",\n                lineNumber: 291,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Kartik jha\\\\Desktop\\\\Final-Port-Mk1\\\\components\\\\CanvasSecondary\\\\CanvasSecondary.jsx\",\n            lineNumber: 272,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Kartik jha\\\\Desktop\\\\Final-Port-Mk1\\\\components\\\\CanvasSecondary\\\\CanvasSecondary.jsx\",\n        lineNumber: 263,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CanvasSecondary, \"UgLcn/YohOOeI5zNYX2hX73xb/w=\");\n_c = CanvasSecondary;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CanvasSecondary);\nvar _c;\n$RefreshReg$(_c, \"CanvasSecondary\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhbnZhc1NlY29uZGFyeS9DYW52YXNTZWNvbmRhcnkuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyRDtBQVd4QztBQUVuQixNQUFNYyxrQkFBa0IsSUFBTTs7SUFDNUIsTUFBTUMscUJBQXFCYiw2Q0FBTUEsQ0FBQyxJQUFJO0lBQ3RDLE1BQU1jLFlBQVk7SUFDbEIsTUFBTUMsV0FBV2YsNkNBQU1BLENBQUMsSUFBSTtJQUM1QixNQUFNZ0IsYUFBYWhCLDZDQUFNQSxDQUFDLElBQUk7SUFFOUJELGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNa0Isa0JBQWtCSixtQkFBbUJLLE9BQU87UUFFbEQsaUJBQWlCO1FBQ2pCLElBQUlDLFNBQVNqQix5REFBYSxFQUN4QmtCLFNBQVNsQix5REFBYSxFQUN0Qm1CLFNBQVNuQix5REFBYSxFQUN0Qm9CLFNBQVNwQix5REFBYSxFQUN0QnFCLFlBQVlyQiw0REFBZ0I7UUFFOUIsbUJBQW1CO1FBQ25CLElBQUlzQixTQUFTTCxPQUFPTSxNQUFNO1FBRTFCLG9CQUFvQjtRQUNwQixJQUFJQyxTQUFTTixPQUFPSyxNQUFNLENBQUM7WUFDekJFLFNBQVNWO1lBQ1RPLFFBQVFBO1lBQ1JJLFNBQVM7Z0JBQ1BDLE9BQU9aLGdCQUFnQmEsV0FBVztnQkFDbENDLFFBQVFkLGdCQUFnQmUsWUFBWTtnQkFDcENDLFlBQVk7Z0JBQ1pDLFlBQVksS0FBSztnQkFDakJDLG9CQUFvQixLQUFLO1lBQzNCO1FBQ0Y7UUFFQSxJQUFJQyxRQUFRL0IsdURBQWdCLENBQzFCWSxnQkFBZ0JhLFdBQVcsR0FBRyxHQUM5QmIsZ0JBQWdCZSxZQUFZLEdBQUcsR0FDL0IsR0FDQSxHQUNBLEdBQ0EsR0FDQSxTQUFVSyxDQUFDLEVBQUVDLENBQUMsRUFBRTtZQUNkLE9BQU9oQixPQUFPaUIsU0FBUyxDQUFDRixHQUFHQyxHQUFHLElBQUksSUFBSTtnQkFDcENaLFFBQVE7b0JBQ05jLGFBQWE7b0JBQ2JDLFdBQVc7b0JBQ1hD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QUFPTCxnQkFBZ0IsQ0FBQyxVQUFVRjtRQUVsQyxPQUFPLElBQU07WUFDWE8sT0FBT1gsbUJBQW1CLENBQUMsVUFBVUk7WUFDckM5QyxPQUFPc0QsSUFBSSxDQUFDaEQ7WUFDWkwsT0FBT3FELElBQUksQ0FBQ1Q7UUFDZDtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDVTtRQUNDQyxLQUFLL0Q7UUFDTHlELE9BQU87WUFDTHpDLE9BQU87WUFDUEUsUUFBUTtZQUNSOEMsVUFBVTtZQUNWQyxlQUFlO1FBQ2pCO2tCQUVBLDRFQUFDSDtZQUNDTCxPQUFPO2dCQUNMTyxVQUFVO2dCQUNWQyxlQUFlO2dCQUNmL0MsUUFBUTtnQkFDUkYsT0FBTztnQkFDUGtELEtBQUs7Z0JBQ0xDLE1BQU07Z0JBQ05DLFdBQVc7Z0JBQ1hULFNBQVM7Z0JBQ1RVLGdCQUFnQjtnQkFDaEJDLFlBQVk7Z0JBQ1psRCxZQUFZO2dCQUNabUQsV0FBVztnQkFDWEMsZ0JBQWdCO2dCQUNoQkMsc0JBQXNCO1lBQ3hCO1lBQ0FWLEtBQUs1RDtzQkFFTCw0RUFBQ3VFO2dCQUFPWCxLQUFLN0Q7Z0JBQVV5RSxXQUFVOzBCQUMvQiw0RUFBQ0M7OEJBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtoQjtHQTNSTTdFO0tBQUFBO0FBNlJOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2FudmFzU2Vjb25kYXJ5L0NhbnZhc1NlY29uZGFyeS5qc3g/NWQxZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNYXR0ZXIsIHtcclxuICBCb2R5LFxyXG4gIENvbW1vbixcclxuICBDb21wb3NpdGVzLFxyXG4gIENvbnN0cmFpbnQsXHJcbiAgRXZlbnRzLFxyXG4gIE1vdXNlLFxyXG4gIE1vdXNlQ29uc3RyYWludCxcclxuICBWZWN0b3IsXHJcbiAgV29ybGQsXHJcbn0gZnJvbSBcIm1hdHRlci1qc1wiO1xyXG5cclxuY29uc3QgQ2FudmFzU2Vjb25kYXJ5ID0gKCkgPT4ge1xyXG4gIGNvbnN0IG1hdHRlckNvbnRhaW5lclJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBUSElDQ05FU1MgPSA2MDtcclxuICBjb25zdCBzbWFzaFJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBvdmVybGF5UmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgbWF0dGVyQ29udGFpbmVyID0gbWF0dGVyQ29udGFpbmVyUmVmLmN1cnJlbnQ7XHJcblxyXG4gICAgLy8gbW9kdWxlIGFsaWFzZXNcclxuICAgIHZhciBFbmdpbmUgPSBNYXR0ZXIuRW5naW5lLFxyXG4gICAgICBSZW5kZXIgPSBNYXR0ZXIuUmVuZGVyLFxyXG4gICAgICBSdW5uZXIgPSBNYXR0ZXIuUnVubmVyLFxyXG4gICAgICBCb2RpZXMgPSBNYXR0ZXIuQm9kaWVzLFxyXG4gICAgICBDb21wb3NpdGUgPSBNYXR0ZXIuQ29tcG9zaXRlO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBhbiBlbmdpbmVcclxuICAgIHZhciBlbmdpbmUgPSBFbmdpbmUuY3JlYXRlKCk7XHJcblxyXG4gICAgLy8gY3JlYXRlIGEgcmVuZGVyZXJcclxuICAgIHZhciByZW5kZXIgPSBSZW5kZXIuY3JlYXRlKHtcclxuICAgICAgZWxlbWVudDogbWF0dGVyQ29udGFpbmVyLFxyXG4gICAgICBlbmdpbmU6IGVuZ2luZSxcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIHdpZHRoOiBtYXR0ZXJDb250YWluZXIuY2xpZW50V2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0LFxyXG4gICAgICAgIGJhY2tncm91bmQ6IFwiIzEzMTMxNFwiLFxyXG4gICAgICAgIHdpcmVmcmFtZXM6IGZhbHNlLFxyXG4gICAgICAgIHNob3dBbmdsZUluZGljYXRvcjogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgc3RhY2sgPSBDb21wb3NpdGVzLnN0YWNrKFxyXG4gICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50V2lkdGggLyAyLFxyXG4gICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0IC8gMixcclxuICAgICAgNSxcclxuICAgICAgNSxcclxuICAgICAgNSxcclxuICAgICAgMCxcclxuICAgICAgZnVuY3Rpb24gKHgsIHkpIHtcclxuICAgICAgICByZXR1cm4gQm9kaWVzLnJlY3RhbmdsZSh4LCB5LCA0MCwgNDAsIHtcclxuICAgICAgICAgIHJlbmRlcjoge1xyXG4gICAgICAgICAgICBzdHJva2VTdHlsZTogXCIjOTMzM2VhXCIsXHJcbiAgICAgICAgICAgIGZpbGxTdHlsZTogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgICAgICBsaW5lV2lkdGg6IDUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHZhciBncm91bmQgPSBCb2RpZXMucmVjdGFuZ2xlKFxyXG4gICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50V2lkdGggLyAyLFxyXG4gICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0ICsgVEhJQ0NORVNTIC8gMixcclxuICAgICAgMjcxODQsXHJcbiAgICAgIFRISUNDTkVTUyxcclxuICAgICAgeyBpc1N0YXRpYzogdHJ1ZSB9XHJcbiAgICApO1xyXG5cclxuICAgIGxldCBsZWZ0V2FsbCA9IEJvZGllcy5yZWN0YW5nbGUoXHJcbiAgICAgIDAgLSBUSElDQ05FU1MgLyAyLFxyXG4gICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0IC8gMixcclxuICAgICAgVEhJQ0NORVNTLFxyXG4gICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0ICogNSxcclxuICAgICAge1xyXG4gICAgICAgIGlzU3RhdGljOiB0cnVlLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGxldCByaWdodFdhbGwgPSBCb2RpZXMucmVjdGFuZ2xlKFxyXG4gICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50V2lkdGggKyBUSElDQ05FU1MgLyAyLFxyXG4gICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0IC8gMixcclxuICAgICAgVEhJQ0NORVNTLFxyXG4gICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0ICogNSxcclxuICAgICAgeyBpc1N0YXRpYzogdHJ1ZSB9XHJcbiAgICApO1xyXG5cclxuICAgIC8vIGFkZCBhbGwgb2YgdGhlIGJvZGllcyB0byB0aGUgd29ybGRcclxuICAgIENvbXBvc2l0ZS5hZGQoZW5naW5lLndvcmxkLCBbZ3JvdW5kLCBsZWZ0V2FsbCwgcmlnaHRXYWxsLCBzdGFja10pO1xyXG5cclxuICAgIHZhciBtb3VzZSA9IE1vdXNlLmNyZWF0ZShyZW5kZXIuY2FudmFzKSxcclxuICAgICAgbW91c2VDb25zdHJhaW50ID0gTW91c2VDb25zdHJhaW50LmNyZWF0ZShlbmdpbmUsIHtcclxuICAgICAgICBtb3VzZTogbW91c2UsXHJcbiAgICAgICAgY29uc3RyYWludDoge1xyXG4gICAgICAgICAgc3RpZmZuZXNzOiAwLjIsXHJcbiAgICAgICAgICByZW5kZXI6IHtcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIENvbXBvc2l0ZS5hZGQoZW5naW5lLndvcmxkLCBtb3VzZUNvbnN0cmFpbnQpO1xyXG5cclxuICAgIHZhciBiYWxsID0gQm9kaWVzLmNpcmNsZShcclxuICAgICAgbWF0dGVyQ29udGFpbmVyLmNsaWVudFdpZHRoIC8gOCxcclxuICAgICAgbWF0dGVyQ29udGFpbmVyLmNsaWVudEhlaWdodCAvIDMsXHJcbiAgICAgIDUwLFxyXG4gICAgICB7XHJcbiAgICAgICAgZGVuc2l0eTogMC4wNSxcclxuICAgICAgICBmcmljdGlvbkFpcjogMC4wMDUsXHJcbiAgICAgICAgcmVuZGVyOiB7XHJcbiAgICAgICAgICBzdHJva2VTdHlsZTogXCIjMDBlNWZmXCIsXHJcbiAgICAgICAgICBmaWxsU3R5bGU6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgICAgIGxpbmVXaWR0aDogNSxcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIENvbXBvc2l0ZS5hZGQoZW5naW5lLndvcmxkLCBiYWxsKTtcclxuXHJcbiAgICBDb21wb3NpdGUuYWRkKFxyXG4gICAgICBlbmdpbmUud29ybGQsXHJcbiAgICAgIENvbnN0cmFpbnQuY3JlYXRlKHtcclxuICAgICAgICBwb2ludEE6IHtcclxuICAgICAgICAgIHg6IG1hdHRlckNvbnRhaW5lci5jbGllbnRXaWR0aCAvIDIuNSxcclxuICAgICAgICAgIHk6IG1hdHRlckNvbnRhaW5lci5jbGllbnRIZWlnaHQgLyA0LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keUI6IGJhbGwsXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIHZhciBob2xkaW5nVGhyZWFkID0gQ29uc3RyYWludC5jcmVhdGUoe1xyXG4gICAgICBwb2ludEE6IHtcclxuICAgICAgICB4OiAzMDAsXHJcbiAgICAgICAgeTogMTAwLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5QjogYmFsbCxcclxuICAgIH0pO1xyXG5cclxuICAgIENvbXBvc2l0ZS5hZGQoZW5naW5lLndvcmxkLCBob2xkaW5nVGhyZWFkKTtcclxuXHJcbiAgICAvLyBhbGxvdyBzY3JvbGwgdGhyb3VnaCB0aGUgY2FudmFzXHJcbiAgICBtb3VzZUNvbnN0cmFpbnQubW91c2UuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxyXG4gICAgICBcIm1vdXNld2hlZWxcIixcclxuICAgICAgbW91c2VDb25zdHJhaW50Lm1vdXNlLm1vdXNld2hlZWxcclxuICAgICk7XHJcbiAgICBtb3VzZUNvbnN0cmFpbnQubW91c2UuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxyXG4gICAgICBcIkRPTU1vdXNlU2Nyb2xsXCIsXHJcbiAgICAgIG1vdXNlQ29uc3RyYWludC5tb3VzZS5tb3VzZXdoZWVsXHJcbiAgICApO1xyXG5cclxuICAgIC8vIHJ1biB0aGUgcmVuZGVyZXJcclxuICAgIFJlbmRlci5ydW4ocmVuZGVyKTtcclxuXHJcbiAgICAvLyBjcmVhdGUgcnVubmVyXHJcbiAgICB2YXIgcnVubmVyID0gUnVubmVyLmNyZWF0ZSgpO1xyXG5cclxuICAgIC8vIHJ1biB0aGUgZW5naW5lXHJcbiAgICBSdW5uZXIucnVuKHJ1bm5lciwgZW5naW5lKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XHJcbiAgICAgIC8vIHNldCBjYW52YXMgc2l6ZSB0byBuZXcgdmFsdWVzXHJcbiAgICAgIHJlbmRlci5jYW52YXMud2lkdGggPSBtYXR0ZXJDb250YWluZXIuY2xpZW50V2lkdGg7XHJcbiAgICAgIHJlbmRlci5jYW52YXMuaGVpZ2h0ID0gbWF0dGVyQ29udGFpbmVyLmNsaWVudEhlaWdodDtcclxuXHJcbiAgICAgIC8vIHJlcG9zaXRpb24gZ3JvdW5kXHJcbiAgICAgIEJvZHkuc2V0UG9zaXRpb24oXHJcbiAgICAgICAgZ3JvdW5kLFxyXG4gICAgICAgIFZlY3Rvci5jcmVhdGUoXHJcbiAgICAgICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50V2lkdGggLyAyLFxyXG4gICAgICAgICAgbWF0dGVyQ29udGFpbmVyLmNsaWVudEhlaWdodCArIFRISUNDTkVTUyAvIDJcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvLyByZXBvc2l0aW9uIHJpZ2h0IHdhbGxcclxuICAgICAgQm9keS5zZXRQb3NpdGlvbihcclxuICAgICAgICByaWdodFdhbGwsXHJcbiAgICAgICAgVmVjdG9yLmNyZWF0ZShcclxuICAgICAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRXaWR0aCArIFRISUNDTkVTUyAvIDIsXHJcbiAgICAgICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0IC8gMlxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuXHJcbiAgICAgIEJvZHkuc2V0UG9zaXRpb24oXHJcbiAgICAgICAgYmFsbCxcclxuICAgICAgICBWZWN0b3IuY3JlYXRlKFxyXG4gICAgICAgICAgbWF0dGVyQ29udGFpbmVyLmNsaWVudFdpZHRoIC8gOCxcclxuICAgICAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRIZWlnaHQgLyAzXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHNtYXNoUmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgQ29tcG9zaXRlLnJlbW92ZShlbmdpbmUud29ybGQsIGhvbGRpbmdUaHJlYWQpO1xyXG5cclxuICAgICAgb3ZlcmxheVJlZi5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICBvdmVybGF5UmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuICAgICAgc21hc2hSZWYuY3VycmVudC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGNvbnN0IGV4cGxvc2lvbiA9IChlbmdpbmUsIGRlbHRhKSA9PiB7XHJcbiAgICAvLyAgIGNvbnN0IHRpbWVTY2FsZSA9IDEwMDAgLyA2MCAvIGRlbHRhO1xyXG4gICAgLy8gICBjb25zdCBib2RpZXMgPSBDb21wb3NpdGUuYWxsQm9kaWVzKGVuZ2luZS53b3JsZCk7XHJcblxyXG4gICAgLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgIGNvbnN0IGJvZHkgPSBib2RpZXNbaV07XHJcblxyXG4gICAgLy8gICAgIGlmICghYm9keS5pc1N0YXRpYyAmJiBib2R5LnBvc2l0aW9uLnkgPj0gNTAwKSB7XHJcbiAgICAvLyAgICAgICAvLyBzY2FsZSBmb3JjZSBmb3IgbWFzcyBhbmQgdGltZSBhcHBsaWVkXHJcbiAgICAvLyAgICAgICBjb25zdCBmb3JjZU1hZ25pdHVkZSA9IDAuMDUgKiBib2R5Lm1hc3MgKiB0aW1lU2NhbGU7XHJcblxyXG4gICAgLy8gICAgICAgLy8gYXBwbHkgdGhlIGZvcmNlIG92ZXIgYSBzaW5nbGUgdXBkYXRlXHJcbiAgICAvLyAgICAgICBCb2R5LmFwcGx5Rm9yY2UoYm9keSwgYm9keS5wb3NpdGlvbiwge1xyXG4gICAgLy8gICAgICAgICB4OlxyXG4gICAgLy8gICAgICAgICAgIChmb3JjZU1hZ25pdHVkZSArIENvbW1vbi5yYW5kb20oKSAqIGZvcmNlTWFnbml0dWRlKSAqXHJcbiAgICAvLyAgICAgICAgICAgQ29tbW9uLmNob29zZShbMSwgLTFdKSxcclxuICAgIC8vICAgICAgICAgeTogLWZvcmNlTWFnbml0dWRlICsgQ29tbW9uLnJhbmRvbSgpICogLWZvcmNlTWFnbml0dWRlLFxyXG4gICAgLy8gICAgICAgfSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9O1xyXG5cclxuICAgIC8vIGxldCB0aW1lU2NhbGVUYXJnZXQgPSAxO1xyXG4gICAgLy8gbGV0IGxhc3RUaW1lID0gQ29tbW9uLm5vdygpO1xyXG5cclxuICAgIC8vIEV2ZW50cy5vbihlbmdpbmUsIFwiYWZ0ZXJVcGRhdGVcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAvLyAgIGNvbnN0IHRpbWVTY2FsZSA9IChldmVudC5kZWx0YSB8fCAxMDAwIC8gNjApIC8gMTAwMDtcclxuXHJcbiAgICAvLyAgIC8vIHR3ZWVuIHRoZSB0aW1lc2NhbGUgZm9yIGJ1bGxldCB0aW1lIHNsb3ctbW9cclxuICAgIC8vICAgZW5naW5lLnRpbWluZy50aW1lU2NhbGUgKz1cclxuICAgIC8vICAgICAodGltZVNjYWxlVGFyZ2V0IC0gZW5naW5lLnRpbWluZy50aW1lU2NhbGUpICogMTIgKiB0aW1lU2NhbGU7XHJcblxyXG4gICAgLy8gICAvLyBldmVyeSAyIHNlYyAocmVhbCB0aW1lKVxyXG4gICAgLy8gICBpZiAoQ29tbW9uLm5vdygpIC0gbGFzdFRpbWUgPj0gMjAwMCkge1xyXG4gICAgLy8gICAgIC8vIGZsaXAgdGhlIHRpbWVzY2FsZVxyXG4gICAgLy8gICAgIGlmICh0aW1lU2NhbGVUYXJnZXQgPCAxKSB7XHJcbiAgICAvLyAgICAgICB0aW1lU2NhbGVUYXJnZXQgPSAxO1xyXG4gICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICB0aW1lU2NhbGVUYXJnZXQgPSAwO1xyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgLy8gY3JlYXRlIHNvbWUgcmFuZG9tIGZvcmNlc1xyXG4gICAgLy8gICAgIGV4cGxvc2lvbihlbmdpbmUsIGV2ZW50LmRlbHRhKTtcclxuXHJcbiAgICAvLyAgICAgLy8gdXBkYXRlIGxhc3QgdGltZVxyXG4gICAgLy8gICAgIGxhc3RUaW1lID0gQ29tbW9uLm5vdygpO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgICAgIFJlbmRlci5zdG9wKHJlbmRlcik7XHJcbiAgICAgIFJ1bm5lci5zdG9wKHJ1bm5lcik7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgcmVmPXttYXR0ZXJDb250YWluZXJSZWZ9XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgcG9pbnRlckV2ZW50czogXCJpbml0aWFsXCIsXHJcbiAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgdG9wOiBcIjUwJVwiLFxyXG4gICAgICAgICAgbGVmdDogXCI1MCVcIixcclxuICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIixcclxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsIDAsIDAsIDAuNSlcIixcclxuICAgICAgICAgIGJveFNoYWRvdzogXCIwIDAgMCAxMDB2dyByZ2JhKDAsIDAsIDAsIDAuMikgaW5zZXRcIixcclxuICAgICAgICAgIGJhY2tkcm9wRmlsdGVyOiBcImJsdXIoMTBweCkgYnJpZ2h0bmVzcygxNTAlKSBzYXR1cmF0ZSgxMjAlKVwiLFxyXG4gICAgICAgICAgV2Via2l0QmFja2Ryb3BGaWx0ZXI6IFwiYmx1cigxMHB4KSBicmlnaHRuZXNzKDE1MCUpIHNhdHVyYXRlKDEyMCUpXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgICByZWY9e292ZXJsYXlSZWZ9XHJcbiAgICAgID5cclxuICAgICAgICA8YnV0dG9uIHJlZj17c21hc2hSZWZ9IGNsYXNzTmFtZT1cInNtYXNoX2J1dHRvblwiPlxyXG4gICAgICAgICAgPHNwYW4+U21hc2ghPC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYW52YXNTZWNvbmRhcnk7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiTWF0dGVyIiwiQm9keSIsIkNvbW1vbiIsIkNvbXBvc2l0ZXMiLCJDb25zdHJhaW50IiwiRXZlbnRzIiwiTW91c2UiLCJNb3VzZUNvbnN0cmFpbnQiLCJWZWN0b3IiLCJXb3JsZCIsIkNhbnZhc1NlY29uZGFyeSIsIm1hdHRlckNvbnRhaW5lclJlZiIsIlRISUNDTkVTUyIsInNtYXNoUmVmIiwib3ZlcmxheVJlZiIsIm1hdHRlckNvbnRhaW5lciIsImN1cnJlbnQiLCJFbmdpbmUiLCJSZW5kZXIiLCJSdW5uZXIiLCJCb2RpZXMiLCJDb21wb3NpdGUiLCJlbmdpbmUiLCJjcmVhdGUiLCJyZW5kZXIiLCJlbGVtZW50Iiwib3B0aW9ucyIsIndpZHRoIiwiY2xpZW50V2lkdGgiLCJoZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJiYWNrZ3JvdW5kIiwid2lyZWZyYW1lcyIsInNob3dBbmdsZUluZGljYXRvciIsInN0YWNrIiwieCIsInkiLCJyZWN0YW5nbGUiLCJzdHJva2VTdHlsZSIsImZpbGxTdHlsZSIsImxpbmVXaWR0aCIsImdyb3VuZCIsImlzU3RhdGljIiwibGVmdFdhbGwiLCJyaWdodFdhbGwiLCJhZGQiLCJ3b3JsZCIsIm1vdXNlIiwiY2FudmFzIiwibW91c2VDb25zdHJhaW50IiwiY29uc3RyYWludCIsInN0aWZmbmVzcyIsInZpc2libGUiLCJiYWxsIiwiY2lyY2xlIiwiZGVuc2l0eSIsImZyaWN0aW9uQWlyIiwicG9pbnRBIiwiYm9keUIiLCJob2xkaW5nVGhyZWFkIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1vdXNld2hlZWwiLCJydW4iLCJydW5uZXIiLCJoYW5kbGVSZXNpemUiLCJzZXRQb3NpdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmUiLCJzdHlsZSIsIm9wYWNpdHkiLCJkaXNwbGF5Iiwid2luZG93Iiwic3RvcCIsImRpdiIsInJlZiIsInBvc2l0aW9uIiwicG9pbnRlckV2ZW50cyIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJib3hTaGFkb3ciLCJiYWNrZHJvcEZpbHRlciIsIldlYmtpdEJhY2tkcm9wRmlsdGVyIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CanvasSecondary/CanvasSecondary.jsx\n"));

/***/ })

});