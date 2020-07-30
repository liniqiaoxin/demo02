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

var _root = require("react-hot-loader/root");

var _Players = _interopRequireDefault(require("@/components/battle/Players"));

var _Instructions = _interopRequireDefault(require("@/components/battle/Instructions"));

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var Bat =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Bat, _React$Component);

  function Bat(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Bat);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Bat).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "clickBattle", function () {
      var _this$state = _this.state,
          first = _this$state.first,
          last = _this$state.last;

      if (first.length !== 0 && last.length !== 0) {
        _this.setState({
          first: [],
          last: [],
          firstName: "",
          lastName: ""
        });
      }

      var _this$state2 = _this.state,
          firstName = _this$state2.firstName,
          lastName = _this$state2.lastName;

      _this.props.history.push({
        // pathname: `/battle/result/?lang1=${firstName}&lang2=${lastName}`
        pathname: "/battle/result/".concat(firstName, "/").concat(lastName)
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "transmitDate", function (date) {
      var _this$state3 = _this.state,
          first = _this$state3.first,
          last = _this$state3.last;

      if (first.length === 0 && last.length === 0) {
        _this.setState({
          first: date,
          firstName: date.login
        });
      } else if (last.length === 0 && first.length !== 0) {
        _this.setState({
          last: date,
          lastName: date.login
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "empty", function () {
      var _this$state4 = _this.state,
          first = _this$state4.first,
          last = _this$state4.last;

      if (first.length !== 0 && last.length === 0) {
        _this.setState({
          first: []
        });
      } else if (last.length !== 0 && first.length !== 0) {
        _this.setState({
          last: []
        });
      }
    });
    _this.state = {
      // player: "BATTLE",
      first: [],
      last: [],
      firstName: "",
      lastName: ""
    };
    return _this;
  }

  (0, _createClass2.default)(Bat, [{
    key: "render",
    value: function render() {
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
      var _this$state5 = this.state,
          first = _this$state5.first,
          last = _this$state5.last; // const path = {
      //   pathname: `/result/firstPlayer?${firstName}/lastPlayer?${lastName}`,
      //   state: { firstName: firstName, lastName: lastName },
      // };
      // if (player == "BATTLE" || first.length == 0 || last.length == 0) {

      return _react.default.createElement("div", null, _react.default.createElement("div", null, _react.default.createElement(_Instructions.default, null)), _react.default.createElement("div", {
        style: {
          display: "flex",
          justifyContent: "space-around"
        }
      }, _react.default.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          width: "500px"
        }
      }, _react.default.createElement("h3", null, "Player One"), _react.default.createElement(_Players.default, {
        transmitDate: this.transmitDate,
        empty: this.empty
      })), _react.default.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          width: "500px"
        }
      }, _react.default.createElement("h3", null, "Player Two"), _react.default.createElement(_Players.default, {
        transmitDate: this.transmitDate,
        empty: this.empty
      }))), _react.default.createElement("div", {
        style: style.btn
      }, _react.default.createElement("button", {
        type: "button",
        style: style.b,
        className: first.length === 0 || last.length === 0 ? "hide" : "",
        onClick: this.clickBattle
      }, "BATTLE")));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return Bat;
}(_react.default.Component);

var _default = (0, _root.hot)(Bat);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Bat, "Bat", "D:\\linqiaoxindewenjian\\zuoye\\gitbubtwo\\demo02\\demo02\\src\\pages\\Battle.js");
  reactHotLoader.register(_default, "default", "D:\\linqiaoxindewenjian\\zuoye\\gitbubtwo\\demo02\\demo02\\src\\pages\\Battle.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();