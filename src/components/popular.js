import React from 'react'
import axios from "axios";
import Cards from './cards'
import InfiniteScroll from "react-infinite-scroller";

export default class Popular extends React.Component {
  // state = {
  //   items: []
  // }
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: false,
      end: false,
      page: 1,

      clear: false,
      // query: props.query,
      //  id: props.match.params.id,
      query: props.match.params.query
    };

  }

  componentDidMount() {
    this.search();
  }
  // componentDidUpdate(prevProps) {
  //   if (this.props.query !== prevProps.query) {
  //     this.search(true);
  //   }
  // }
  componentWillReceiveProps(nextProps) {
    this.setState({ query: nextProps.match.params.query });
    this.search(true);
    this.setState({ items: [] });
    console.log('nextProps', nextProps.match.params.query)
  }

  // 模拟发送ajax请求
  search = async (clear = false) => {
    const query = this.state.query;
    console.log('query', query)
    // console.log('query', props.match.params.query)
    const page = clear ? 1 : this.state.page;
    const url = `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&type=Repositories&page=${page}`;
    console.log('url', url)
    this.setState({ loading: true });
    if (clear) {
      this.setState({ items: [] });
    }
    try {
      const res = await axios
        .get(`https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&type=Repositories&page=${page}`)


      console.log('res', res.data)
      this.setState(state => ({
        items: clear ? res.data.items : [...state.items, ...res.data.items],
        page: clear ? 1 : state.page + 1
      }));
    }
    catch (e) {
      console.log('获取数据失败');
      this.setState({
        end: true
      });

    };
    this.setState({ loading: false });

  };


  render() {
    const items = this.state.items
    // console.log('map', items)
    const { loading, end } = this.state;
    const lists = items.map((item, key) => (
      <Cards key={key} list={item} index={key + 1} />
    ));
    console.log('lists', lists)

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
  // render () {
  //   const items = this.state.items
  //   console.log('---',items)
  //   return (<Pop items={items} />)
  // }
}

// export default function Popular(props) {
//   // var items;
//   const items = []
//   axios
//     .get(`https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&type=Repositories`)
//     .then(res => {
//       // items.push( res.data.items)
//       const items = res.data.items
//       //  this.items =res.data.items
//       // return items;
//       console.log('数据是:', items);
//     })
//     .catch((e) => {
//       console.log('获取数据失败');
//     });

//   console.log('数据是2:', items);
//   // const i = items.data.items;
//   // console.log('数据是3:', i);
//   const query = props.match.params.query;
//   // console.log('----', query)
//   return (<Pop items={items} />)

// }

// export default function MessageDetail(props){
class Pop extends React.Component {
  render() {
    const items = this.state.items
    // console.log('map', items)
    const { loading, end } = this.state;
    const lists = items.map((item, key) => (
      <Cards key={key} list={item} index={key + 1} />
    ));
    console.log('lists', lists)

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