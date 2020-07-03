"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactLoadable = _interopRequireDefault(require("react-loadable"));

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// 通用的过场组件
var loadingComponent = function loadingComponent() {
  return _react.default.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: "130px"
    }
  }, "loading...");
}; // 过场组件默认采用通用的，若传入了loading，则采用传入的过场组件


var _default = function _default(loader) {
  var loading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : loadingComponent;
  return (0, _reactLoadable.default)({
    loader: loader,
    loading: loading
  });
};

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(loadingComponent, "loadingComponent", "D:\\linqiaoxindewenjian\\zuoye\\gitbubtwo\\demo02\\demo02\\src\\util\\loadable.js");
  reactHotLoader.register(_default, "default", "D:\\linqiaoxindewenjian\\zuoye\\gitbubtwo\\demo02\\demo02\\src\\util\\loadable.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();