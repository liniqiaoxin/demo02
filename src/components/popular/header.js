import React from "react";
import { Route, Redirect } from "react-router-dom";
import Popular from "@/pages/Popular";
import MyNavLink from "@/components/popular/My-nav-link";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    // 模拟发送ajax请求
    // setTimeout(() => {
    const data = [
      { title: "All", query: "All" },
      { title: "JavaScript", query: "javascript" },
      { title: "Ruby", query: "ruby" },
      { title: "Java", query: "java" },
      { title: "Css", query: "css" }
    ];
    this.setState({
      messages: data
    });
    // }, 500);
  }

  render() {
    const { path } = this.props.match;
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
              <MyNavLink to={`${path}/${m.query}`} query={m.query}>
                {m.title}
              </MyNavLink>
              {/* <a href={`${path}/?lang=${m.query}`}>{m.title}</a> */}
              &nbsp;&nbsp;&nbsp;
            </li>
          ))}
        </ul>
        <hr />
        {/*         
        {this.props.location.pathname === "/popular" ? (
          <Redirect to={{
            pathname: '/popular',
            search: `?lang=All`,
          }}
          />
        ) : (
            ""
          )}
        <Route
          to={{
          pathname: '/popular?lang=',
          search: `:query`,
        }}
          component={Popular}
        /> */}

        {this.props.location.pathname === "/popular" ? (
          <Redirect to={`${path}/All`} />
        ) : (
          ""
        )}
        <Route path={`${path}/:query`} component={Popular} />
      </div>
    );
  }
}
