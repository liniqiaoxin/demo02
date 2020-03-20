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

var _axios = _interopRequireDefault(require("axios"));

var _root = require("react-hot-loader/root");

var _reactRouterDom = require("react-router-dom");

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var Res =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Res, _React$Component);

  function Res(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Res);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Res).call(this, props));
    _this.state = {
      data1: {},
      data2: {}
    };
    return _this;
  }

  (0, _createClass2.default)(Res, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props$location$ = this.props.location.query,
          first = _this$props$location$.first,
          last = _this$props$location$.last;
      var url1 = "https://api.github.com/users/".concat(first);
      var url2 = "https://api.github.com/users/".concat(last);

      _axios.default.get(url1).then(function (res) {
        _this2.setState({
          data1: res.data
        });
      });

      _axios.default.get(url2).then(function (res) {
        _this2.setState({
          data2: res.data
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          data1 = _this$state.data1,
          data2 = _this$state.data2;
      console.log(data1, data2);
      var style = {
        btn: {
          display: "flex",
          justifyContent: "center",
          marginTop: "10px"
        },
        b: {
          fontSize: "18px",
          border: "0",
          textAlign: "center"
        },
        result: {
          marginTop: "95px"
        },
        resultCard: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "200px",
          backgroundColor: "#e5e5e5"
        },
        img: {
          width: "150px"
        },
        p: {
          fontSize: "18px"
        },
        h: {
          marginTop: "0"
        }
      };

      if (data1.public_repos > data2.public_repos) {
        return _react.default.createElement("div", {
          style: style.result
        }, _react.default.createElement("div", {
          style: {
            display: "flex",
            justifyContent: "space-around"
          }
        }, _react.default.createElement("div", {
          style: style.resultCard
        }, _react.default.createElement("h3", null, "Winner"), _react.default.createElement("img", {
          src: data1.avatar_url,
          style: style.img
        }), _react.default.createElement("p", {
          style: style.p
        }, data1.login), _react.default.createElement("h4", {
          style: style.h
        }, "score:", data1.public_repos)), _react.default.createElement("div", {
          style: style.resultCard
        }, _react.default.createElement("h3", null, "Loser"), _react.default.createElement("img", {
          src: data2.avatar_url,
          style: style.img
        }), _react.default.createElement("p", {
          style: style.p
        }, data2.login), _react.default.createElement("h4", {
          style: style.h
        }, "score:", data2.public_repos))), _react.default.createElement("div", {
          style: style.btn
        }, _react.default.createElement("button", {
          style: style.b
        }, _react.default.createElement(_reactRouterDom.Link, {
          to: {
            pathname: '/Bat'
          }
        }, "RESET"))));
      } else {
        return _react.default.createElement("div", {
          style: style.result
        }, _react.default.createElement("div", {
          style: {
            display: "flex",
            justifyContent: "space-around"
          }
        }, _react.default.createElement("div", {
          style: style.resultCard
        }, _react.default.createElement("h3", null, "Winner"), _react.default.createElement("img", {
          src: data2.avatar_url,
          style: style.img
        }), _react.default.createElement("p", {
          style: style.p
        }, data2.login), _react.default.createElement("h4", {
          style: style.h
        }, "score:", data2.public_repos)), _react.default.createElement("div", {
          style: style.resultCard
        }, _react.default.createElement("h3", null, "Loser"), _react.default.createElement("img", {
          src: data1.avatar_url,
          style: style.img
        }), _react.default.createElement("p", {
          style: style.p
        }, data1.login), _react.default.createElement("h4", {
          style: style.h
        }, "score:", data1.public_repos))), _react.default.createElement("div", {
          style: style.btn
        }, _react.default.createElement("button", {
          style: style.b
        }, _react.default.createElement(_reactRouterDom.Link, {
          to: {
            pathname: '/Bat'
          }
        }, "RESET"))));
      }
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return Res;
}(_react.default.Component);

var _default = (0, _root.hot)(Res);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Res, "Res", "D:\\git\\demo02\\demo02\\src\\components\\Res.js");
  reactHotLoader.register(_default, "default", "D:\\git\\demo02\\demo02\\src\\components\\Res.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();