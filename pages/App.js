"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Result = _interopRequireDefault(require("@/components/battle/Result"));

var _Header = _interopRequireDefault(require("@/components/popular/Header"));

require("@/styles/index.less");

var _loadable = _interopRequireDefault(require("@/util/loadable"));

var _myNavLink = _interopRequireDefault(require("@/components/popular/my-nav-link"));

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var Bat = (0, _loadable.default)(function () {
  return Promise.resolve().then(function () {
    return (0, _interopRequireWildcard2.default)(require("./Battle"));
  });
}); // const Result = loadable(() => import('@/components/battle/result'))

var App =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(App, _React$Component);

  function App() {
    (0, _classCallCheck2.default)(this, App);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(App).apply(this, arguments));
  }

  (0, _createClass2.default)(App, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement("div", {
        style: {
          marginTop: "30px",
          marginLeft: "50px"
        }
      }, _react.default.createElement(_myNavLink.default, {
        className: "list-group-item",
        to: "/popular"
      }, "Popular"), "\xA0\xA0", _react.default.createElement(_myNavLink.default, {
        className: "list-group-item",
        to: "/battle"
      }, "Battle")), _react.default.createElement(_reactRouterDom.Switch, null, _react.default.createElement(_reactRouterDom.Route, {
        path: "/battle/result/:firstName/:lastName",
        component: _Result.default
      }), _react.default.createElement(_reactRouterDom.Route, {
        path: "/popular",
        component: _Header.default
      }), _react.default.createElement(_reactRouterDom.Route, {
        path: "/battle/",
        component: Bat
      }), _react.default.createElement(_reactRouterDom.Redirect, {
        to: "/popular"
      })));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return App;
}(_react.default.Component);

exports.default = App;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Bat, "Bat", "D:\\linqiaoxindewenjian\\zuoye\\gitbubtwo\\demo02\\demo02\\src\\pages\\App.js");
  reactHotLoader.register(App, "App", "D:\\linqiaoxindewenjian\\zuoye\\gitbubtwo\\demo02\\demo02\\src\\pages\\App.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();