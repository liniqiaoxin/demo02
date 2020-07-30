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

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Popular = _interopRequireDefault(require("@/pages/Popular"));

var _MyNavLink = _interopRequireDefault(require("@/components/popular/My-nav-link"));

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var Header =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Header, _React$Component);

  function Header(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Header);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Header).call(this, props));
    _this.state = {
      messages: []
    };
    return _this;
  }

  (0, _createClass2.default)(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // 模拟发送ajax请求
      // setTimeout(() => {
      var data = [{
        title: "All",
        query: "All"
      }, {
        title: "JavaScript",
        query: "javascript"
      }, {
        title: "Ruby",
        query: "ruby"
      }, {
        title: "Java",
        query: "java"
      }, {
        title: "Css",
        query: "css"
      }];
      this.setState({
        messages: data
      }); // }, 500);
    }
  }, {
    key: "render",
    value: function render() {
      var path = this.props.match.path;
      return _react.default.createElement("div", null, _react.default.createElement("ul", {
        style: {
          display: "flex",
          justifyContent: "center",
          listStyleType: "none",
          flexDirection: "row",
          alignItems: "center"
        }
      }, this.state.messages.map(function (m, index) {
        return _react.default.createElement("li", {
          key: index
        }, _react.default.createElement(_MyNavLink.default, {
          to: // pathname: '/popular',
          // search: `?lang=${m.query}`,
          "".concat(path, "/").concat(m.query),
          query: m.query
        }, m.title), "\xA0\xA0\xA0");
      })), _react.default.createElement("hr", null), this.props.location.pathname === "/popular" ? _react.default.createElement(_reactRouterDom.Redirect, {
        to: "".concat(path, "/All")
      }) : "", _react.default.createElement(_reactRouterDom.Route, {
        path: "".concat(path, "/:query"),
        component: _Popular.default
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return Header;
}(_react.default.Component);

exports.default = Header;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Header, "Header", "D:\\linqiaoxindewenjian\\zuoye\\gitbubtwo\\demo02\\demo02\\src\\components\\popular\\Header.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();