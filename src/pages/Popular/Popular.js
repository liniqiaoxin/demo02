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
      // querys: '',
      warningMsg: [],
      warning: false,
      tap: [
        { title: "All", query: "All" },
        { title: "JavaScript", query: "javascript" },
        { title: "Ruby", query: "ruby" },
        { title: "Java", query: "java" },
        { title: "Css", query: "css" }
      ]
    };
  }

  async componentDidMount() {
    const q = window.location.href.split("=")[1];
    console.log(q);
    this.search(true, q);
  }

  //  clicktap = index => {
  //   console.log("query", index)
  //   const { tap } = this.state;
  //   const t = tap[index].query
  //   console.log('---',t)
  //   this.setState({
  //     querys: t
  //   })

  //   this.search(true);
  //   // console.log(this.state.querys)
  // }

  // 模拟发送ajax请求
  search = async (clear = false, q = null) => {
    const page = clear ? 1 : this.state.page;

    const { query } = this.state;

    let newQuery = q;
    if (!q) {
      newQuery = query;
    }

    this.setState({
      loading: true,
      warning: false,
      query: newQuery
    });

    if (clear) {
      this.setState({ items: [] });
    }
    let url = `https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories&page=${page}`;
    if (!newQuery || newQuery === "All") {
      url = `https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories&page=${page}`;
    } else {
      url = `https://api.github.com/search/repositories?q=stars:%3E1+language:${newQuery}&sort=stars&order=desc&type=Repositories&page=${page}`;
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
        const msg =
          error.response && error.response.data && error.response.data.message;

        this.setState({
          warningMsg: msg,
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
    const { tap, items, warningMsg, warning, loading, query } = this.state;
    // console.log("query===", this.state.querys,window.location.href.split("=")[1])
    const lists = items.map((item, key) => (
      <Cards key={key} list={item} index={key + 1} />
    ));
    let langs = window.location.href.split("=")[1];
    if (langs === undefined || langs === "") {
      langs = "All";
    }
    const list = tap.map(m => (
      <li key={m.query} style={{ marginRight: 15, color: "balck" }}>
        <MyNavLink
          style={{
            marginRight: 15,
            color: langs === m.query ? "red" : "black"
          }}
          to={{
            pathname: "/popular",
            search: `?lang=${m.query}`
          }}
          onClick={() => this.search(true, m.query)}
          // onKeyDown={this.handleKeyDown}
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
          loadMore={() => this.search(false, query)}
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
