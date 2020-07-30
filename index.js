"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactRouterDom = require("react-router-dom");

var _App = _interopRequireDefault(require("@/pages/App"));

require("font-awesome/css/font-awesome.min.css");

require("@/styles/index.less");

require("@/index.css");

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

_reactDom.default.render(_react.default.createElement(_reactRouterDom.HashRouter, null, _react.default.createElement(_App.default, null)), // <BrowserRouter>
//   <App />
// </BrowserRouter>
document.getElementById("app"));