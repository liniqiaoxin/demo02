import React from 'react'
import {Link, Route} from 'react-router-dom'
import Popular from "./popular"

export default class Header extends React.Component {
  state = {
    messages: []
  }

  componentDidMount () {
    // 模拟发送ajax请求
    setTimeout(() => {
      const data = [
        {id: 1, title: 'All',query: "stars:>1"},
        {id: 2, title: 'JavaScript',query: "stars:>1+language:javascript"},
        {id: 3, title: 'Ruby',query: "stars:>1+language:ruby"},
        {id: 4, title: 'Java',query: "stars:>1+language:java"},
        {id: 5, title: 'CSS',query: "stars:>1+language:css"},
      ]
      this.setState({
        messages: data
      })
    }, 1000)
  }

  render () {
    const path = this.props.match.path

    return (
      <div>
        <ul  style={{display: "flex",flexDirection: "column",listStyleType: "none",flexDirection: "row",alignItems: "center"}}>
          {
            this.state.messages.map((m, index) => {
              return (
                <li key={index}>
                  <Link to={`${path}/${m.id}/${m.query}`}>{m.title}</Link>
                  &nbsp;&nbsp;&nbsp;
                </li>
              )
            })
          }
        </ul>
        <hr/>
        <Route path={`${path}/:id/:query`} component={Popular}></Route>
      </div>
    )
  }
}