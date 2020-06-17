import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import MyNavLink from './my-nav-link'
import News from './news'
import Header from './header'

export default function Home() {
  return (
    <div>
      <h2>Home组件内容</h2>
      <div>
        <ul className="nav nav-tabs">
          <li>
            <MyNavLink to='/home/news'>News</MyNavLink>
          </li>
          <li>
            <MyNavLink to="/home/header">Header</MyNavLink>
          </li>
        </ul>
        <Switch>
          <Route path='/home/news' component={News} />
          <Route path='/home/header' component={Header} />
          <Redirect to='/home/news'/>
        </Switch>
      </div>
    </div>
  )
}