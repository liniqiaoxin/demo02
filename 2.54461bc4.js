(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{88:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(10),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(11),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(13),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(12),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(16),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__),react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),react_hot_loader_root__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(38),react_hot_loader_root__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_8__),_pages_battle_components_Players__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(89),_pages_battle_components_Instructions__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(91),enterModule;enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(_){return _},Bat=function(_React$Component){function Bat(_){var e;return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,Bat),e=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Bat).call(this,_)),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(e),"clickBattle",(function(){var _=e.state,t=_.first,a=_.last;0!==t.length&&0!==a.length&&e.setState({first:[],last:[],firstName:"",lastName:""});var r=e.state,l=r.firstName,n=r.lastName;e.props.history.push({pathname:"/battle/result/?player1=".concat(l,"&player2=").concat(n)})})),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(e),"transmitDate",(function(_){var t=e.state,a=t.first,r=t.last;0===a.length&&0===r.length?e.setState({first:_,firstName:_.login}):0===r.length&&0!==a.length&&e.setState({last:_,lastName:_.login})})),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(e),"empty",(function(){var _=e.state,t=_.first,a=_.last;0!==t.length&&0===a.length?e.setState({first:[]}):0!==a.length&&0!==t.length&&e.setState({last:[]})})),e.state={first:[],last:[],firstName:"",lastName:""},e}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Bat,_React$Component),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Bat,[{key:"render",value:function(){var _={btn:{display:"flex",justifyContent:"center",marginTop:"10px"},b:{fontSize:"18px",border:"0",textAlign:"center"},result:{marginTop:"95px"},resultCard:{display:"flex",flexDirection:"column",alignItems:"center",width:"200px",backgroundColor:"#e5e5e5"},img:{width:"150px"},p:{fontSize:"18px"},h:{marginTop:"0"}},e=this.state,t=e.first,a=e.last;return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_pages_battle_components_Instructions__WEBPACK_IMPORTED_MODULE_10__.a,null)),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-around",width:"500px"}},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3",null,"Player One"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_pages_battle_components_Players__WEBPACK_IMPORTED_MODULE_9__.a,{transmitDate:this.transmitDate,empty:this.empty})),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-around",width:"500px"}},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3",null,"Player Two"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_pages_battle_components_Players__WEBPACK_IMPORTED_MODULE_9__.a,{transmitDate:this.transmitDate,empty:this.empty}))),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{style:_.btn},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button",{type:"button",style:_.b,className:0===t.length||0===a.length?"hide":"",onClick:this.clickBattle},"BATTLE")))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Bat}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component),_default=Object(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_8__.hot)(Bat),reactHotLoader,leaveModule;__webpack_exports__.default=_default,reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(Bat,"Bat","D:\\linqiaoxindewenjian\\zuoye\\gitbubtwo\\demo02\\demo02\\src\\pages\\Battle\\Battle.js"),reactHotLoader.register(_default,"default","D:\\linqiaoxindewenjian\\zuoye\\gitbubtwo\\demo02\\demo02\\src\\pages\\Battle\\Battle.js")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}.call(this,__webpack_require__(15)(module))},89:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(14),_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(19),_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(10),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(11),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(13),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(12),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(16),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__),react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__),axios__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(20),axios__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__),antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(51),antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_11__),_assets_zwt_gif__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(90),_assets_zwt_gif__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(_assets_zwt_gif__WEBPACK_IMPORTED_MODULE_12__),enterModule;enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(_){return _},Players=function(_React$Component){function Players(_){var e;return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this,Players),e=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Players).call(this,_)),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(e),"handleGetInputValue",(function(_){var t=_.target.value;e.setState({username:t})})),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(e),"handlePost",_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark((function _(){var t,a,r,l,n,E,s,i,o,u;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap((function(_){for(;;)switch(_.prev=_.next){case 0:return e.setState({onLoading:!0}),t=e.state.username,a=e.props.transmitDate,r="https://api.github.com/users/".concat(t),_.prev=4,_.next=7,axios__WEBPACK_IMPORTED_MODULE_10___default.a.get(r);case 7:200===(l=_.sent).status&&(n=l.data.login,e.setState({lists:l.data,done:!0}),E={login:n,click:!1},e.setState(E),a(E)),_.next=16;break;case 11:_.prev=11,_.t0=_.catch(4),_.t0.response&&403===_.t0.response.status&&(s=_.t0.response.data,i=Object.values(s),e.setState({warningMsg:i[0],warning:!0})),_.t0.response&&404===_.t0.response.status&&(o=_.t0.response.data,u=Object.values(o),e.setState({warningMsg:u[0],warning:!0})),e.setState({onLoading:!1,username:""});case 16:case"end":return _.stop()}}),_,null,[[4,11]])})))),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(e),"changed",(function(_){var t=_.target.value;if(""!==t){!1===/^[\u4e00-\u9fa5]+|[a-zA-Z0-9]+$/.test(t)?e.setState({warningMsg:"请不要输入特殊字符!",warning:!0}):e.setState({warning:!1})}})),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(e),"onClick",(function(){e.setState({click:!0,onLoading:!1,username:""}),e.props.empty()})),e.state={username:"",lists:[],click:!0,onLoading:!1,done:!1,warningMsg:[],warning:!1},e}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(Players,_React$Component),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Players,[{key:"render",value:function(){var _={input:{width:"360px",height:"48px",marginRight:"20px",fontSize:"16px"},button:{width:"125px",height:"48px",border:"0",fontSize:"18px"},play:{display:"flex",justifyContent:"space-between",flexWrap:"nowrap",background:"#e5e5e5",textAlign:"center",alignItems:"center"},img:{width:"50px",height:"50px",marginRight:"20px",marginLeft:"20px"},btn:{fontSize:"25px",backgroundColor:"#e5e5e5",border:"0",color:"red"},imgp:{display:"flex",flexWrap:"nowrap",alignItems:"center"}},e=this.state,t=e.warningMsg,a=e.warning;return this.state.click?this.state.onLoading?react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",{style:{textAlign:"center"}},react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span",null,"loading..."))):react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("form",{onSubmit:this.handlePost,style:{display:"flex",fontSize:"16px"}},react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input",{id:"inputName",onInput:this.changed,type:"text",placeholder:"github username",value:this.state.username,onChange:this.handleGetInputValue,style:_.input}),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input",{type:"submit",value:"submit",disabled:!this.state.username,className:this.state.username?"button":"disbutton",style:_.button}))),a?react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p",{style:{color:"red"}},t):"")):react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",{style:_.play},react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",{style:_.imgp},this.state.done?react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img",{style:_.img,src:this.state.lists.avatar_url,alt:""}):react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img",{style:_.img,src:_assets_zwt_gif__WEBPACK_IMPORTED_MODULE_12___default.a,alt:""}),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p",{style:{fontSize:"25px"}},this.state.username)),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button",{type:"button",onClick:this.onClick,style:_.btn},react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i",{className:"fa fa-times","aria-hidden":"true"})))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Players}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component),_default=Players,reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(Players,"Players","D:\\linqiaoxindewenjian\\zuoye\\gitbubtwo\\demo02\\demo02\\src\\pages\\battle\\components\\Players.js"),reactHotLoader.register(_default,"default","D:\\linqiaoxindewenjian\\zuoye\\gitbubtwo\\demo02\\demo02\\src\\pages\\battle\\components\\Players.js")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(15)(module))},90:function(_,e){_.exports="data:image/gif;base64,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"},91:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(10),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(11),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(12),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),enterModule;enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(_){return _},Instructions=function(_React$Component){function Instructions(){return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,Instructions),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Instructions).apply(this,arguments))}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Instructions,_React$Component),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Instructions,[{key:"render",value:function(){var _={col1:{fontSize:"20px",textAlign:"center",margin:"8px 16px"},icon1:{backgroundColor:"#eee",fontSize:"120px",padding:"32px",color:"rgba(255,191,116)"},col2:{fontSize:"20px",textAlign:"center",margin:"8px 16px"},icon2:{backgroundColor:"#eee",fontSize:"120px",padding:"32px",color:"gray"},col3:{fontSize:"20px",textAlign:"center",margin:"8px 16px"},icon3:{backgroundColor:"#eee",fontSize:"120px",padding:"32px",color:" gold"}};return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2",{className:"text-center"},"Instructions"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"col-1",style:{alignItems:"flex-end"}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{style:_.col1},"Enter two Github"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i",{className:"fa fa-users",style:_.icon1}))),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"col-2",style:{alignItems:"center"}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{style:_.col2},"Battle"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i",{className:"fa fa-fighter-jet",style:_.icon2}))),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"col-3",style:{alignItems:"flex-start"}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{style:_.col3},"See the winner"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i",{className:"fa fa-trophy",style:_.icon3})))),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3",{style:{textAlign:"center"}},"players")))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Instructions}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component),_default=Instructions,reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(Instructions,"Instructions","D:\\linqiaoxindewenjian\\zuoye\\gitbubtwo\\demo02\\demo02\\src\\pages\\battle\\components\\Instructions.js"),reactHotLoader.register(_default,"default","D:\\linqiaoxindewenjian\\zuoye\\gitbubtwo\\demo02\\demo02\\src\\pages\\battle\\components\\Instructions.js")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(15)(module))}}]);
//# sourceMappingURL=2.54461bc4.js.map