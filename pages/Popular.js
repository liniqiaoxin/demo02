"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

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

var _reactInfiniteScroller = _interopRequireDefault(require("react-infinite-scroller"));

var _Cards = _interopRequireDefault(require("@/components/popular/Cards"));

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var Popular =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Popular, _React$Component);

  function Popular(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Popular);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Popular).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "search",
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var clear,
            query,
            page,
            url,
            res,
            _args = arguments;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                clear = _args.length > 0 && _args[0] !== undefined ? _args[0] : false;
                query = _this.state.query; // console.log(query)

                page = clear ? 1 : _this.state.page;

                _this.setState({
                  loading: true // load: false 

                }); // console.log(query)


                url = "https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories&page=".concat(page);

                if (query === "All" || query === undefined) {
                  url = "https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories&page=".concat(page);
                } else {
                  url = "https://api.github.com/search/repositories?q=stars:%3E1+language:".concat(query, "&sort=stars&order=desc&type=Repositories&page=").concat(page);
                }

                if (clear) {
                  _this.setState({
                    items: []
                  });
                }

                _context.prev = 7;
                _context.next = 10;
                return _axios.default.get(url // `https://api.github.com/search/repositories?q=stars:>1+${query}&sort=stars&order=desc&type=Repositories&page=${page}`
                );

              case 10:
                res = _context.sent;

                _this.setState(function (state) {
                  return {
                    items: clear ? res.data.items : [].concat((0, _toConsumableArray2.default)(state.items), (0, _toConsumableArray2.default)(res.data.items)),
                    page: clear ? 1 : state.page + 1
                  };
                });

                _context.next = 19;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](7);

                // alert("获取数据失败")
                if (_context.t0.response && _context.t0.response.status === 403) {
                  alert("获取数据失败");
                }

                console.log("获取数据失败");

                _this.setState({
                  end: true // load: true

                });

              case 19:
                _this.setState({
                  loading: false
                });

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[7, 14]]);
      }));

      return function () {
        return _ref.apply(this, arguments);
      };
    }());
    _this.state = {
      items: [],
      loading: false,
      end: false,
      page: 1,
      // clear: false,
      query: props.match.params.query // load: false

    };
    return _this;
  }

  (0, _createClass2.default)(Popular, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2() {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.search(true);

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        query: nextProps.match.params.query
      });
      sessionStorage.setItem("query", nextProps.match.params.query);

      if (sessionStorage.getItem("query")) {
        var getquery = JSON.stringify(window.sessionStorage.getItem("query"));
        this.setState({
          query: getquery
        });
      }

      this.setState({
        items: []
      });
      this.search(true);
    } // 模拟发送ajax请求

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var items = this.state.items;
      var _this$state = this.state,
          loading = _this$state.loading,
          end = _this$state.end;
      var lists = items.map(function (item, key) {
        return _react.default.createElement(_Cards.default, {
          key: key,
          list: item,
          index: key + 1
        });
      });
      return _react.default.createElement("div", null, _react.default.createElement(_reactInfiniteScroller.default, {
        initialLoad: false,
        loadMore: function loadMore() {
          return _this2.search(false);
        },
        hasMore: !loading || end,
        loader: null
      }, _react.default.createElement("div", {
        style: {
          display: "flex",
          justifyContent: "center"
        }
      }, _react.default.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          marginBottom: "48px",
          width: "990px"
        }
      }, lists)), loading && _react.default.createElement("div", {
        style: {
          textAlign: "center"
        }
      }, _react.default.createElement("span", null, "\u6B63\u5728\u52A0\u8F7D..."))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return Popular;
}(_react.default.Component);

exports.default = Popular;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Popular, "Popular", "D:\\linqiaoxindewenjian\\zuoye\\gitbubtwo\\demo02\\demo02\\src\\pages\\Popular.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();