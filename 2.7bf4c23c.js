(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{87:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(13),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(10),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(16),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__),react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),react_hot_loader_root__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(36),react_hot_loader_root__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_8__),_Instructions__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(88),_Players__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(89),enterModule;enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(_){return _},Bat=function(_React$Component){function Bat(_){var e;return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,Bat),e=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Bat).call(this,_)),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(e),"clickBattle",(function(){var _=e.state,t=_.first,a=_.last;0!==t.length&&0!==a.length&&e.setState({first:[],last:[],firstName:"",lastName:""});var r=e.state,l=r.firstName,n=r.lastName;e.props.history.push({pathname:"/battle/result/".concat(l,"/").concat(n)})})),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(e),"transmitDate",(function(_){var t=e.state,a=t.first,r=t.last;0===a.length&&0===r.length?e.setState({first:_,firstName:_.login}):0===r.length&&0!==a.length&&e.setState({last:_,lastName:_.login})})),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(e),"empty",(function(){var _=e.state,t=_.first,a=_.last;0!==t.length&&0===a.length?e.setState({first:[]}):0!==a.length&&0!==t.length&&e.setState({last:[]})})),e.state={first:[],last:[],firstName:"",lastName:""},e}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Bat,_React$Component),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Bat,[{key:"render",value:function(){var _={btn:{display:"flex",justifyContent:"center",marginTop:"10px"},b:{fontSize:"18px",border:"0",textAlign:"center"},result:{marginTop:"95px"},resultCard:{display:"flex",flexDirection:"column",alignItems:"center",width:"200px",backgroundColor:"#e5e5e5"},img:{width:"150px"},p:{fontSize:"18px"},h:{marginTop:"0"}},e=this.state,t=e.first,a=e.last;return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Instructions__WEBPACK_IMPORTED_MODULE_9__.a,null)),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-around",width:"500px"}},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3",null,"Player One"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Players__WEBPACK_IMPORTED_MODULE_10__.a,{transmitDate:this.transmitDate,empty:this.empty})),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-around",width:"500px"}},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3",null,"Player Two"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Players__WEBPACK_IMPORTED_MODULE_10__.a,{transmitDate:this.transmitDate,empty:this.empty}))),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{style:_.btn},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button",{type:"button",style:_.b,className:0===t.length||0===a.length?"hide":"",onClick:this.clickBattle},"BATTLE")))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Bat}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component),_default=Object(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_8__.hot)(Bat),reactHotLoader,leaveModule;__webpack_exports__.default=_default,reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(Bat,"Bat","D:\\linqiaoxindewenjian\\zuoye\\gitbubtwo\\demo02\\demo02\\src\\components\\battle\\Battle.js"),reactHotLoader.register(_default,"default","D:\\linqiaoxindewenjian\\zuoye\\gitbubtwo\\demo02\\demo02\\src\\components\\battle\\Battle.js")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}.call(this,__webpack_require__(15)(module))},88:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(10),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),enterModule;enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(_){return _},Instructions=function(_React$Component){function Instructions(){return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,Instructions),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Instructions).apply(this,arguments))}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Instructions,_React$Component),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Instructions,[{key:"render",value:function(){var _={col1:{fontSize:"20px",textAlign:"center",margin:"8px 16px"},icon1:{backgroundColor:"#eee",fontSize:"120px",padding:"32px",color:"rgba(255,191,116)"},col2:{fontSize:"20px",textAlign:"center",margin:"8px 16px"},icon2:{backgroundColor:"#eee",fontSize:"120px",padding:"32px",color:"gray"},col3:{fontSize:"20px",textAlign:"center",margin:"8px 16px"},icon3:{backgroundColor:"#eee",fontSize:"120px",padding:"32px",color:" gold"}};return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2",{className:"text-center"},"Instructions"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"col-1",style:{alignItems:"flex-end"}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{style:_.col1},"Enter two Github"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i",{className:"fa fa-users",style:_.icon1}))),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"col-2",style:{alignItems:"center"}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{style:_.col2},"Battle"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i",{className:"fa fa-fighter-jet",style:_.icon2}))),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"col-3",style:{alignItems:"flex-start"}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{style:_.col3},"See the winner"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i",{className:"fa fa-trophy",style:_.icon3})))),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3",{style:{textAlign:"center"}},"players")))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Instructions}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component),_default=Instructions,reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(Instructions,"Instructions","D:\\linqiaoxindewenjian\\zuoye\\gitbubtwo\\demo02\\demo02\\src\\components\\battle\\Instructions.js"),reactHotLoader.register(_default,"default","D:\\linqiaoxindewenjian\\zuoye\\gitbubtwo\\demo02\\demo02\\src\\components\\battle\\Instructions.js")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(15)(module))},89:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(13),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(10),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(16),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__),react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),axios__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(21),axios__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__),enterModule;enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(_){return _},Players=function(_React$Component){function Players(_){var e;return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,Players),e=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Players).call(this,_)),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(e),"handleGetInputValue",(function(_){var t=_.target.value;e.setState({username:t})})),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(e),"handlePost",(function(){var _=e.state.username,t=e.props.transmitDate,a="https://api.github.com/users/".concat(_);try{axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(a).then((function(_){var a=_.data,r={login:a.login,avatarUrl:a.avatarUrl,publicRrepos:a.publicRrepos,click:!1};e.setState(r),t(r)}))}catch(_){}})),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(e),"changed",(function(_){var e=_.target.value;""!==e&&(e.match("^[a-zA-Z0-9_一-龥]+$")||(alert("请不要输入特殊字符!"),document.getElementById("inputName").value=""))})),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(e),"onClick",(function(){e.setState({click:!0}),e.props.empty()})),e.state={username:"",avatarUrl:"",click:!0},e}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Players,_React$Component),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Players,[{key:"render",value:function(){var _={input:{width:"360px",height:"42px",marginRight:"20px",fontSize:"16px"},button:{width:"125px",height:"48px",border:"0",fontSize:"18px"},play:{display:"flex",justifyContent:"space-between",flexWrap:"nowrap",background:"#e5e5e5",textAlign:"center",alignItems:"center"},img:{width:"50px",height:"50px",marginRight:"20px",marginLeft:"20px"},btn:{fontSize:"25px",backgroundColor:"#e5e5e5",border:"0",color:"red"},imgp:{display:"flex",flexWrap:"nowrap",alignItems:"center"}};return this.state.click?react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form",{onSubmit:this.handlePost,style:{display:"flex",fontSize:"16px"}},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input",{id:"inputName",onInput:this.changed,type:"text",placeholder:"github username",value:this.state.username,onChange:this.handleGetInputValue,style:_.input}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input",{type:"submit",value:"submit",disabled:!this.state.username,className:this.state.username?"button":"disbutton",style:_.button}))):react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{style:_.play},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{style:_.imgp},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img",{src:this.state.avatarUrl,style:_.img,alt:""}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p",{style:{fontSize:"25px"}},this.state.username)),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button",{type:"button",onClick:this.onClick,style:_.btn},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i",{className:"fa fa-times","aria-hidden":"true"})))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Players}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component),_default=Players,reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(Players,"Players","D:\\linqiaoxindewenjian\\zuoye\\gitbubtwo\\demo02\\demo02\\src\\components\\battle\\Players.js"),reactHotLoader.register(_default,"default","D:\\linqiaoxindewenjian\\zuoye\\gitbubtwo\\demo02\\demo02\\src\\components\\battle\\Players.js")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(15)(module))}}]);
//# sourceMappingURL=2.7bf4c23c.js.map