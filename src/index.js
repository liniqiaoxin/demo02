import React from "react";
import ReactDOM from "react-dom";
import Pop from "./components/Pop";
import Bat from "./components/Bat";
import "font-awesome/css/font-awesome.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Nav from "./components/Nav";
import "@/styles/index.less";

ReactDOM.render(
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Pop} />
        <Route path="/Bat" component={Bat} />
        <Redirect to="/" />
      </Switch>
    </div>
  </Router>,
  document.getElementById("app")
);
