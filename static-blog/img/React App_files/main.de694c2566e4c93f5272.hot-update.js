webpackHotUpdate("main",{

/***/ "./src/TodoInput.tsx":
/*!***************************!*\
  !*** ./src/TodoInput.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TodoInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _todo_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-model */ "./src/todo-model.ts");
/* harmony import */ var _TodoInput_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoInput.css */ "./src/TodoInput.css");
/* harmony import */ var _TodoInput_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TodoInput_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/lubo/dev/fullstack-react-copy/07-todos-lab/src/TodoInput.tsx";



class TodoInput extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      text: ''
    };

    this.handleTodoSubmit = event => {
      event.preventDefault();
      this.props.onCreateTodo(new _todo_model__WEBPACK_IMPORTED_MODULE_1__["Todo"](this.state.text));
    };

    this.handleTextChange = event => {
      this.setState({
        text: event.target.value
      });
    };
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.handleTodoSubmit,
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "todo-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }
    }, "What to do next?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      id: "todo-text",
      name: "todo-text",
      value: this.state.text,
      onChange: this.handleTextChange,
      type: "text",
      placeholder: "Add new Todo...",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "button",
      type: "submit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }
    }, "Add"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "button",
      type: "reset",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }
    }, "Reset"));
  }

}

/***/ })

})
//# sourceMappingURL=main.de694c2566e4c93f5272.hot-update.js.map