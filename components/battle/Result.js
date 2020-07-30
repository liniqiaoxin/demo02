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

var _root = require("react-hot-loader/root");

var _reactRouterDom = require("react-router-dom");

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// import zwt from '../assets/zwt.jpg'
var Result =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Result, _React$Component);

  function Result(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Result);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Result).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getValue", function (username) {
      var url = "https://api.github.com/users/".concat(username);
      return new Promise(function (resolve, reject) {
        _axios.default.get(url).then(function (data) {
          resolve(data);
        }).catch(function (data) {
          reject(data);
        });
      });
    });
    _this.state = {
      first: {},
      last: {} // done: true,
      // firstImageUrl: ''
      // firstName: this.props.match.params.firstName,
      // lastName: this.props.match.params.lastName,

    };
    return _this;
  }

  (0, _createClass2.default)(Result, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var firstDate, lastDate, f, s;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // const myhref = window.location.href.split('?')[1].split('&')
                // console.log('href', window.location.href.split('?')[1].split('&'))
                // const firstN = myhref[0].split('=')[1]
                // const lastN = myhref[1].split('=')[1]
                // console.log(firstN, lastN)
                // this.setState({
                //   firstName: firstN,
                //   lastName: lastN
                // })
                // const firstDate = this.state.firstName;
                // const lastDate = this.state.lastName;
                firstDate = this.props.match.params.firstName;
                lastDate = this.props.match.params.lastName;
                _context.next = 4;
                return this.getValue(firstDate);

              case 4:
                f = _context.sent;
                _context.next = 7;
                return this.getValue(lastDate);

              case 7:
                s = _context.sent;

                if (f) {
                  this.setState({
                    first: f.data,
                    last: s.data // firstImageUrl:  f.data.avatar_url,
                    // done: false

                  });
                }

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }() // handleImageLoaded = () => { };
    // handleImageErrored = () => {
    //   this.setState({
    //     firstImageUrl: zwt
    //   });
    // };

  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          first = _this$state.first,
          last = _this$state.last;
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

      if (first.public_repos > last.public_repos) {
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
          src: first.avatar_url,
          style: style.img,
          alt: ""
        }), _react.default.createElement("p", {
          style: style.p
        }, first.login), _react.default.createElement("h4", {
          style: style.h
        }, "score:", first.public_repos)), _react.default.createElement("div", {
          style: style.resultCard
        }, _react.default.createElement("h3", null, "Loser"), _react.default.createElement("img", {
          src: last.avatar_url,
          style: style.img,
          alt: ""
        }), _react.default.createElement("p", {
          style: style.p
        }, last.login), _react.default.createElement("h4", {
          style: style.h
        }, "score:", last.public_repos))), _react.default.createElement("div", {
          style: style.btn
        }, _react.default.createElement(_reactRouterDom.Link, {
          to: "/battle"
        }, _react.default.createElement("button", {
          type: "button",
          style: style.b,
          onClick: this.clickBattle
        }, "Reset"))));
      }

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
        src: last.avatar_url,
        style: style.img,
        alt: ""
      }), _react.default.createElement("p", {
        style: style.p
      }, last.login), _react.default.createElement("h4", {
        style: style.h
      }, "score:", last.public_repos)), _react.default.createElement("div", {
        style: style.resultCard
      }, _react.default.createElement("h3", null, "Loser"), _react.default.createElement("img", {
        src: first.avatar_url,
        style: style.img,
        alt: ""
      }), _react.default.createElement("p", {
        style: style.p
      }, first.login), _react.default.createElement("h4", {
        style: style.h
      }, "score:", first.public_repos))), _react.default.createElement("div", {
        style: style.btn
      }, _react.default.createElement(_reactRouterDom.Link, {
        to: "/battle"
      }, _react.default.createElement("button", {
        type: "button",
        style: style.b,
        onClick: this.clickBattle
      }, "Reset"))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return Result;
}(_react.default.Component);

var _default = (0, _root.hot)(Result);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Result, "Result", "D:\\linqiaoxindewenjian\\zuoye\\gitbubtwo\\demo02\\demo02\\src\\components\\battle\\Result.js");
  reactHotLoader.register(_default, "default", "D:\\linqiaoxindewenjian\\zuoye\\gitbubtwo\\demo02\\demo02\\src\\components\\battle\\Result.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();