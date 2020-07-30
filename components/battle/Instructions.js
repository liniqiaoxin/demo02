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

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var Instructions =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Instructions, _React$Component);

  function Instructions() {
    (0, _classCallCheck2.default)(this, Instructions);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Instructions).apply(this, arguments));
  }

  (0, _createClass2.default)(Instructions, [{
    key: "render",
    value: function render() {
      var style = {
        col1: {
          fontSize: "20px",
          textAlign: "center",
          margin: "8px 16px"
        },
        icon1: {
          backgroundColor: "#eee",
          fontSize: "120px",
          padding: "32px",
          color: "rgba(255,191,116)"
        },
        col2: {
          fontSize: "20px",
          textAlign: "center",
          margin: "8px 16px"
        },
        icon2: {
          backgroundColor: "#eee",
          fontSize: "120px",
          padding: "32px",
          color: "gray"
        },
        col3: {
          fontSize: "20px",
          textAlign: "center",
          margin: "8px 16px"
        },
        icon3: {
          backgroundColor: "#eee",
          fontSize: "120px",
          padding: "32px",
          color: " gold"
        }
      };
      return _react.default.createElement("div", null, _react.default.createElement("h2", {
        className: "text-center"
      }, "Instructions"), _react.default.createElement("div", {
        className: "row"
      }, _react.default.createElement("div", {
        className: "col-1",
        style: {
          alignItems: "flex-end"
        }
      }, _react.default.createElement("div", {
        style: style.col1
      }, "Enter two Github"), _react.default.createElement("div", null, _react.default.createElement("i", {
        className: "fa fa-users",
        style: style.icon1
      }))), _react.default.createElement("div", {
        className: "col-2",
        style: {
          alignItems: "center"
        }
      }, _react.default.createElement("div", {
        style: style.col2
      }, "Battle"), _react.default.createElement("div", null, _react.default.createElement("i", {
        className: "fa fa-fighter-jet",
        style: style.icon2
      }))), _react.default.createElement("div", {
        className: "col-3",
        style: {
          alignItems: "flex-start"
        }
      }, _react.default.createElement("div", {
        style: style.col3
      }, "See the winner"), _react.default.createElement("div", null, _react.default.createElement("i", {
        className: "fa fa-trophy",
        style: style.icon3
      })))), _react.default.createElement("div", null, _react.default.createElement("h3", {
        style: {
          textAlign: "center"
        }
      }, "players")));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return Instructions;
}(_react.default.Component);

var _default = Instructions;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Instructions, "Instructions", "D:\\linqiaoxindewenjian\\zuoye\\gitbubtwo\\demo02\\demo02\\src\\components\\battle\\Instructions.js");
  reactHotLoader.register(_default, "default", "D:\\linqiaoxindewenjian\\zuoye\\gitbubtwo\\demo02\\demo02\\src\\components\\battle\\Instructions.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();