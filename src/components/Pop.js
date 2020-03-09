import React from "react";
import axios from "axios";

import InfiniteScroll from "react-infinite-scroller";

class Pop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      end: false,
      page: 1,
      items: []
    };
  }

  componentDidMount() {
    this.search();
  }

  componentDidUpdate(prevProps) {
    if (this.props.query !== prevProps.query) {
      this.search(true);
    }
  }

  search = async (clear = false) => {
    const { query } = this.props;
    const page = clear ? 1 : this.state.page;

    this.setState({ loading: true });
    if (clear) {
      this.setState({ items: [] });
    }
    try {
      const res = await axios.get(
        `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&type=Repositories&page=${page}`
      );
      console.log("res", res.data);
      this.setState(state => ({
        items: clear ? res.data.items : [...state.items, ...res.data.items],
        page: clear ? 1 : state.page + 1
      }));
    } catch (error) {
      console.log("error", error);
      this.setState({
        end: true
      });
    }
    this.setState({ loading: false });
  };

  render() {
    const { onClick, current } = this.props;
    const { items, loading, end } = this.state;
    const lists = items.map((item, key) => (
      <List key={key} list={item} index={key + 1} />
    ));
    const links = [
      {
        title: "All",
        query: "stars:>1"
      },
      {
        title: "JavaScript",
        query: "stars:>1+language:javascript"
      },
      {
        title: "Ruby",
        query: "stars:>1+language:ruby"
      },
      {
        title: "Java",
        query: "stars:>1+language:java"
      },
      {
        title: "CSS",
        query: "stars:>1+language:css"
      }
    ];
    return (
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Lists onClick={onClick} current={current} links={links} />
        </div>
        <InfiniteScroll
          initialLoad={false}
          loadMore={() => this.search(false)}
          hasMore={!loading || end}
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

class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = { current: props.current };
  }

  onClick(query) {
    const { onClick } = this.props;
    this.setState({ current: query });
    onClick(query);
  }

  render() {
    const { links } = this.props;
    const { current } = this.state;
    // 现在样式变内联了，如何实现:hover, :active的功能？
    const children = links.map((item, key) => (
      <li
        style={{
          display: "inline-flex",
          padding: "8px 16px",
          fontSize: "18px"
        }}
        key={key}
      >
        <a
          href="#"
          onClick={() => this.onClick(item.query)}
          className={current === item.query ? "active" : ""}
        >
          {item.title}
        </a>
      </li>
    ));
    return (
      <ul
        style={{
          display: "flex",
          listStyleType: "none",
          flexDirection: "row",
          margin: 0,
          padding: 0
        }}
      >
        {children}
      </ul>
    );
  }
}

class List extends React.Component {
  render() {
    const { index, list } = this.props;
    return (
      <div
        style={{
          boxSizing: "border-box",
          width: "200px",
          padding: "24px",
          paddingRight: "10px",
          marginTop: "10px",
          marginBottom: "10px",
          backgroundColor: "rgb(235, 235, 235)"
        }}
      >
        <div style={{ paddingRight: "24px" }}>
          <h2 className="text-center">#{index}</h2>
          <div className="text-center">
            <img style={{ width: "50%" }} src={list.owner.avatar_url} />
          </div>
          <h4
            style={{
              display: "flex",
              flexDirection: "row",
              height: "36px",
              justifyContent: "center"
            }}
          >
            {list.owner.login}
          </h4>
        </div>

        <div>
          <i
            className="fa fa-user"
            style={{
              display: "inline-flex",
              width: "16px",
              justifyContent: "center",
              color: "orange"
            }}
          />
          {list.owner.login}
        </div>
        <div>
          <i
            className="fa fa-star"
            style={{
              display: "inline-flex",
              width: "16px",
              justifyContent: "center",
              color: "yellow"
            }}
          />
          {list.stargazers_count} stars
        </div>
        <div>
          <i
            className="fa fa-code-fork"
            style={{
              display: "inline-flex",
              width: "16px",
              justifyContent: "center",
              color: "blue"
            }}
          />
          {list.forks} forks
        </div>
        <div>
          <i
            className="fa fa-exclamation-triangle"
            style={{
              display: "inline-flex",
              width: "16px",
              justifyContent: "center",
              color: "pink"
            }}
          />
          {list.open_issues} open issues
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "stars:>1"
    };
  }

  onClick = query => {
    this.setState({
      query
    });
  };

  render() {
    const { query } = this.state;

    return (
      <div>
        <Pop query={query} current={query} onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
