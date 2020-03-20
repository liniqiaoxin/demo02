"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Pop = _interopRequireDefault(require("./components/Pop"));

var _Bat = _interopRequireDefault(require("./components/Bat"));

var _Res = _interopRequireDefault(require("./components/Res"));

require("font-awesome/css/font-awesome.min.css");

var _reactRouterDom = require("react-router-dom");

var _Nav = _interopRequireDefault(require("./components/Nav"));

require("@/styles/index.less");

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

_reactDom.default.render(_react.default.createElement(_reactRouterDom.HashRouter, null, _react.default.createElement("div", null, _react.default.createElement(_Nav.default, null), _react.default.createElement(_reactRouterDom.Switch, null, _react.default.createElement(_reactRouterDom.Route, {
  exact: true,
  path: "/",
  component: _Pop.default
}), _react.default.createElement(_reactRouterDom.Route, {
  path: "/Battle",
  component: _Bat.default
}), _react.default.createElement(_reactRouterDom.Route, {
  path: "/result",
  component: _Res.default
}), _react.default.createElement(_reactRouterDom.Redirect, {
  to: "/"
})))), document.getElementById("app"));