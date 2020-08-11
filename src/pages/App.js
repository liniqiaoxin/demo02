import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import Bat from '@/components/battle/battle'
import Result from "@/pages/Battle/components/Result";
import Popular from "@/pages/Popular/Popular";
import "@/styles/index.less";
import loadable from "@/util/loadable";
import MyNavLink from "@/components/My-nav-link";

const Bat = loadable(() => import("./Battle/Battle"));
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
          {/* <Route
            path="/battle/result/?lang1=:firstName&lang2=:lastName"
            component={Result}
          /> */}
          <Route path="/battle/result" component={Result} />
          <Route path="/popular" component={Popular} />
          <Route path="/battle/" component={Bat} />

          <Redirect to="/popular" />
        </Switch>
      </div>
    );
  }
}
