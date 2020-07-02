import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import Bat from '@/components/battle/battle'
import Result from "../components/battle/Result";
import Header from "../components/popular/Header";
import "../styles/index.less";
import loadable from "../util/loadable";
import MyNavLink from "./my-nav-link";

const Bat = loadable(() => import("@/components/battle/Battle"));
// const Result = loadable(() => import('@/components/battle/result'))

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div style={{ marginTop: "30px", marginLeft: "50px" }}>
          {/* 导航路由链接 */}
          <MyNavLink className="list-group-item" to="/popular">
            Popular
          </MyNavLink>
          &nbsp;&nbsp;
          <MyNavLink className="list-group-item" to="/battle">
            Battle
          </MyNavLink>
        </div>
        {/* 可切换的路由组件 */}
        <Switch>
          <Route
            path="/battle/result/:firstName/:lastName"
            component={Result}
          />
          {/* <Route path="/result/" component={Result} /> */}
          <Route path="/popular" component={Header} />
          <Route path="/battle/" component={Bat} />

          <Redirect to="/popular" />
        </Switch>
      </div>
    );
  }
}