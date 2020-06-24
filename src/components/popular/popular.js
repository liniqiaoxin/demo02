import React from 'react'
import axios from "axios";
import Cards from './cards'
import InfiniteScroll from "react-infinite-scroller";


export default class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: false,
      end: false,
      page: 1,
      clear: false,
      query: props.match.params.query
    };
  }
  
  async componentDidMount() {
    this.search(true);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ query: nextProps.match.params.query });
    sessionStorage.setItem("query", nextProps.match.params.query)

    if (sessionStorage.getItem("query")) {
      const getquery = JSON.stringify(window.sessionStorage.getItem('query'))
      this.setState({
        query: getquery,
      })
    }
    this.setState({
      items: []  
    });
    this.search(true);
  }



  // 模拟发送ajax请求
  search = async (clear = false) => {
    const query = this.state.query;
    const page = clear ? 1 : this.state.page;
   
    this.setState({ loading: true });
    if (clear) {
      this.setState({ items: [] });
    }
    try {
      const res = await axios
        .get(`https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&type=Repositories&page=${page}`)
      this.setState(state => ({
        items: clear ? res.data.items : [...state.items, ...res.data.items],
        page: clear ? 1 : state.page + 1
      }));
    }
    catch (e) {
      // alert("获取数据失败")
      console.log('获取数据失败');
      this.setState({
        end: true
      });

    };
    this.setState({ loading: false });
  };


  render() {
    const items = this.state.items
    const { loading, end } = this.state;
    const lists = items.map((item, key) => (
      <Cards key={key} list={item} index={key + 1} />
    ));

    return (
      <div>
        <InfiniteScroll
          initialLoad={false}
          loadMore={() => this.search(false)}
          hasMore={!loading || end}
          loader={null}
        >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              display: 'flex',
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
              marginBottom: "48px",
              width: '990px'
            }}>
              {lists}
            </div>
          </div>

          {loading &&
            <div style={{ textAlign: "center" }}>
              <span>正在加载...</span>
            </div>
          }
        </InfiniteScroll>
      </div>
    );
  }
}