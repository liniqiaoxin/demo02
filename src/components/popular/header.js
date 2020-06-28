import React from "react";
import { Route, Redirect } from "react-router-dom";
import MyNavLink from "../../pages/my-nav-link";
import Popular from "./Popular";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    // 模拟发送ajax请求
    setTimeout(() => {
      const data = [
        { title: "All", query: "stars:>1" },
        { title: "JavaScript", query: "stars:>1+language:javascript" },
        { title: "Ruby", query: "stars:>1+language:ruby" },
        { title: "Java", query: "stars:>1+language:java" },
        { title: "Css", query: "stars:>1+language:css" }
      ];
      this.setState({
        messages: data
      });
    }, 500);
  }

  render() {
    const { path } = this.props.match;
    console.log(this.props.location.pathname);
    return (
      <div>
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            listStyleType: "none",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          {this.state.messages.map((m, index) => (
            <li key={index}>
              <MyNavLink to={`${path}/${m.query}`}>{m.title}</MyNavLink>
              {/* <a href={`${path}/${m.query}`}>{m.title}</a> */}
              &nbsp;&nbsp;&nbsp;
            </li>
          ))}
        </ul>
        <hr />

        {this.props.location.pathname === "/popular" ? (
          <Redirect to={`${path}/stars:>1`} />
        ) : (
          ""
        )}
        <Route path={`${path}/:query`} component={Popular} />
      </div>
    );
  }
}
