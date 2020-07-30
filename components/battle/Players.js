"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _axios = _interopRequireDefault(require("axios"));

var _zwt = _interopRequireDefault(require("@/components/assets/zwt.gif"));

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var Players =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Players, _React$Component);

  function Players(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Players);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Players).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleGetInputValue", function (event) {
      var username = event.target.value;

      _this.setState({
        username: username
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handlePost",
    /*#__PURE__*/
    (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      var username, transmitDate, url, res, login, state;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.setState({
                onLoading: true
              });

              username = _this.state.username; // 在此做提交操作，比如发dispatch等

              transmitDate = _this.props.transmitDate;
              url = "https://api.github.com/users/".concat(username);
              _context.prev = 4;
              _context.next = 7;
              return _axios.default.get(url);

            case 7:
              res = _context.sent;

              // axios.get(url).then(response => {
              // console.log(res);
              if (res.status === 200) {
                login = res.data.login;

                _this.setState({
                  lists: res.data,
                  done: true
                });

                state = {
                  login: login,
                  click: false
                };

                _this.setState(state);

                transmitDate(state);
              }

              _context.next = 15;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](4);
              alert('该用户名不存在');

              _this.setState({
                onLoading: false
              });

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 11]]);
    })));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "changed", function (event) {
      var name = event.target.value;

      if (name === "") {
        return;
      }

      var reg = /^[\u4e00-\u9fa5]+|[a-zA-Z0-9]+$/;

      if (reg.test(name) === false) {
        alert("请不要输入特殊字符!");
        document.getElementById("inputName").value = "";
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onClick", function () {
      _this.setState({
        click: true,
        onLoading: false,
        username: ""
      });

      _this.props.empty();
    });
    _this.state = {
      username: "",
      // login: '',
      // avatar_url: "",
      lists: [],
      // score: 0,
      click: true,
      onLoading: false,
      done: false
    };
    return _this;
  } // componentWillMount() {
  //   // 创建一个虚拟图片
  //   const img = new Image();
  //   // 发出请求，请求图片
  //   img.src = this.state.lists.avatar_url
  //   // 当图片加载完毕
  //   img.onload = () => {
  //     this.setState({
  //       done: true
  //     });
  //   }
  // }


  (0, _createClass2.default)(Players, [{
    key: "render",
    value: function render() {
      var style = {
        input: {
          width: "360px",
          height: "42px",
          marginRight: "20px",
          fontSize: "16px"
        },
        button: {
          width: "125px",
          height: "48px",
          border: "0",
          fontSize: "18px"
        },
        play: {
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "nowrap",
          background: "#e5e5e5",
          textAlign: "center",
          alignItems: "center"
        },
        img: {
          width: "50px",
          height: "50px",
          marginRight: "20px",
          marginLeft: "20px"
        },
        btn: {
          fontSize: "25px",
          backgroundColor: "#e5e5e5",
          border: "0",
          color: "red"
        },
        imgp: {
          display: "flex",
          flexWrap: "nowrap",
          alignItems: "center"
        }
      };

      if (this.state.click) {
        if (this.state.onLoading) {
          return _react.default.createElement("div", {
            style: {
              display: "flex",
              justifyContent: "space-around"
            }
          }, _react.default.createElement("div", {
            style: {
              textAlign: "center"
            }
          }, _react.default.createElement("span", null, "loading...")));
        }

        return _react.default.createElement("div", {
          style: {
            display: "flex",
            justifyContent: "space-around"
          }
        }, _react.default.createElement("form", {
          onSubmit: this.handlePost,
          style: {
            display: "flex",
            fontSize: "16px"
          }
        }, _react.default.createElement("input", {
          id: "inputName",
          onInput: this.changed,
          type: "text",
          placeholder: "github username",
          value: this.state.username,
          onChange: this.handleGetInputValue,
          style: style.input
        }), _react.default.createElement("input", {
          type: "submit",
          value: "submit",
          disabled: !this.state.username,
          className: this.state.username ? "button" : "disbutton" // className="button"
          ,
          style: style.button
        })));
      }

      return _react.default.createElement("div", {
        style: style.play
      }, _react.default.createElement("div", {
        style: style.imgp
      }, this.state.done ? _react.default.createElement("img", {
        style: style.img,
        src: this.state.lists.avatar_url,
        alt: ""
      }) : _react.default.createElement("img", {
        style: style.img,
        src: _zwt.default,
        alt: ""
      }), _react.default.createElement("p", {
        style: {
          fontSize: "25px"
        }
      }, this.state.username)), _react.default.createElement("button", {
        type: "button",
        onClick: this.onClick,
        style: style.btn
      }, _react.default.createElement("i", {
        className: "fa fa-times",
        "aria-hidden": "true"
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
  return Players;
}(_react.default.Component);

var _default = Players;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Players, "Players", "D:\\linqiaoxindewenjian\\zuoye\\gitbubtwo\\demo02\\demo02\\src\\components\\battle\\Players.js");
  reactHotLoader.register(_default, "default", "D:\\linqiaoxindewenjian\\zuoye\\gitbubtwo\\demo02\\demo02\\src\\components\\battle\\Players.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();