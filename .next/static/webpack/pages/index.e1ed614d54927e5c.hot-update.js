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

/***/ "./components/ControlledCarousel.js":
/*!******************************************!*\
  !*** ./components/ControlledCarousel.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar ControlledCarousel = function(param) {\n    var info = param.info;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), index1 = ref[0], setIndex = ref[1];\n    var handleSelect = function(selectedIndex, e) {\n        setIndex(selectedIndex);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Carousel, {\n        activeIndex: index1,\n        onSelect: handleSelect,\n        className: \"d-none d-md-block\",\n        style: {\n            width: \"100%\",\n            padding: 30,\n            backgroundColor: \"#000\",\n            marginBottom: 30\n        },\n        children: info.map(function(item, index) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Carousel.Item, {\n                style: {\n                    width: \"100%\",\n                    padding: 30,\n                    backgroundColor: \"#009FE3\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {\n                    fluid: true,\n                    className: \"w-100 \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {\n                                md: 5,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"justify-content-center\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: \"d-block mx-auto\",\n                                        style: {\n                                            height: 300,\n                                            borderRadius: \"20px\",\n                                            border: \"20px solid #fff\"\n                                        },\n                                        src: item.attributes.link_image,\n                                        alt: \"First slide\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/daniel/Documents/precode/massagem/components/ControlledCarousel.js\",\n                                        lineNumber: 21,\n                                        columnNumber: 9\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"/Users/daniel/Documents/precode/massagem/components/ControlledCarousel.js\",\n                                    lineNumber: 20,\n                                    columnNumber: 7\n                                }, _this1)\n                            }, void 0, false, {\n                                fileName: \"/Users/daniel/Documents/precode/massagem/components/ControlledCarousel.js\",\n                                lineNumber: 18,\n                                columnNumber: 7\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {\n                                md: 5,\n                                style: {\n                                    color: \"#fff\",\n                                    textAlign: \"center\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: item.attributes.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/daniel/Documents/precode/massagem/components/ControlledCarousel.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 11\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        children: item.attributes.description\n                                    }, void 0, false, {\n                                        fileName: \"/Users/daniel/Documents/precode/massagem/components/ControlledCarousel.js\",\n                                        lineNumber: 32,\n                                        columnNumber: 11\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                                        fileName: \"/Users/daniel/Documents/precode/massagem/components/ControlledCarousel.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 11\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                style: {\n                                                    textDecorationLine: \"line-through\",\n                                                    textDecorationStyle: \"solid\",\n                                                    fontSize: 15\n                                                },\n                                                children: [\n                                                    \"de R$\",\n                                                    item.attributes.price.toLocaleString(\"pt-BR\")\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/daniel/Documents/precode/massagem/components/ControlledCarousel.js\",\n                                                lineNumber: 34,\n                                                columnNumber: 15\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"/Users/daniel/Documents/precode/massagem/components/ControlledCarousel.js\",\n                                                lineNumber: 35,\n                                                columnNumber: 11\n                                            }, _this1),\n                                            \" por R$ \",\n                                            item.attributes.price_promotional.toLocaleString(\"pt-BR\")\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/daniel/Documents/precode/massagem/components/ControlledCarousel.js\",\n                                        lineNumber: 34,\n                                        columnNumber: 11\n                                    }, _this1)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/daniel/Documents/precode/massagem/components/ControlledCarousel.js\",\n                                lineNumber: 29,\n                                columnNumber: 8\n                            }, _this1)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/daniel/Documents/precode/massagem/components/ControlledCarousel.js\",\n                        lineNumber: 17,\n                        columnNumber: 7\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"/Users/daniel/Documents/precode/massagem/components/ControlledCarousel.js\",\n                    lineNumber: 16,\n                    columnNumber: 7\n                }, _this1)\n            }, index, false, {\n                fileName: \"/Users/daniel/Documents/precode/massagem/components/ControlledCarousel.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/daniel/Documents/precode/massagem/components/ControlledCarousel.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this);\n};\n_s(ControlledCarousel, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = ControlledCarousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ControlledCarousel);\nvar _c;\n$RefreshReg$(_c, \"ControlledCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRyb2xsZWRDYXJvdXNlbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBeUU7QUFDcEM7O0FBRXJDLElBQU9PLGtCQUFrQixHQUFDLGdCQUFXO1FBQVRDLElBQUksU0FBSkEsSUFBSTs7O0lBQzlCLElBQTBCRixHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBSnZDLE1BSWMsR0FBY0EsR0FBVyxHQUF6QixFQUpkLFFBSXdCLEdBQUlBLEdBQVcsR0FBZjtJQUV0QixJQUFNSyxZQUFZLEdBQUcsU0FBQ0MsYUFBYSxFQUFFQyxDQUFDLEVBQUs7UUFDekNILFFBQVEsQ0FBQ0UsYUFBYSxDQUFDLENBQUM7S0FDekI7SUFFRCxxQkFDRSw4REFBQ1oscURBQVE7UUFBQ2MsV0FBVyxFQUFFTCxNQUFLO1FBQUVNLFFBQVEsRUFBRUosWUFBWTtRQUFFSyxTQUFTLEVBQUMsbUJBQW1CO1FBQUNDLEtBQUssRUFBRTtZQUFFQyxLQUFLLEVBQUMsTUFBTTtZQUFFQyxPQUFPLEVBQUMsRUFBRTtZQUFFQyxlQUFlLEVBQUMsTUFBTTtZQUFFQyxZQUFZLEVBQUMsRUFBRTtTQUFDO2tCQUU5SmIsSUFBSSxDQUFDYyxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFFZCxLQUFLO2lDQUNwQiw4REFBQ1QsMERBQWE7Z0JBQWFpQixLQUFLLEVBQUU7b0JBQUVDLEtBQUssRUFBQyxNQUFNO29CQUFFQyxPQUFPLEVBQUMsRUFBRTtvQkFBRUMsZUFBZSxFQUFDLFNBQVM7aUJBQUM7MEJBQ3hGLDRFQUFDbEIsc0RBQVM7b0JBQUN1QixLQUFLO29CQUFDVCxTQUFTLEVBQUMsUUFBUTs4QkFDbkMsNEVBQUNiLGdEQUFHOzswQ0FDSiw4REFBQ0MsZ0RBQUc7Z0NBQUNzQixFQUFFLEVBQUUsQ0FBQzswQ0FFViw0RUFBQ0MsS0FBRztvQ0FBQ1gsU0FBUyxFQUFDLHdCQUF3Qjs4Q0FDckMsNEVBQUNZLEtBQUc7d0NBQ0ZaLFNBQVMsRUFBQyxpQkFBaUI7d0NBQzNCQyxLQUFLLEVBQUU7NENBQUVZLE1BQU0sRUFBQyxHQUFHOzRDQUFFQyxZQUFZLEVBQUMsTUFBTTs0Q0FBRUMsTUFBTSxFQUFDLGlCQUFpQjt5Q0FBQzt3Q0FDbkVDLEdBQUcsRUFBRVQsSUFBSSxDQUFDVSxVQUFVLENBQUNDLFVBQVU7d0NBQy9CQyxHQUFHLEVBQUMsYUFBYTs7Ozs7OENBQ2pCOzs7OzswQ0FDRTs7Ozs7c0NBQ0M7MENBQ04sOERBQUMvQixnREFBRztnQ0FBQ3NCLEVBQUUsRUFBRSxDQUFDO2dDQUFFVCxLQUFLLEVBQUU7b0NBQUVtQixLQUFLLEVBQUMsTUFBTTtvQ0FBRUMsU0FBUyxFQUFDLFFBQVE7aUNBQUM7O2tEQUVuRCw4REFBQ0MsSUFBRTtrREFBRWYsSUFBSSxDQUFDVSxVQUFVLENBQUNNLEtBQUs7Ozs7OzhDQUFNO2tEQUNoQyw4REFBQ0MsSUFBRTtrREFBRWpCLElBQUksQ0FBQ1UsVUFBVSxDQUFDUSxXQUFXOzs7Ozs4Q0FBTTtrREFDdEMsOERBQUNDLElBQUU7Ozs7OENBQUU7a0RBQ0wsOERBQUNDLElBQUU7OzBEQUFDLDhEQUFDQyxNQUFJO2dEQUFDM0IsS0FBSyxFQUFFO29EQUFDNEIsa0JBQWtCLEVBQUUsY0FBYztvREFBRUMsbUJBQW1CLEVBQUUsT0FBTztvREFBRUMsUUFBUSxFQUFDLEVBQUU7aURBQUM7O29EQUFFLE9BQUs7b0RBQUN4QixJQUFJLENBQUNVLFVBQVUsQ0FBQ2UsS0FBSyxDQUFDQyxjQUFjLENBQUMsT0FBTyxDQUFDOzs7Ozs7c0RBQVE7MERBQzdKLDhEQUFDQyxJQUFFOzs7O3NEQUFFOzRDQUFBLFVBQVE7NENBQUMzQixJQUFJLENBQUNVLFVBQVUsQ0FBQ2tCLGlCQUFpQixDQUFDRixjQUFjLENBQUMsT0FBTyxDQUFDOzs7Ozs7OENBQU07Ozs7OztzQ0FDekU7Ozs7Ozs4QkFDRjs7Ozs7MEJBQ007ZUF2QlF4QyxLQUFLOzs7O3NCQXdCVDtTQUNqQixDQUFDOzs7OzthQUVTLENBQ1g7Q0FDSDtHQXhDTUYsa0JBQWtCO0FBQWxCQSxLQUFBQSxrQkFBa0I7QUEwQ3pCLCtEQUFlQSxrQkFBa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250cm9sbGVkQ2Fyb3VzZWwuanM/MDlmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJvdXNlbCwgQnV0dG9uLCAgQ29udGFpbmVyLCAgUm93LCBDb2x9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5cbmNvbnN0ICBDb250cm9sbGVkQ2Fyb3VzZWw9KHtpbmZvfSk9PiB7XG4gIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKHNlbGVjdGVkSW5kZXgsIGUpID0+IHtcbiAgICBzZXRJbmRleChzZWxlY3RlZEluZGV4KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDYXJvdXNlbCBhY3RpdmVJbmRleD17aW5kZXh9IG9uU2VsZWN0PXtoYW5kbGVTZWxlY3R9IGNsYXNzTmFtZT1cImQtbm9uZSBkLW1kLWJsb2NrXCIgc3R5bGU9e3sgd2lkdGg6JzEwMCUnLCBwYWRkaW5nOjMwLCBiYWNrZ3JvdW5kQ29sb3I6JyMwMDAnLCBtYXJnaW5Cb3R0b206MzB9fT5cblxuICAgIHtpbmZvLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgIDxDYXJvdXNlbC5JdGVtIGtleT17aW5kZXh9IHN0eWxlPXt7IHdpZHRoOicxMDAlJywgcGFkZGluZzozMCwgYmFja2dyb3VuZENvbG9yOicjMDA5RkUzJ319PlxuICAgICAgPENvbnRhaW5lciBmbHVpZCBjbGFzc05hbWU9XCJ3LTEwMCBcIj5cbiAgICAgIDxSb3cgPlxuICAgICAgPENvbCBtZD17NX0+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZC1ibG9jayBteC1hdXRvXCJcbiAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6MzAwLCBib3JkZXJSYWRpdXM6JzIwcHgnLCBib3JkZXI6JzIwcHggc29saWQgI2ZmZid9fVxuICAgICAgICAgIHNyYz17aXRlbS5hdHRyaWJ1dGVzLmxpbmtfaW1hZ2V9XG4gICAgICAgICAgYWx0PVwiRmlyc3Qgc2xpZGVcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICAgPC9Db2w+XG4gICAgICAgPENvbCBtZD17NX0gc3R5bGU9e3sgY29sb3I6JyNmZmYnLCB0ZXh0QWxpZ246J2NlbnRlcid9fT5cbiAgIFxuICAgICAgICAgIDxoMT57aXRlbS5hdHRyaWJ1dGVzLnRpdGxlfTwvaDE+XG4gICAgICAgICAgPGg0PntpdGVtLmF0dHJpYnV0ZXMuZGVzY3JpcHRpb259PC9oND5cbiAgICAgICAgICA8aHIvPlxuICAgICAgICAgIDxoMj48c3BhbiBzdHlsZT17e3RleHREZWNvcmF0aW9uTGluZTogJ2xpbmUtdGhyb3VnaCcsIHRleHREZWNvcmF0aW9uU3R5bGU6ICdzb2xpZCcsIGZvbnRTaXplOjE1fX0+ZGUgUiR7aXRlbS5hdHRyaWJ1dGVzLnByaWNlLnRvTG9jYWxlU3RyaW5nKCdwdC1CUicpfTwvc3Bhbj5cbiAgICAgICAgICA8YnIvPiBwb3IgUiQge2l0ZW0uYXR0cmlidXRlcy5wcmljZV9wcm9tb3Rpb25hbC50b0xvY2FsZVN0cmluZygncHQtQlInKX08L2gyPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0Nhcm91c2VsLkl0ZW0+XG4gICAgKSl9XG4gICAgICBcbiAgICA8L0Nhcm91c2VsPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sbGVkQ2Fyb3VzZWwiXSwibmFtZXMiOlsiQ2Fyb3VzZWwiLCJCdXR0b24iLCJDb250YWluZXIiLCJSb3ciLCJDb2wiLCJSZWFjdCIsInVzZVN0YXRlIiwiQ29udHJvbGxlZENhcm91c2VsIiwiaW5mbyIsImluZGV4Iiwic2V0SW5kZXgiLCJoYW5kbGVTZWxlY3QiLCJzZWxlY3RlZEluZGV4IiwiZSIsImFjdGl2ZUluZGV4Iiwib25TZWxlY3QiLCJjbGFzc05hbWUiLCJzdHlsZSIsIndpZHRoIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbkJvdHRvbSIsIm1hcCIsIml0ZW0iLCJJdGVtIiwiZmx1aWQiLCJtZCIsImRpdiIsImltZyIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsInNyYyIsImF0dHJpYnV0ZXMiLCJsaW5rX2ltYWdlIiwiYWx0IiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJoMSIsInRpdGxlIiwiaDQiLCJkZXNjcmlwdGlvbiIsImhyIiwiaDIiLCJzcGFuIiwidGV4dERlY29yYXRpb25MaW5lIiwidGV4dERlY29yYXRpb25TdHlsZSIsImZvbnRTaXplIiwicHJpY2UiLCJ0b0xvY2FsZVN0cmluZyIsImJyIiwicHJpY2VfcHJvbW90aW9uYWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ControlledCarousel.js\n");

/***/ })

});