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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! matter-js */ \"./node_modules/matter-js/build/matter.js\");\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst CanvasSecondary = ()=>{\n    _s();\n    const matterContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const THICCNESS = 60;\n    const [didSmash, setDidSmash] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const matterContainer = matterContainerRef.current;\n        // module aliases\n        var Engine = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Engine), Render = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Render), Runner = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Runner), Bodies = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Bodies), Composite = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Composite);\n        // create an engine\n        var engine = Engine.create();\n        // create a renderer\n        var render = Render.create({\n            element: matterContainer,\n            engine: engine,\n            options: {\n                width: matterContainer.clientWidth,\n                height: matterContainer.clientHeight,\n                background: \"#131314\",\n                wireframes: false,\n                showAngleIndicator: false\n            }\n        });\n        var stack = matter_js__WEBPACK_IMPORTED_MODULE_2__.Composites.stack(matterContainer.clientWidth / 2, matterContainer.clientHeight / 2, 5, 10, 10, 0, function(x, y) {\n            return Bodies.rectangle(x, y, 40, 40);\n        });\n        var ground = Bodies.rectangle(matterContainer.clientWidth / 2, matterContainer.clientHeight + THICCNESS / 2, 27184, THICCNESS, {\n            isStatic: true\n        });\n        let leftWall = Bodies.rectangle(0 - THICCNESS / 2, matterContainer.clientHeight / 2, THICCNESS, matterContainer.clientHeight * 5, {\n            isStatic: true\n        });\n        let rightWall = Bodies.rectangle(matterContainer.clientWidth + THICCNESS / 2, matterContainer.clientHeight / 2, THICCNESS, matterContainer.clientHeight * 5, {\n            isStatic: true\n        });\n        // add all of the bodies to the world\n        Composite.add(engine.world, [\n            ground,\n            leftWall,\n            rightWall,\n            stack\n        ]);\n        var mouse = matter_js__WEBPACK_IMPORTED_MODULE_2__.Mouse.create(render.canvas), mouseConstraint = matter_js__WEBPACK_IMPORTED_MODULE_2__.MouseConstraint.create(engine, {\n            mouse: mouse,\n            constraint: {\n                stiffness: 0.2,\n                render: {\n                    visible: false\n                }\n            }\n        });\n        Composite.add(engine.world, mouseConstraint);\n        var ball = Bodies.circle(matterContainer.clientWidth / 8, matterContainer.clientHeight / 3, 50, {\n            density: 0.05,\n            frictionAir: 0.005\n        });\n        Composite.add(engine.world, ball);\n        Composite.add(engine.world, matter_js__WEBPACK_IMPORTED_MODULE_2__.Constraint.create({\n            pointA: {\n                x: matterContainer.clientWidth / 2.5,\n                y: matterContainer.clientHeight / 4\n            },\n            bodyB: ball\n        }));\n        var holdingThread = matter_js__WEBPACK_IMPORTED_MODULE_2__.Constraint.create({\n            pointA: {\n                x: 300,\n                y: 100\n            },\n            bodyB: ball\n        });\n        Composite.add(engine.world, holdingThread);\n        // allow scroll through the canvas\n        mouseConstraint.mouse.element.removeEventListener(\"mousewheel\", mouseConstraint.mouse.mousewheel);\n        mouseConstraint.mouse.element.removeEventListener(\"DOMMouseScroll\", mouseConstraint.mouse.mousewheel);\n        // run the renderer\n        Render.run(render);\n        // create runner\n        var runner = Runner.create();\n        // run the engine\n        Runner.run(runner, engine);\n        function handleResize() {\n            // set canvas size to new values\n            render.canvas.width = matterContainer.clientWidth;\n            render.canvas.height = matterContainer.clientHeight;\n            // reposition ground\n            matter_js__WEBPACK_IMPORTED_MODULE_2__.Body.setPosition(ground, matter_js__WEBPACK_IMPORTED_MODULE_2__.Vector.create(matterContainer.clientWidth / 2, matterContainer.clientHeight + THICCNESS / 2));\n            // reposition right wall\n            matter_js__WEBPACK_IMPORTED_MODULE_2__.Body.setPosition(rightWall, matter_js__WEBPACK_IMPORTED_MODULE_2__.Vector.create(matterContainer.clientWidth + THICCNESS / 2, matterContainer.clientHeight / 2));\n            matter_js__WEBPACK_IMPORTED_MODULE_2__.Body.setPosition(ball, matter_js__WEBPACK_IMPORTED_MODULE_2__.Vector.create(matterContainer.clientWidth / 8, matterContainer.clientHeight / 3));\n        }\n        // const explosion = (engine, delta) => {\n        //   const timeScale = 1000 / 60 / delta;\n        //   const bodies = Composite.allBodies(engine.world);\n        //   for (let i = 0; i < bodies.length; i++) {\n        //     const body = bodies[i];\n        //     if (!body.isStatic && body.position.y >= 500) {\n        //       // scale force for mass and time applied\n        //       const forceMagnitude = 0.05 * body.mass * timeScale;\n        //       // apply the force over a single update\n        //       Body.applyForce(body, body.position, {\n        //         x:\n        //           (forceMagnitude + Common.random() * forceMagnitude) *\n        //           Common.choose([1, -1]),\n        //         y: -forceMagnitude + Common.random() * -forceMagnitude,\n        //       });\n        //     }\n        //   }\n        // };\n        // let timeScaleTarget = 1;\n        // let lastTime = Common.now();\n        // Events.on(engine, \"afterUpdate\", (event) => {\n        //   const timeScale = (event.delta || 1000 / 60) / 1000;\n        //   // tween the timescale for bullet time slow-mo\n        //   engine.timing.timeScale +=\n        //     (timeScaleTarget - engine.timing.timeScale) * 12 * timeScale;\n        //   // every 2 sec (real time)\n        //   if (Common.now() - lastTime >= 2000) {\n        //     // flip the timescale\n        //     if (timeScaleTarget < 1) {\n        //       timeScaleTarget = 1;\n        //     } else {\n        //       timeScaleTarget = 0;\n        //     }\n        //     // create some random forces\n        //     explosion(engine, event.delta);\n        //     // update last time\n        //     lastTime = Common.now();\n        //   }\n        // });\n        if (didSmash) {\n            Composite.remove(engine.world, holdingThread);\n        }\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n            Render.stop(render);\n            Runner.stop(runner);\n        };\n    }, [\n        didSmash\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: matterContainerRef,\n        style: {\n            width: \"100%\",\n            height: \"100%\",\n            cursor: \"pointer\",\n            position: \"relative\",\n            pointerEvents: \"none\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                position: \"absolute\",\n                top: \"50%\",\n                left: \"50%\",\n                transform: \"translate(-50%, -50%)\",\n                pointerEvents: \"initial\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                style: {\n                    cursor: \"pointer\"\n                },\n                onClick: ()=>{\n                    console.log(\"lol\");\n                    setDidSmash(true);\n                },\n                children: \"Click to smash!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Kartik jha\\\\Desktop\\\\Final-Port-Mk1\\\\components\\\\CanvasSecondary\\\\CanvasSecondary.jsx\",\n                lineNumber: 264,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Kartik jha\\\\Desktop\\\\Final-Port-Mk1\\\\components\\\\CanvasSecondary\\\\CanvasSecondary.jsx\",\n            lineNumber: 255,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Kartik jha\\\\Desktop\\\\Final-Port-Mk1\\\\components\\\\CanvasSecondary\\\\CanvasSecondary.jsx\",\n        lineNumber: 245,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CanvasSecondary, \"/Gtu1YLv5DKTsczN3VDh2FbZqZo=\");\n_c = CanvasSecondary;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CanvasSecondary);\nvar _c;\n$RefreshReg$(_c, \"CanvasSecondary\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhbnZhc1NlY29uZGFyeS9DYW52YXNTZWNvbmRhcnkuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyRDtBQVd4QztBQUVuQixNQUFNYyxrQkFBa0IsSUFBTTs7SUFDNUIsTUFBTUMscUJBQXFCYiw2Q0FBTUEsQ0FBQyxJQUFJO0lBQ3RDLE1BQU1jLFlBQVk7SUFDbEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdmLCtDQUFRQSxDQUFDLEtBQUs7SUFFOUNGLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNa0Isa0JBQWtCSixtQkFBbUJLLE9BQU87UUFFbEQsaUJBQWlCO1FBQ2pCLElBQUlDLFNBQVNqQix5REFBYSxFQUN4QmtCLFNBQVNsQix5REFBYSxFQUN0Qm1CLFNBQVNuQix5REFBYSxFQUN0Qm9CLFNBQVNwQix5REFBYSxFQUN0QnFCLFlBQVlyQiw0REFBZ0I7UUFFOUIsbUJBQW1CO1FBQ25CLElBQUlzQixTQUFTTCxPQUFPTSxNQUFNO1FBRTFCLG9CQUFvQjtRQUNwQixJQUFJQyxTQUFTTixPQUFPSyxNQUFNLENBQUM7WUFDekJFLFNBQVNWO1lBQ1RPLFFBQVFBO1lBQ1JJLFNBQVM7Z0JBQ1BDLE9BQU9aLGdCQUFnQmEsV0FBVztnQkFDbENDLFFBQVFkLGdCQUFnQmUsWUFBWTtnQkFDcENDLFlBQVk7Z0JBQ1pDLFlBQVksS0FBSztnQkFDakJDLG9CQUFvQixLQUFLO1lBQzNCO1FBQ0Y7UUFFQSxJQUFJQyxRQUFRL0IsdURBQWdCLENBQzFCWSxnQkFBZ0JhLFdBQVcsR0FBRyxHQUM5QmIsZ0JBQWdCZSxZQUFZLEdBQUcsR0FDL0IsR0FDQSxJQUNBLElBQ0EsR0FDQSxTQUFVSyxDQUFDLEVBQUVDLENBQUMsRUFBRTtZQUNkLE9BQU9oQixPQUFPaUIsU0FBUyxDQUFDRixHQUFHQyxHQUFHLElBQUk7UUFDcEM7UUFHRixJQUFJRSxTQUFTbEIsT0FBT2lCLFNBQVMsQ0FDM0J0QixnQkFBZ0JhLFdBQVcsR0FBRyxHQUM5QmIs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TEMsTUFBTTtnQkFDTkMsV0FBVztnQkFDWEgsZUFBZTtZQUNqQjtzQkFFQSw0RUFBQ0k7Z0JBQ0NQLE9BQU87b0JBQUVDLFFBQVE7Z0JBQVU7Z0JBQzNCTyxTQUFTLElBQU07b0JBQ2JDLFFBQVFDLEdBQUcsQ0FBQztvQkFDWmpFLFlBQVksSUFBSTtnQkFDbEI7MEJBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVDtHQXRRTUo7S0FBQUE7QUF3UU4sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYW52YXNTZWNvbmRhcnkvQ2FudmFzU2Vjb25kYXJ5LmpzeD81ZDFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1hdHRlciwge1xyXG4gIEJvZHksXHJcbiAgQ29tbW9uLFxyXG4gIENvbXBvc2l0ZXMsXHJcbiAgQ29uc3RyYWludCxcclxuICBFdmVudHMsXHJcbiAgTW91c2UsXHJcbiAgTW91c2VDb25zdHJhaW50LFxyXG4gIFZlY3RvcixcclxuICBXb3JsZCxcclxufSBmcm9tIFwibWF0dGVyLWpzXCI7XHJcblxyXG5jb25zdCBDYW52YXNTZWNvbmRhcnkgPSAoKSA9PiB7XHJcbiAgY29uc3QgbWF0dGVyQ29udGFpbmVyUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IFRISUNDTkVTUyA9IDYwO1xyXG4gIGNvbnN0IFtkaWRTbWFzaCwgc2V0RGlkU21hc2hdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgbWF0dGVyQ29udGFpbmVyID0gbWF0dGVyQ29udGFpbmVyUmVmLmN1cnJlbnQ7XHJcblxyXG4gICAgLy8gbW9kdWxlIGFsaWFzZXNcclxuICAgIHZhciBFbmdpbmUgPSBNYXR0ZXIuRW5naW5lLFxyXG4gICAgICBSZW5kZXIgPSBNYXR0ZXIuUmVuZGVyLFxyXG4gICAgICBSdW5uZXIgPSBNYXR0ZXIuUnVubmVyLFxyXG4gICAgICBCb2RpZXMgPSBNYXR0ZXIuQm9kaWVzLFxyXG4gICAgICBDb21wb3NpdGUgPSBNYXR0ZXIuQ29tcG9zaXRlO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBhbiBlbmdpbmVcclxuICAgIHZhciBlbmdpbmUgPSBFbmdpbmUuY3JlYXRlKCk7XHJcblxyXG4gICAgLy8gY3JlYXRlIGEgcmVuZGVyZXJcclxuICAgIHZhciByZW5kZXIgPSBSZW5kZXIuY3JlYXRlKHtcclxuICAgICAgZWxlbWVudDogbWF0dGVyQ29udGFpbmVyLFxyXG4gICAgICBlbmdpbmU6IGVuZ2luZSxcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIHdpZHRoOiBtYXR0ZXJDb250YWluZXIuY2xpZW50V2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0LFxyXG4gICAgICAgIGJhY2tncm91bmQ6IFwiIzEzMTMxNFwiLFxyXG4gICAgICAgIHdpcmVmcmFtZXM6IGZhbHNlLFxyXG4gICAgICAgIHNob3dBbmdsZUluZGljYXRvcjogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgc3RhY2sgPSBDb21wb3NpdGVzLnN0YWNrKFxyXG4gICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50V2lkdGggLyAyLFxyXG4gICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0IC8gMixcclxuICAgICAgNSxcclxuICAgICAgMTAsXHJcbiAgICAgIDEwLFxyXG4gICAgICAwLFxyXG4gICAgICBmdW5jdGlvbiAoeCwgeSkge1xyXG4gICAgICAgIHJldHVybiBCb2RpZXMucmVjdGFuZ2xlKHgsIHksIDQwLCA0MCk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgdmFyIGdyb3VuZCA9IEJvZGllcy5yZWN0YW5nbGUoXHJcbiAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRXaWR0aCAvIDIsXHJcbiAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRIZWlnaHQgKyBUSElDQ05FU1MgLyAyLFxyXG4gICAgICAyNzE4NCxcclxuICAgICAgVEhJQ0NORVNTLFxyXG4gICAgICB7IGlzU3RhdGljOiB0cnVlIH1cclxuICAgICk7XHJcblxyXG4gICAgbGV0IGxlZnRXYWxsID0gQm9kaWVzLnJlY3RhbmdsZShcclxuICAgICAgMCAtIFRISUNDTkVTUyAvIDIsXHJcbiAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRIZWlnaHQgLyAyLFxyXG4gICAgICBUSElDQ05FU1MsXHJcbiAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRIZWlnaHQgKiA1LFxyXG4gICAgICB7XHJcbiAgICAgICAgaXNTdGF0aWM6IHRydWUsXHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgbGV0IHJpZ2h0V2FsbCA9IEJvZGllcy5yZWN0YW5nbGUoXHJcbiAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRXaWR0aCArIFRISUNDTkVTUyAvIDIsXHJcbiAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRIZWlnaHQgLyAyLFxyXG4gICAgICBUSElDQ05FU1MsXHJcbiAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRIZWlnaHQgKiA1LFxyXG4gICAgICB7IGlzU3RhdGljOiB0cnVlIH1cclxuICAgICk7XHJcblxyXG4gICAgLy8gYWRkIGFsbCBvZiB0aGUgYm9kaWVzIHRvIHRoZSB3b3JsZFxyXG4gICAgQ29tcG9zaXRlLmFkZChlbmdpbmUud29ybGQsIFtncm91bmQsIGxlZnRXYWxsLCByaWdodFdhbGwsIHN0YWNrXSk7XHJcblxyXG4gICAgdmFyIG1vdXNlID0gTW91c2UuY3JlYXRlKHJlbmRlci5jYW52YXMpLFxyXG4gICAgICBtb3VzZUNvbnN0cmFpbnQgPSBNb3VzZUNvbnN0cmFpbnQuY3JlYXRlKGVuZ2luZSwge1xyXG4gICAgICAgIG1vdXNlOiBtb3VzZSxcclxuICAgICAgICBjb25zdHJhaW50OiB7XHJcbiAgICAgICAgICBzdGlmZm5lc3M6IDAuMixcclxuICAgICAgICAgIHJlbmRlcjoge1xyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgQ29tcG9zaXRlLmFkZChlbmdpbmUud29ybGQsIG1vdXNlQ29uc3RyYWludCk7XHJcblxyXG4gICAgdmFyIGJhbGwgPSBCb2RpZXMuY2lyY2xlKFxyXG4gICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50V2lkdGggLyA4LFxyXG4gICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0IC8gMyxcclxuICAgICAgNTAsXHJcbiAgICAgIHtcclxuICAgICAgICBkZW5zaXR5OiAwLjA1LFxyXG4gICAgICAgIGZyaWN0aW9uQWlyOiAwLjAwNSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBDb21wb3NpdGUuYWRkKGVuZ2luZS53b3JsZCwgYmFsbCk7XHJcblxyXG4gICAgQ29tcG9zaXRlLmFkZChcclxuICAgICAgZW5naW5lLndvcmxkLFxyXG4gICAgICBDb25zdHJhaW50LmNyZWF0ZSh7XHJcbiAgICAgICAgcG9pbnRBOiB7XHJcbiAgICAgICAgICB4OiBtYXR0ZXJDb250YWluZXIuY2xpZW50V2lkdGggLyAyLjUsXHJcbiAgICAgICAgICB5OiBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0IC8gNCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHlCOiBiYWxsLFxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICB2YXIgaG9sZGluZ1RocmVhZCA9IENvbnN0cmFpbnQuY3JlYXRlKHtcclxuICAgICAgcG9pbnRBOiB7XHJcbiAgICAgICAgeDogMzAwLFxyXG4gICAgICAgIHk6IDEwMCxcclxuICAgICAgfSxcclxuICAgICAgYm9keUI6IGJhbGwsXHJcbiAgICB9KTtcclxuXHJcbiAgICBDb21wb3NpdGUuYWRkKGVuZ2luZS53b3JsZCwgaG9sZGluZ1RocmVhZCk7XHJcblxyXG4gICAgLy8gYWxsb3cgc2Nyb2xsIHRocm91Z2ggdGhlIGNhbnZhc1xyXG4gICAgbW91c2VDb25zdHJhaW50Lm1vdXNlLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcclxuICAgICAgXCJtb3VzZXdoZWVsXCIsXHJcbiAgICAgIG1vdXNlQ29uc3RyYWludC5tb3VzZS5tb3VzZXdoZWVsXHJcbiAgICApO1xyXG4gICAgbW91c2VDb25zdHJhaW50Lm1vdXNlLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcclxuICAgICAgXCJET01Nb3VzZVNjcm9sbFwiLFxyXG4gICAgICBtb3VzZUNvbnN0cmFpbnQubW91c2UubW91c2V3aGVlbFxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBydW4gdGhlIHJlbmRlcmVyXHJcbiAgICBSZW5kZXIucnVuKHJlbmRlcik7XHJcblxyXG4gICAgLy8gY3JlYXRlIHJ1bm5lclxyXG4gICAgdmFyIHJ1bm5lciA9IFJ1bm5lci5jcmVhdGUoKTtcclxuXHJcbiAgICAvLyBydW4gdGhlIGVuZ2luZVxyXG4gICAgUnVubmVyLnJ1bihydW5uZXIsIGVuZ2luZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlUmVzaXplKCkge1xyXG4gICAgICAvLyBzZXQgY2FudmFzIHNpemUgdG8gbmV3IHZhbHVlc1xyXG4gICAgICByZW5kZXIuY2FudmFzLndpZHRoID0gbWF0dGVyQ29udGFpbmVyLmNsaWVudFdpZHRoO1xyXG4gICAgICByZW5kZXIuY2FudmFzLmhlaWdodCA9IG1hdHRlckNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XHJcblxyXG4gICAgICAvLyByZXBvc2l0aW9uIGdyb3VuZFxyXG4gICAgICBCb2R5LnNldFBvc2l0aW9uKFxyXG4gICAgICAgIGdyb3VuZCxcclxuICAgICAgICBWZWN0b3IuY3JlYXRlKFxyXG4gICAgICAgICAgbWF0dGVyQ29udGFpbmVyLmNsaWVudFdpZHRoIC8gMixcclxuICAgICAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRIZWlnaHQgKyBUSElDQ05FU1MgLyAyXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgLy8gcmVwb3NpdGlvbiByaWdodCB3YWxsXHJcbiAgICAgIEJvZHkuc2V0UG9zaXRpb24oXHJcbiAgICAgICAgcmlnaHRXYWxsLFxyXG4gICAgICAgIFZlY3Rvci5jcmVhdGUoXHJcbiAgICAgICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50V2lkdGggKyBUSElDQ05FU1MgLyAyLFxyXG4gICAgICAgICAgbWF0dGVyQ29udGFpbmVyLmNsaWVudEhlaWdodCAvIDJcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBCb2R5LnNldFBvc2l0aW9uKFxyXG4gICAgICAgIGJhbGwsXHJcbiAgICAgICAgVmVjdG9yLmNyZWF0ZShcclxuICAgICAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRXaWR0aCAvIDgsXHJcbiAgICAgICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0IC8gM1xyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb25zdCBleHBsb3Npb24gPSAoZW5naW5lLCBkZWx0YSkgPT4ge1xyXG4gICAgLy8gICBjb25zdCB0aW1lU2NhbGUgPSAxMDAwIC8gNjAgLyBkZWx0YTtcclxuICAgIC8vICAgY29uc3QgYm9kaWVzID0gQ29tcG9zaXRlLmFsbEJvZGllcyhlbmdpbmUud29ybGQpO1xyXG5cclxuICAgIC8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICBjb25zdCBib2R5ID0gYm9kaWVzW2ldO1xyXG5cclxuICAgIC8vICAgICBpZiAoIWJvZHkuaXNTdGF0aWMgJiYgYm9keS5wb3NpdGlvbi55ID49IDUwMCkge1xyXG4gICAgLy8gICAgICAgLy8gc2NhbGUgZm9yY2UgZm9yIG1hc3MgYW5kIHRpbWUgYXBwbGllZFxyXG4gICAgLy8gICAgICAgY29uc3QgZm9yY2VNYWduaXR1ZGUgPSAwLjA1ICogYm9keS5tYXNzICogdGltZVNjYWxlO1xyXG5cclxuICAgIC8vICAgICAgIC8vIGFwcGx5IHRoZSBmb3JjZSBvdmVyIGEgc2luZ2xlIHVwZGF0ZVxyXG4gICAgLy8gICAgICAgQm9keS5hcHBseUZvcmNlKGJvZHksIGJvZHkucG9zaXRpb24sIHtcclxuICAgIC8vICAgICAgICAgeDpcclxuICAgIC8vICAgICAgICAgICAoZm9yY2VNYWduaXR1ZGUgKyBDb21tb24ucmFuZG9tKCkgKiBmb3JjZU1hZ25pdHVkZSkgKlxyXG4gICAgLy8gICAgICAgICAgIENvbW1vbi5jaG9vc2UoWzEsIC0xXSksXHJcbiAgICAvLyAgICAgICAgIHk6IC1mb3JjZU1hZ25pdHVkZSArIENvbW1vbi5yYW5kb20oKSAqIC1mb3JjZU1hZ25pdHVkZSxcclxuICAgIC8vICAgICAgIH0pO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgfVxyXG4gICAgLy8gfTtcclxuXHJcbiAgICAvLyBsZXQgdGltZVNjYWxlVGFyZ2V0ID0gMTtcclxuICAgIC8vIGxldCBsYXN0VGltZSA9IENvbW1vbi5ub3coKTtcclxuXHJcbiAgICAvLyBFdmVudHMub24oZW5naW5lLCBcImFmdGVyVXBkYXRlXCIsIChldmVudCkgPT4ge1xyXG4gICAgLy8gICBjb25zdCB0aW1lU2NhbGUgPSAoZXZlbnQuZGVsdGEgfHwgMTAwMCAvIDYwKSAvIDEwMDA7XHJcblxyXG4gICAgLy8gICAvLyB0d2VlbiB0aGUgdGltZXNjYWxlIGZvciBidWxsZXQgdGltZSBzbG93LW1vXHJcbiAgICAvLyAgIGVuZ2luZS50aW1pbmcudGltZVNjYWxlICs9XHJcbiAgICAvLyAgICAgKHRpbWVTY2FsZVRhcmdldCAtIGVuZ2luZS50aW1pbmcudGltZVNjYWxlKSAqIDEyICogdGltZVNjYWxlO1xyXG5cclxuICAgIC8vICAgLy8gZXZlcnkgMiBzZWMgKHJlYWwgdGltZSlcclxuICAgIC8vICAgaWYgKENvbW1vbi5ub3coKSAtIGxhc3RUaW1lID49IDIwMDApIHtcclxuICAgIC8vICAgICAvLyBmbGlwIHRoZSB0aW1lc2NhbGVcclxuICAgIC8vICAgICBpZiAodGltZVNjYWxlVGFyZ2V0IDwgMSkge1xyXG4gICAgLy8gICAgICAgdGltZVNjYWxlVGFyZ2V0ID0gMTtcclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgdGltZVNjYWxlVGFyZ2V0ID0gMDtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIC8vIGNyZWF0ZSBzb21lIHJhbmRvbSBmb3JjZXNcclxuICAgIC8vICAgICBleHBsb3Npb24oZW5naW5lLCBldmVudC5kZWx0YSk7XHJcblxyXG4gICAgLy8gICAgIC8vIHVwZGF0ZSBsYXN0IHRpbWVcclxuICAgIC8vICAgICBsYXN0VGltZSA9IENvbW1vbi5ub3coKTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgaWYgKGRpZFNtYXNoKSB7XHJcbiAgICAgIENvbXBvc2l0ZS5yZW1vdmUoZW5naW5lLndvcmxkLCBob2xkaW5nVGhyZWFkKTtcclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuICAgICAgUmVuZGVyLnN0b3AocmVuZGVyKTtcclxuICAgICAgUnVubmVyLnN0b3AocnVubmVyKTtcclxuICAgIH07XHJcbiAgfSwgW2RpZFNtYXNoXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHJlZj17bWF0dGVyQ29udGFpbmVyUmVmfVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgdG9wOiBcIjUwJVwiLFxyXG4gICAgICAgICAgbGVmdDogXCI1MCVcIixcclxuICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIixcclxuICAgICAgICAgIHBvaW50ZXJFdmVudHM6IFwiaW5pdGlhbFwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9sXCIpO1xyXG4gICAgICAgICAgICBzZXREaWRTbWFzaCh0cnVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQ2xpY2sgdG8gc21hc2ghXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbnZhc1NlY29uZGFyeTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJNYXR0ZXIiLCJCb2R5IiwiQ29tbW9uIiwiQ29tcG9zaXRlcyIsIkNvbnN0cmFpbnQiLCJFdmVudHMiLCJNb3VzZSIsIk1vdXNlQ29uc3RyYWludCIsIlZlY3RvciIsIldvcmxkIiwiQ2FudmFzU2Vjb25kYXJ5IiwibWF0dGVyQ29udGFpbmVyUmVmIiwiVEhJQ0NORVNTIiwiZGlkU21hc2giLCJzZXREaWRTbWFzaCIsIm1hdHRlckNvbnRhaW5lciIsImN1cnJlbnQiLCJFbmdpbmUiLCJSZW5kZXIiLCJSdW5uZXIiLCJCb2RpZXMiLCJDb21wb3NpdGUiLCJlbmdpbmUiLCJjcmVhdGUiLCJyZW5kZXIiLCJlbGVtZW50Iiwib3B0aW9ucyIsIndpZHRoIiwiY2xpZW50V2lkdGgiLCJoZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJiYWNrZ3JvdW5kIiwid2lyZWZyYW1lcyIsInNob3dBbmdsZUluZGljYXRvciIsInN0YWNrIiwieCIsInkiLCJyZWN0YW5nbGUiLCJncm91bmQiLCJpc1N0YXRpYyIsImxlZnRXYWxsIiwicmlnaHRXYWxsIiwiYWRkIiwid29ybGQiLCJtb3VzZSIsImNhbnZhcyIsIm1vdXNlQ29uc3RyYWludCIsImNvbnN0cmFpbnQiLCJzdGlmZm5lc3MiLCJ2aXNpYmxlIiwiYmFsbCIsImNpcmNsZSIsImRlbnNpdHkiLCJmcmljdGlvbkFpciIsInBvaW50QSIsImJvZHlCIiwiaG9sZGluZ1RocmVhZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtb3VzZXdoZWVsIiwicnVuIiwicnVubmVyIiwiaGFuZGxlUmVzaXplIiwic2V0UG9zaXRpb24iLCJyZW1vdmUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcCIsImRpdiIsInJlZiIsInN0eWxlIiwiY3Vyc29yIiwicG9zaXRpb24iLCJwb2ludGVyRXZlbnRzIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CanvasSecondary/CanvasSecondary.jsx\n"));

/***/ })

});