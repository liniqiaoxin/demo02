import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import MyNavLink from './my-nav-link'
import Bat from './battle'
import Header from './header'

export default class App extends React.Component {

  render() {
    return (
      <div>
        {/* <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div> */}

        <div className="">
          <div className="">
            <div className="list-group" style={{ marginTop: "30px", marginLeft: "50px" }}>
              {/*导航路由链接*/}
              <MyNavLink className="list-group-item" to='/popular'>Popular</MyNavLink>&nbsp;&nbsp;
              <MyNavLink className="list-group-item" to='/battle'>Battle</MyNavLink>

            </div>
          </div>
          <div className="">
            <div className="panel">
              <div className="panel-body">
                {/*可切换的路由组件*/}
                <Switch>
                  <Route path='/popular' component={Header} />
                  <Route path='/battle/' component={Bat} />
                  <Redirect to='/popular' />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
