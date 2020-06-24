import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import MyNavLink from './my-nav-link'
import Bat from './battle/battle'
import Result from './battle/result'
import Header from './popular/header'
import "../styles/index.less";

export default class App extends React.Component {

  render() {
    
    return (
      <div>


        <div style={{ marginTop: "30px", marginLeft: "50px" }}>
          {/*导航路由链接*/}
          <MyNavLink className="list-group-item" to='/popular'>Popular</MyNavLink>&nbsp;&nbsp;
          <MyNavLink className="list-group-item" to='/battle'>Battle</MyNavLink>

        </div>
        {/*可切换的路由组件*/}
        <Switch>
        <Route
          path="/battle/result/:firstName/:lastName"
          component={Result}
        />
          <Route path="/result/" component={Result} />
          <Route path='/popular' component={Header} />
          <Route path='/battle/' component={Bat} />

          <Redirect to='/popular' />
        </Switch>

      </div>

    )
  }
}
