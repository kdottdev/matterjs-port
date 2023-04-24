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

/***/ "./components/CanvasHeader/CanvasHeader.jsx":
/*!**************************************************!*\
  !*** ./components/CanvasHeader/CanvasHeader.jsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! matter-js */ \"./node_modules/matter-js/build/matter.js\");\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst CanvasHeader = ()=>{\n    _s();\n    const matterContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const THICCNESS = 60;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const matterContainer = matterContainerRef.current;\n        // module aliases\n        var Engine = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Engine), Render = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Render), Runner = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Runner), Bodies = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Bodies), Composite = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Composite);\n        // create an engine\n        var engine = Engine.create();\n        // create a renderer\n        var render = Render.create({\n            element: matterContainer,\n            engine: engine,\n            options: {\n                width: matterContainer.clientWidth,\n                height: matterContainer.clientHeight,\n                background: \"#131314\",\n                wireframes: false,\n                showAngleIndicator: false\n            }\n        });\n        const smallestRadius = matter_js__WEBPACK_IMPORTED_MODULE_2__.Common.random(8, 16);\n        const smallRadius = matter_js__WEBPACK_IMPORTED_MODULE_2__.Common.random(16, 32);\n        const largeRadius = matter_js__WEBPACK_IMPORTED_MODULE_2__.Common.random(32, 64);\n        const largestRadius = matter_js__WEBPACK_IMPORTED_MODULE_2__.Common.random(64, 72);\n        // create bodies and setup the simulation\n        for(let i = 0; i < 25; i++){\n            let circle = Bodies.circle(i, 10, smallestRadius, {\n                friction: 0.3,\n                frictionAir: 0.00001,\n                restitution: 0.8,\n                render: {\n                    strokeStyle: \"#ffc400\",\n                    fillStyle: \"transparent\",\n                    lineWidth: 5\n                }\n            });\n            Composite.add(engine.world, circle);\n        }\n        for(let i = 0; i < 25; i++){\n            let circle = Bodies.circle(i, 10, smallRadius, {\n                friction: 0.3,\n                frictionAir: 0.00001,\n                restitution: 0.7,\n                render: {\n                    strokeStyle: \"#00ff7f\",\n                    fillStyle: \"transparent\",\n                    lineWidth: 5\n                }\n            });\n            Composite.add(engine.world, circle);\n        }\n        for(let i = 0; i < 25; i++){\n            let circle = Bodies.circle(i, 10, largeRadius, {\n                friction: 0.3,\n                frictionAir: 0.00001,\n                restitution: 0.6,\n                render: {\n                    strokeStyle: \"#00e5ff\",\n                    fillStyle: \"transparent\",\n                    lineWidth: 5\n                }\n            });\n            Composite.add(engine.world, circle);\n        }\n        for(let i = 0; i < 25; i++){\n            let circle = Bodies.circle(i, 10, largestRadius, {\n                friction: 0.3,\n                frictionAir: 0.00001,\n                restitution: 0.5,\n                render: {\n                    strokeStyle: \"#9333ea\",\n                    fillStyle: \"transparent\",\n                    lineWidth: 5\n                }\n            });\n            Composite.add(engine.world, circle);\n        }\n        var ground = Bodies.rectangle(matterContainer.clientWidth / 2, matterContainer.clientHeight + THICCNESS / 2, 27184, THICCNESS, {\n            isStatic: true\n        });\n        let leftWall = Bodies.rectangle(0 - THICCNESS / 2, matterContainer.clientHeight / 2, THICCNESS, matterContainer.clientHeight * 5, {\n            isStatic: true\n        });\n        let rightWall = Bodies.rectangle(matterContainer.clientWidth + THICCNESS / 2, matterContainer.clientHeight / 2, THICCNESS, matterContainer.clientHeight * 5, {\n            isStatic: true\n        });\n        // add all of the bodies to the world\n        Composite.add(engine.world, [\n            ground,\n            leftWall,\n            rightWall\n        ]);\n        let mouse = matter_js__WEBPACK_IMPORTED_MODULE_2__.Mouse.create(render.canvas);\n        let mouseConstraint = matter_js__WEBPACK_IMPORTED_MODULE_2__.MouseConstraint.create(engine, {\n            mouse: mouse,\n            constraint: {\n                stiffness: 0.2,\n                render: {\n                    visible: false\n                }\n            }\n        });\n        Composite.add(engine.world, mouseConstraint);\n        // allow scroll through the canvas\n        mouseConstraint.mouse.element.removeEventListener(\"mousewheel\", mouseConstraint.mouse.mousewheel);\n        mouseConstraint.mouse.element.removeEventListener(\"DOMMouseScroll\", mouseConstraint.mouse.mousewheel);\n        // run the renderer\n        Render.run(render);\n        // create runner\n        var runner = Runner.create();\n        // run the engine\n        Runner.run(runner, engine);\n        function handleResize() {\n            // set canvas size to new values\n            render.canvas.width = matterContainer.clientWidth;\n            render.canvas.height = matterContainer.clientHeight;\n            // reposition ground\n            matter_js__WEBPACK_IMPORTED_MODULE_2__.Body.setPosition(ground, matter_js__WEBPACK_IMPORTED_MODULE_2__.Vector.create(matterContainer.clientWidth / 2, matterContainer.clientHeight + THICCNESS / 2));\n            // reposition right wall\n            matter_js__WEBPACK_IMPORTED_MODULE_2__.Body.setPosition(rightWall, matter_js__WEBPACK_IMPORTED_MODULE_2__.Vector.create(matterContainer.clientWidth + THICCNESS / 2, matterContainer.clientHeight / 2));\n        }\n        const explosion = (engine, delta)=>{\n            const timeScale = 1000 / 60 / delta;\n            const bodies = Composite.allBodies(engine.world);\n            for(let i = 0; i < bodies.length; i++){\n                const body = bodies[i];\n                if (!body.isStatic && body.position.y >= 500) {\n                    // scale force for mass and time applied\n                    const forceMagnitude = 0.05 * body.mass * timeScale;\n                    // apply the force over a single update\n                    matter_js__WEBPACK_IMPORTED_MODULE_2__.Body.applyForce(body, body.position, {\n                        x: (forceMagnitude + matter_js__WEBPACK_IMPORTED_MODULE_2__.Common.random() * forceMagnitude) * matter_js__WEBPACK_IMPORTED_MODULE_2__.Common.choose([\n                            1,\n                            -1\n                        ]),\n                        y: -forceMagnitude + matter_js__WEBPACK_IMPORTED_MODULE_2__.Common.random() * -forceMagnitude\n                    });\n                }\n            }\n        };\n        let timeScaleTarget = 1;\n        let lastTime = matter_js__WEBPACK_IMPORTED_MODULE_2__.Common.now();\n        matter_js__WEBPACK_IMPORTED_MODULE_2__.Events.on(engine, \"afterUpdate\", (event)=>{\n            const timeScale = (event.delta || 1000 / 60) / 1000;\n            // tween the timescale for bullet time slow-mo\n            engine.timing.timeScale += (timeScaleTarget - engine.timing.timeScale) * 12 * timeScale;\n            // every 2 sec (real time)\n            if (matter_js__WEBPACK_IMPORTED_MODULE_2__.Common.now() - lastTime >= 2000) {\n                // flip the timescale\n                if (timeScaleTarget < 1) {\n                    timeScaleTarget = 1;\n                } else {\n                    timeScaleTarget = 0;\n                }\n                // create some random forces\n                explosion(engine, event.delta);\n                // update last time\n                lastTime = matter_js__WEBPACK_IMPORTED_MODULE_2__.Common.now();\n            }\n        });\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n            Render.stop(render);\n            Runner.stop(runner);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: matterContainerRef,\n        style: {\n            width: \"100%\",\n            height: \"100%\"\n        }\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Kartik jha\\\\Desktop\\\\Final-Port-Mk1\\\\components\\\\CanvasHeader\\\\CanvasHeader.jsx\",\n        lineNumber: 247,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CanvasHeader, \"EC5p7TwiwOKcS+IJQCwbrNix8j8=\");\n_c = CanvasHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CanvasHeader);\nvar _c;\n$RefreshReg$(_c, \"CanvasHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhbnZhc0hlYWRlci9DYW52YXNIZWFkZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFpRDtBQVE5QjtBQUVuQixNQUFNVSxlQUFlLElBQU07O0lBQ3pCLE1BQU1DLHFCQUFxQlQsNkNBQU1BLENBQUMsSUFBSTtJQUN0QyxNQUFNVSxZQUFZO0lBRWxCWCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTVksa0JBQWtCRixtQkFBbUJHLE9BQU87UUFFbEQsaUJBQWlCO1FBQ2pCLElBQUlDLFNBQVNaLHlEQUFhLEVBQ3hCYSxTQUFTYix5REFBYSxFQUN0QmMsU0FBU2QseURBQWEsRUFDdEJlLFNBQVNmLHlEQUFhLEVBQ3RCZ0IsWUFBWWhCLDREQUFnQjtRQUU5QixtQkFBbUI7UUFDbkIsSUFBSWlCLFNBQVNMLE9BQU9NLE1BQU07UUFFMUIsb0JBQW9CO1FBQ3BCLElBQUlDLFNBQVNOLE9BQU9LLE1BQU0sQ0FBQztZQUN6QkUsU0FBU1Y7WUFDVE8sUUFBUUE7WUFDUkksU0FBUztnQkFDUEMsT0FBT1osZ0JBQWdCYSxXQUFXO2dCQUNsQ0MsUUFBUWQsZ0JBQWdCZSxZQUFZO2dCQUNwQ0MsWUFBWTtnQkFDWkMsWUFBWSxLQUFLO2dCQUNqQkMsb0JBQW9CLEtBQUs7WUFDM0I7UUFDRjtRQUVBLE1BQU1DLGlCQUFpQjNCLG9EQUFhLENBQUMsR0FBRztRQUN4QyxNQUFNNkIsY0FBYzdCLG9EQUFhLENBQUMsSUFBSTtRQUN0QyxNQUFNOEIsY0FBYzlCLG9EQUFhLENBQUMsSUFBSTtRQUN0QyxNQUFNK0IsZ0JBQWdCL0Isb0RBQWEsQ0FBQyxJQUFJO1FBRXhDLHlDQUF5QztRQUN6QyxJQUFLLElBQUlnQyxJQUFJLEdBQUdBLElBQUksSUFBSUEsSUFBSztZQUMzQixJQUFJQyxTQUFTcEIsT0FBT29CLE1BQU0sQ0FBQ0QsR0FBRyxJQUFJTCxnQkFBZ0I7Z0JBQ2hETyxVQUFVO2dCQUNWQyxhQUFhO2dCQUNiQyxhQUFhO2dCQUNibkIsUUFBUTtv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LENBQUNvRTtvQkFDMUM7Z0JBQ0YsQ0FBQztZQUNIO1FBQ0Y7UUFFQSxJQUFJSyxrQkFBa0I7UUFDdEIsSUFBSUMsV0FBVzFFLGlEQUFVO1FBRXpCQyxnREFBUyxDQUFDYyxRQUFRLGVBQWUsQ0FBQzhELFFBQVU7WUFDMUMsTUFBTWhCLFlBQVksQ0FBQ2dCLE1BQU1qQixLQUFLLElBQUksT0FBTyxFQUFDLElBQUs7WUFFL0MsOENBQThDO1lBQzlDN0MsT0FBTytELE1BQU0sQ0FBQ2pCLFNBQVMsSUFDckIsQ0FBQ1ksa0JBQWtCMUQsT0FBTytELE1BQU0sQ0FBQ2pCLFNBQVMsSUFBSSxLQUFLQTtZQUVyRCwwQkFBMEI7WUFDMUIsSUFBSTdELGlEQUFVLEtBQUswRSxZQUFZLE1BQU07Z0JBQ25DLHFCQUFxQjtnQkFDckIsSUFBSUQsa0JBQWtCLEdBQUc7b0JBQ3ZCQSxrQkFBa0I7Z0JBQ3BCLE9BQU87b0JBQ0xBLGtCQUFrQjtnQkFDcEIsQ0FBQztnQkFFRCw0QkFBNEI7Z0JBQzVCZCxVQUFVNUMsUUFBUThELE1BQU1qQixLQUFLO2dCQUU3QixtQkFBbUI7Z0JBQ25CYyxXQUFXMUUsaURBQVU7WUFDdkIsQ0FBQztRQUNIO1FBRUErRSxPQUFPQyxnQkFBZ0IsQ0FBQyxVQUFVdkI7UUFFbEMsT0FBTyxJQUFNO1lBQ1hzQixPQUFPMUIsbUJBQW1CLENBQUMsVUFBVUk7WUFDckM5QyxPQUFPc0UsSUFBSSxDQUFDaEU7WUFDWkwsT0FBT3FFLElBQUksQ0FBQ3pCO1FBQ2Q7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQzBCO1FBQUlDLEtBQUs3RTtRQUFvQjhFLE9BQU87WUFBRWhFLE9BQU87WUFBUUUsUUFBUTtRQUFPOzs7Ozs7QUFFekU7R0E5T01qQjtLQUFBQTtBQWdQTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NhbnZhc0hlYWRlci9DYW52YXNIZWFkZXIuanN4PzU2NzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNYXR0ZXIsIHtcclxuICBCb2R5LFxyXG4gIENvbW1vbixcclxuICBFdmVudHMsXHJcbiAgTW91c2UsXHJcbiAgTW91c2VDb25zdHJhaW50LFxyXG4gIFZlY3RvcixcclxufSBmcm9tIFwibWF0dGVyLWpzXCI7XHJcblxyXG5jb25zdCBDYW52YXNIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgbWF0dGVyQ29udGFpbmVyUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IFRISUNDTkVTUyA9IDYwO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgbWF0dGVyQ29udGFpbmVyID0gbWF0dGVyQ29udGFpbmVyUmVmLmN1cnJlbnQ7XHJcblxyXG4gICAgLy8gbW9kdWxlIGFsaWFzZXNcclxuICAgIHZhciBFbmdpbmUgPSBNYXR0ZXIuRW5naW5lLFxyXG4gICAgICBSZW5kZXIgPSBNYXR0ZXIuUmVuZGVyLFxyXG4gICAgICBSdW5uZXIgPSBNYXR0ZXIuUnVubmVyLFxyXG4gICAgICBCb2RpZXMgPSBNYXR0ZXIuQm9kaWVzLFxyXG4gICAgICBDb21wb3NpdGUgPSBNYXR0ZXIuQ29tcG9zaXRlO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBhbiBlbmdpbmVcclxuICAgIHZhciBlbmdpbmUgPSBFbmdpbmUuY3JlYXRlKCk7XHJcblxyXG4gICAgLy8gY3JlYXRlIGEgcmVuZGVyZXJcclxuICAgIHZhciByZW5kZXIgPSBSZW5kZXIuY3JlYXRlKHtcclxuICAgICAgZWxlbWVudDogbWF0dGVyQ29udGFpbmVyLFxyXG4gICAgICBlbmdpbmU6IGVuZ2luZSxcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIHdpZHRoOiBtYXR0ZXJDb250YWluZXIuY2xpZW50V2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0LFxyXG4gICAgICAgIGJhY2tncm91bmQ6IFwiIzEzMTMxNFwiLFxyXG4gICAgICAgIHdpcmVmcmFtZXM6IGZhbHNlLFxyXG4gICAgICAgIHNob3dBbmdsZUluZGljYXRvcjogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzbWFsbGVzdFJhZGl1cyA9IENvbW1vbi5yYW5kb20oOCwgMTYpO1xyXG4gICAgY29uc3Qgc21hbGxSYWRpdXMgPSBDb21tb24ucmFuZG9tKDE2LCAzMik7XHJcbiAgICBjb25zdCBsYXJnZVJhZGl1cyA9IENvbW1vbi5yYW5kb20oMzIsIDY0KTtcclxuICAgIGNvbnN0IGxhcmdlc3RSYWRpdXMgPSBDb21tb24ucmFuZG9tKDY0LCA3Mik7XHJcblxyXG4gICAgLy8gY3JlYXRlIGJvZGllcyBhbmQgc2V0dXAgdGhlIHNpbXVsYXRpb25cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjU7IGkrKykge1xyXG4gICAgICBsZXQgY2lyY2xlID0gQm9kaWVzLmNpcmNsZShpLCAxMCwgc21hbGxlc3RSYWRpdXMsIHtcclxuICAgICAgICBmcmljdGlvbjogMC4zLFxyXG4gICAgICAgIGZyaWN0aW9uQWlyOiAwLjAwMDAxLFxyXG4gICAgICAgIHJlc3RpdHV0aW9uOiAwLjgsXHJcbiAgICAgICAgcmVuZGVyOiB7XHJcbiAgICAgICAgICBzdHJva2VTdHlsZTogXCIjZmZjNDAwXCIsXHJcbiAgICAgICAgICBmaWxsU3R5bGU6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgICAgIGxpbmVXaWR0aDogNSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgQ29tcG9zaXRlLmFkZChlbmdpbmUud29ybGQsIGNpcmNsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNTsgaSsrKSB7XHJcbiAgICAgIGxldCBjaXJjbGUgPSBCb2RpZXMuY2lyY2xlKGksIDEwLCBzbWFsbFJhZGl1cywge1xyXG4gICAgICAgIGZyaWN0aW9uOiAwLjMsXHJcbiAgICAgICAgZnJpY3Rpb25BaXI6IDAuMDAwMDEsXHJcbiAgICAgICAgcmVzdGl0dXRpb246IDAuNyxcclxuICAgICAgICByZW5kZXI6IHtcclxuICAgICAgICAgIHN0cm9rZVN0eWxlOiBcIiMwMGZmN2ZcIixcclxuICAgICAgICAgIGZpbGxTdHlsZTogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgICAgbGluZVdpZHRoOiA1LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBDb21wb3NpdGUuYWRkKGVuZ2luZS53b3JsZCwgY2lyY2xlKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI1OyBpKyspIHtcclxuICAgICAgbGV0IGNpcmNsZSA9IEJvZGllcy5jaXJjbGUoaSwgMTAsIGxhcmdlUmFkaXVzLCB7XHJcbiAgICAgICAgZnJpY3Rpb246IDAuMyxcclxuICAgICAgICBmcmljdGlvbkFpcjogMC4wMDAwMSxcclxuICAgICAgICByZXN0aXR1dGlvbjogMC42LFxyXG4gICAgICAgIHJlbmRlcjoge1xyXG4gICAgICAgICAgc3Ryb2tlU3R5bGU6IFwiIzAwZTVmZlwiLFxyXG4gICAgICAgICAgZmlsbFN0eWxlOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgICBsaW5lV2lkdGg6IDUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIENvbXBvc2l0ZS5hZGQoZW5naW5lLndvcmxkLCBjaXJjbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjU7IGkrKykge1xyXG4gICAgICBsZXQgY2lyY2xlID0gQm9kaWVzLmNpcmNsZShpLCAxMCwgbGFyZ2VzdFJhZGl1cywge1xyXG4gICAgICAgIGZyaWN0aW9uOiAwLjMsXHJcbiAgICAgICAgZnJpY3Rpb25BaXI6IDAuMDAwMDEsXHJcbiAgICAgICAgcmVzdGl0dXRpb246IDAuNSxcclxuICAgICAgICByZW5kZXI6IHtcclxuICAgICAgICAgIHN0cm9rZVN0eWxlOiBcIiM5MzMzZWFcIixcclxuICAgICAgICAgIGZpbGxTdHlsZTogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgICAgbGluZVdpZHRoOiA1LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBDb21wb3NpdGUuYWRkKGVuZ2luZS53b3JsZCwgY2lyY2xlKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZ3JvdW5kID0gQm9kaWVzLnJlY3RhbmdsZShcclxuICAgICAgbWF0dGVyQ29udGFpbmVyLmNsaWVudFdpZHRoIC8gMixcclxuICAgICAgbWF0dGVyQ29udGFpbmVyLmNsaWVudEhlaWdodCArIFRISUNDTkVTUyAvIDIsXHJcbiAgICAgIDI3MTg0LFxyXG4gICAgICBUSElDQ05FU1MsXHJcbiAgICAgIHsgaXNTdGF0aWM6IHRydWUgfVxyXG4gICAgKTtcclxuXHJcbiAgICBsZXQgbGVmdFdhbGwgPSBCb2RpZXMucmVjdGFuZ2xlKFxyXG4gICAgICAwIC0gVEhJQ0NORVNTIC8gMixcclxuICAgICAgbWF0dGVyQ29udGFpbmVyLmNsaWVudEhlaWdodCAvIDIsXHJcbiAgICAgIFRISUNDTkVTUyxcclxuICAgICAgbWF0dGVyQ29udGFpbmVyLmNsaWVudEhlaWdodCAqIDUsXHJcbiAgICAgIHtcclxuICAgICAgICBpc1N0YXRpYzogdHJ1ZSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBsZXQgcmlnaHRXYWxsID0gQm9kaWVzLnJlY3RhbmdsZShcclxuICAgICAgbWF0dGVyQ29udGFpbmVyLmNsaWVudFdpZHRoICsgVEhJQ0NORVNTIC8gMixcclxuICAgICAgbWF0dGVyQ29udGFpbmVyLmNsaWVudEhlaWdodCAvIDIsXHJcbiAgICAgIFRISUNDTkVTUyxcclxuICAgICAgbWF0dGVyQ29udGFpbmVyLmNsaWVudEhlaWdodCAqIDUsXHJcbiAgICAgIHsgaXNTdGF0aWM6IHRydWUgfVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBhZGQgYWxsIG9mIHRoZSBib2RpZXMgdG8gdGhlIHdvcmxkXHJcbiAgICBDb21wb3NpdGUuYWRkKGVuZ2luZS53b3JsZCwgW2dyb3VuZCwgbGVmdFdhbGwsIHJpZ2h0V2FsbF0pO1xyXG5cclxuICAgIGxldCBtb3VzZSA9IE1vdXNlLmNyZWF0ZShyZW5kZXIuY2FudmFzKTtcclxuICAgIGxldCBtb3VzZUNvbnN0cmFpbnQgPSBNb3VzZUNvbnN0cmFpbnQuY3JlYXRlKGVuZ2luZSwge1xyXG4gICAgICBtb3VzZTogbW91c2UsXHJcbiAgICAgIGNvbnN0cmFpbnQ6IHtcclxuICAgICAgICBzdGlmZm5lc3M6IDAuMixcclxuICAgICAgICByZW5kZXI6IHtcclxuICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBDb21wb3NpdGUuYWRkKGVuZ2luZS53b3JsZCwgbW91c2VDb25zdHJhaW50KTtcclxuXHJcbiAgICAvLyBhbGxvdyBzY3JvbGwgdGhyb3VnaCB0aGUgY2FudmFzXHJcbiAgICBtb3VzZUNvbnN0cmFpbnQubW91c2UuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxyXG4gICAgICBcIm1vdXNld2hlZWxcIixcclxuICAgICAgbW91c2VDb25zdHJhaW50Lm1vdXNlLm1vdXNld2hlZWxcclxuICAgICk7XHJcbiAgICBtb3VzZUNvbnN0cmFpbnQubW91c2UuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxyXG4gICAgICBcIkRPTU1vdXNlU2Nyb2xsXCIsXHJcbiAgICAgIG1vdXNlQ29uc3RyYWludC5tb3VzZS5tb3VzZXdoZWVsXHJcbiAgICApO1xyXG5cclxuICAgIC8vIHJ1biB0aGUgcmVuZGVyZXJcclxuICAgIFJlbmRlci5ydW4ocmVuZGVyKTtcclxuXHJcbiAgICAvLyBjcmVhdGUgcnVubmVyXHJcbiAgICB2YXIgcnVubmVyID0gUnVubmVyLmNyZWF0ZSgpO1xyXG5cclxuICAgIC8vIHJ1biB0aGUgZW5naW5lXHJcbiAgICBSdW5uZXIucnVuKHJ1bm5lciwgZW5naW5lKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XHJcbiAgICAgIC8vIHNldCBjYW52YXMgc2l6ZSB0byBuZXcgdmFsdWVzXHJcbiAgICAgIHJlbmRlci5jYW52YXMud2lkdGggPSBtYXR0ZXJDb250YWluZXIuY2xpZW50V2lkdGg7XHJcbiAgICAgIHJlbmRlci5jYW52YXMuaGVpZ2h0ID0gbWF0dGVyQ29udGFpbmVyLmNsaWVudEhlaWdodDtcclxuXHJcbiAgICAgIC8vIHJlcG9zaXRpb24gZ3JvdW5kXHJcbiAgICAgIEJvZHkuc2V0UG9zaXRpb24oXHJcbiAgICAgICAgZ3JvdW5kLFxyXG4gICAgICAgIFZlY3Rvci5jcmVhdGUoXHJcbiAgICAgICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50V2lkdGggLyAyLFxyXG4gICAgICAgICAgbWF0dGVyQ29udGFpbmVyLmNsaWVudEhlaWdodCArIFRISUNDTkVTUyAvIDJcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvLyByZXBvc2l0aW9uIHJpZ2h0IHdhbGxcclxuICAgICAgQm9keS5zZXRQb3NpdGlvbihcclxuICAgICAgICByaWdodFdhbGwsXHJcbiAgICAgICAgVmVjdG9yLmNyZWF0ZShcclxuICAgICAgICAgIG1hdHRlckNvbnRhaW5lci5jbGllbnRXaWR0aCArIFRISUNDTkVTUyAvIDIsXHJcbiAgICAgICAgICBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0IC8gMlxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBleHBsb3Npb24gPSAoZW5naW5lLCBkZWx0YSkgPT4ge1xyXG4gICAgICBjb25zdCB0aW1lU2NhbGUgPSAxMDAwIC8gNjAgLyBkZWx0YTtcclxuICAgICAgY29uc3QgYm9kaWVzID0gQ29tcG9zaXRlLmFsbEJvZGllcyhlbmdpbmUud29ybGQpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBib2R5ID0gYm9kaWVzW2ldO1xyXG5cclxuICAgICAgICBpZiAoIWJvZHkuaXNTdGF0aWMgJiYgYm9keS5wb3NpdGlvbi55ID49IDUwMCkge1xyXG4gICAgICAgICAgLy8gc2NhbGUgZm9yY2UgZm9yIG1hc3MgYW5kIHRpbWUgYXBwbGllZFxyXG4gICAgICAgICAgY29uc3QgZm9yY2VNYWduaXR1ZGUgPSAwLjA1ICogYm9keS5tYXNzICogdGltZVNjYWxlO1xyXG5cclxuICAgICAgICAgIC8vIGFwcGx5IHRoZSBmb3JjZSBvdmVyIGEgc2luZ2xlIHVwZGF0ZVxyXG4gICAgICAgICAgQm9keS5hcHBseUZvcmNlKGJvZHksIGJvZHkucG9zaXRpb24sIHtcclxuICAgICAgICAgICAgeDpcclxuICAgICAgICAgICAgICAoZm9yY2VNYWduaXR1ZGUgKyBDb21tb24ucmFuZG9tKCkgKiBmb3JjZU1hZ25pdHVkZSkgKlxyXG4gICAgICAgICAgICAgIENvbW1vbi5jaG9vc2UoWzEsIC0xXSksXHJcbiAgICAgICAgICAgIHk6IC1mb3JjZU1hZ25pdHVkZSArIENvbW1vbi5yYW5kb20oKSAqIC1mb3JjZU1hZ25pdHVkZSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgdGltZVNjYWxlVGFyZ2V0ID0gMTtcclxuICAgIGxldCBsYXN0VGltZSA9IENvbW1vbi5ub3coKTtcclxuXHJcbiAgICBFdmVudHMub24oZW5naW5lLCBcImFmdGVyVXBkYXRlXCIsIChldmVudCkgPT4ge1xyXG4gICAgICBjb25zdCB0aW1lU2NhbGUgPSAoZXZlbnQuZGVsdGEgfHwgMTAwMCAvIDYwKSAvIDEwMDA7XHJcblxyXG4gICAgICAvLyB0d2VlbiB0aGUgdGltZXNjYWxlIGZvciBidWxsZXQgdGltZSBzbG93LW1vXHJcbiAgICAgIGVuZ2luZS50aW1pbmcudGltZVNjYWxlICs9XHJcbiAgICAgICAgKHRpbWVTY2FsZVRhcmdldCAtIGVuZ2luZS50aW1pbmcudGltZVNjYWxlKSAqIDEyICogdGltZVNjYWxlO1xyXG5cclxuICAgICAgLy8gZXZlcnkgMiBzZWMgKHJlYWwgdGltZSlcclxuICAgICAgaWYgKENvbW1vbi5ub3coKSAtIGxhc3RUaW1lID49IDIwMDApIHtcclxuICAgICAgICAvLyBmbGlwIHRoZSB0aW1lc2NhbGVcclxuICAgICAgICBpZiAodGltZVNjYWxlVGFyZ2V0IDwgMSkge1xyXG4gICAgICAgICAgdGltZVNjYWxlVGFyZ2V0ID0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGltZVNjYWxlVGFyZ2V0ID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSBzb21lIHJhbmRvbSBmb3JjZXNcclxuICAgICAgICBleHBsb3Npb24oZW5naW5lLCBldmVudC5kZWx0YSk7XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSBsYXN0IHRpbWVcclxuICAgICAgICBsYXN0VGltZSA9IENvbW1vbi5ub3coKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgICBSZW5kZXIuc3RvcChyZW5kZXIpO1xyXG4gICAgICBSdW5uZXIuc3RvcChydW5uZXIpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHJlZj17bWF0dGVyQ29udGFpbmVyUmVmfSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX0gLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FudmFzSGVhZGVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJNYXR0ZXIiLCJCb2R5IiwiQ29tbW9uIiwiRXZlbnRzIiwiTW91c2UiLCJNb3VzZUNvbnN0cmFpbnQiLCJWZWN0b3IiLCJDYW52YXNIZWFkZXIiLCJtYXR0ZXJDb250YWluZXJSZWYiLCJUSElDQ05FU1MiLCJtYXR0ZXJDb250YWluZXIiLCJjdXJyZW50IiwiRW5naW5lIiwiUmVuZGVyIiwiUnVubmVyIiwiQm9kaWVzIiwiQ29tcG9zaXRlIiwiZW5naW5lIiwiY3JlYXRlIiwicmVuZGVyIiwiZWxlbWVudCIsIm9wdGlvbnMiLCJ3aWR0aCIsImNsaWVudFdpZHRoIiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiYmFja2dyb3VuZCIsIndpcmVmcmFtZXMiLCJzaG93QW5nbGVJbmRpY2F0b3IiLCJzbWFsbGVzdFJhZGl1cyIsInJhbmRvbSIsInNtYWxsUmFkaXVzIiwibGFyZ2VSYWRpdXMiLCJsYXJnZXN0UmFkaXVzIiwiaSIsImNpcmNsZSIsImZyaWN0aW9uIiwiZnJpY3Rpb25BaXIiLCJyZXN0aXR1dGlvbiIsInN0cm9rZVN0eWxlIiwiZmlsbFN0eWxlIiwibGluZVdpZHRoIiwiYWRkIiwid29ybGQiLCJncm91bmQiLCJyZWN0YW5nbGUiLCJpc1N0YXRpYyIsImxlZnRXYWxsIiwicmlnaHRXYWxsIiwibW91c2UiLCJjYW52YXMiLCJtb3VzZUNvbnN0cmFpbnQiLCJjb25zdHJhaW50Iiwic3RpZmZuZXNzIiwidmlzaWJsZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtb3VzZXdoZWVsIiwicnVuIiwicnVubmVyIiwiaGFuZGxlUmVzaXplIiwic2V0UG9zaXRpb24iLCJleHBsb3Npb24iLCJkZWx0YSIsInRpbWVTY2FsZSIsImJvZGllcyIsImFsbEJvZGllcyIsImxlbmd0aCIsImJvZHkiLCJwb3NpdGlvbiIsInkiLCJmb3JjZU1hZ25pdHVkZSIsIm1hc3MiLCJhcHBseUZvcmNlIiwieCIsImNob29zZSIsInRpbWVTY2FsZVRhcmdldCIsImxhc3RUaW1lIiwibm93Iiwib24iLCJldmVudCIsInRpbWluZyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wIiwiZGl2IiwicmVmIiwic3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CanvasHeader/CanvasHeader.jsx\n"));

/***/ })

});