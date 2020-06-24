import React from 'react'
import {Link, Route, Redirect} from 'react-router-dom'
import Popular from "./popular"
import MyNavLink from '../my-nav-link'

export default class Header extends React.Component {
  state = {
    messages: [],
  
  }

  componentDidMount () {
    // 模拟发送ajax请求
    setTimeout(() => {
      const data = [
        { title: 'All',query: "stars:>1"},
        { title: 'JavaScript',query: "stars:>1+language:javascript"},
        { title: 'Ruby',query: "stars:>1+language:ruby"},
        { title: 'Java',query: "stars:>1+language:java"},
        { title: 'CSS',query: "stars:>1+language:css"},
      ]
      this.setState({
        messages: data
      })
    }, 500)
  }

  render () {
    const path = this.props.match.path
    console.log(this.props.location.pathname);
    return (
      <div>
        <ul  style={{display: "flex",flexDirection: "column",justifyContent:"center", listStyleType: "none",flexDirection: "row",alignItems: "center"}}>
          {
            this.state.messages.map((m, index) => {
            
              return (
                <li key={index}>
                  <MyNavLink to={`${path}/${m.query}`} >{m.title}</MyNavLink>
                  {/* <a href={`${path}/${m.query}`}>{m.title}</a> */}
                  &nbsp;&nbsp;&nbsp;
                </li>
              )
            })
          }
        </ul>
        <hr/>
      
        
        {/* {( this.props.location.pathname= "/popular") ? <Redirect to= {`${path}/stars:>1`} />:'ffffffffffff' } */}
        <Route path={`${path}/:query`} component={Popular}></Route>
      </div>
    )
  }
}