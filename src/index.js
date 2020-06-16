// import React from "react";
// import ReactDOM from "react-dom";
// // import Pop from "./components/Pop";
// import Bat from "./components/Bat";
// // import Res from "./components/Res";
// import Header from "./components/header";

// import "font-awesome/css/font-awesome.min.css";
// import {HashRouter as Router , Route, Redirect, Switch} from 'react-router-dom';
// import Nav from './components/Nav';
// import "@/styles/index.less";


// ReactDOM.render(
//     <Router>
//         <div>
//             <Nav/>
//             <Switch>
//                 <Route exact path="/" component={Header} />
//                 <Route  path="/Bat" component={Bat} />
//                 {/* <Route  path="/Popular" component={Res} /> */}
//                 <Redirect to="/" />
//             </Switch>
//         </div>
//     </Router>,
// document.getElementById("app")
// );

import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, HashRouter} from 'react-router-dom'
import App from './components/app'
import "font-awesome/css/font-awesome.min.css";
import "@/styles/index.less";


import './index.css'

ReactDOM.render(
  (
    <HashRouter>
      <App/>
    </HashRouter>
    /*<HashRouter>
      <App />
    </HashRouter>*/
  ),

  document.getElementById('app')
)