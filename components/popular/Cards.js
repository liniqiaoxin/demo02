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

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _zwt = _interopRequireDefault(require("@/components/assets/zwt.jpg"));

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var Cards =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Cards, _React$Component);

  function Cards(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Cards);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Cards).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleImageLoaded", function () {});
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleImageErrored", function () {
      _this.setState({
        imageUrl: _zwt.default
      });
    });
    _this.state = {
      imageUrl: _this.props.list.owner.avatar_url,
      done: false // zwt :zwt

    };
    return _this;
  }

  (0, _createClass2.default)(Cards, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      // 创建一个虚拟图片
      var img = new Image(); // 发出请求，请求图片

      img.src = this.props.list.owner.avatar_url; // 当图片加载完毕

      img.onload = function () {
        _this2.setState({
          done: true
        });
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          index = _this$props.index,
          list = _this$props.list;
      return _react.default.createElement("div", {
        style: {
          boxSizing: "border-box",
          width: "200px",
          padding: "24px",
          paddingRight: "10px",
          marginTop: "10px",
          marginBottom: "10px",
          backgroundColor: "rgb(235, 235, 235)"
        }
      }, _react.default.createElement("div", {
        style: {
          paddingRight: "24px"
        }
      }, _react.default.createElement("h2", {
        className: "text-center"
      }, "#", index), _react.default.createElement("div", {
        className: "text-center"
      }, this.state.done ? _react.default.createElement("img", {
        style: {
          width: "50%"
        },
        src: this.state.imageUrl,
        onLoad: this.handleImageLoaded,
        onError: this.handleImageErrored,
        alt: ""
      }) : _react.default.createElement("img", {
        style: {
          width: "50%"
        },
        src: _zwt.default,
        alt: ""
      })), _react.default.createElement("h4", {
        style: {
          display: "flex",
          flexDirection: "row",
          height: "36px",
          justifyContent: "center"
        }
      }, list.owner.login)), _react.default.createElement("div", null, _react.default.createElement("i", {
        className: "fa fa-user",
        style: {
          display: "inline-flex",
          width: "16px",
          justifyContent: "center",
          color: "orange"
        }
      }), list.owner.login), _react.default.createElement("div", null, _react.default.createElement("i", {
        className: "fa fa-star",
        style: {
          display: "inline-flex",
          width: "16px",
          justifyContent: "center",
          color: "yellow"
        }
      }), list.stargazers_count, " stars"), _react.default.createElement("div", null, _react.default.createElement("i", {
        className: "fa fa-code-fork",
        style: {
          display: "inline-flex",
          width: "16px",
          justifyContent: "center",
          color: "blue"
        }
      }), list.forks, " forks"), _react.default.createElement("div", null, _react.default.createElement("i", {
        className: "fa fa-exclamation-triangle",
        style: {
          display: "inline-flex",
          width: "16px",
          justifyContent: "center",
          color: "pink"
        }
      }), list.open_issues, " open issues"));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return Cards;
}(_react.default.Component);

var _default = Cards;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Cards, "Cards", "D:\\linqiaoxindewenjian\\zuoye\\gitbubtwo\\demo02\\demo02\\src\\components\\popular\\Cards.js");
  reactHotLoader.register(_default, "default", "D:\\linqiaoxindewenjian\\zuoye\\gitbubtwo\\demo02\\demo02\\src\\components\\popular\\Cards.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();