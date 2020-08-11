/* eslint-disable react/no-string-refs */
import React from "react";
import axios from "axios";
import "antd/dist/antd.css";
import InfiniteScroll from "react-infinite-scroller";
import Cards from "@/pages/popular/components/Cards";
import MyNavLink from "@/components/my-nav-link";

export default class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: false,
      // end: false,
      page: 1,
      // query: 'All',
      warningMsg: [],
      warning: false,
      messages: [
        { title: "All", query: "All" },
        { title: "JavaScript", query: "javascript" },
        { title: "Ruby", query: "ruby" },
        { title: "Java", query: "java" },
        { title: "Css", query: "css" }
      ]
    };
  }

  async componentDidMount() {
    window.addEventListener("load", () => {
      this.search(true);
    });
    window.addEventListener("hashchange", () => {
      this.clicktap(this.search(true));
    });
  }

  // 模拟发送ajax请求
  search = async (clear = false) => {
    // const { query } = this.state;
    // console.log("query", query)
    const page = clear ? 1 : this.state.page;
    const langs = window.location.href.split("=")[1];
    this.setState({
      loading: true,
      warning: false
      // query: langs
    });
    if (clear) {
      this.setState({ items: [] });
    }
    let url = `https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories&page=${page}`;
    if (langs === "All" || langs === undefined || langs === null) {
      url = `https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories&page=${page}`;
    } else {
      url = `https://api.github.com/search/repositories?q=stars:%3E1+language:${langs}&sort=stars&order=desc&type=Repositories&page=${page}`;
    }
    try {
      const res = await axios.get(url);
      this.setState(state => ({
        items: clear ? res.data.items : [...state.items, ...res.data.items],
        page: clear ? 1 : state.page + 1,
        loading: false
      }));
    } catch (error) {
      if (error.response && error.response.status === 403) {
        const msg = error.response.data;
        const warn = Object.values(msg);
        this.setState({
          warningMsg: warn[0],
          warning: true
        });
      }
      if (error.response && error.response.status === 404) {
        const msg = error.response.data;
        const warn = Object.values(msg);
        this.setState({
          warningMsg: warn[0],
          warning: true
        });
      }
    }
    this.setState({ loading: false });
  };

  render() {
    const { items, warningMsg, warning, loading } = this.state;
    const lists = items.map((item, key) => (
      <Cards key={key} list={item} index={key + 1} />
    ));
    let langs = window.location.href.split("=")[1];
    if (langs === undefined || langs === "") {
      langs = "All";
    }
    const list = this.state.messages.map((m, index) => (
      <li key={index} style={{ marginRight: 15, color: "balck" }}>
        <MyNavLink
          style={{
            marginRight: 15,
            color: langs === m.query ? "red" : "black"
          }}
          to={{
            pathname: "/popular",
            search: `?lang=${m.query}`
          }}
          onClick={this.clicktap}
        >
          {m.title}
        </MyNavLink>
      </li>
    ));

    return (
      <div>
        <div>
          <ul
            style={{
              display: "flex",
              justifyContent: "center",
              listStyleType: "none",
              flexDirection: "row",
              alignItems: "center",
              color: "#000"
            }}
          >
            {list}
          </ul>
        </div>
        <InfiniteScroll
          initialLoad={false}
          loadMore={() => this.search(false)}
          hasMore={!loading && !warning}
          loader={null}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-around",
                marginBottom: "48px",
                width: "990px"
              }}
            >
              {lists}
            </div>
          </div>
          {warning ? (
            <p style={{ color: "red", textAlign: "center" }}>{warningMsg}</p>
          ) : (
            ""
          )}

          {loading && (
            <div style={{ textAlign: "center" }}>
              <span>正在加载...</span>
            </div>
          )}
        </InfiniteScroll>
      </div>
    );
  }
}
