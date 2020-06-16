import React from 'react'
import axios from "axios";
import Cards from './cards'
import InfiniteScroll from "react-infinite-scroller";


export default function Popular(props) {

  const query = props.match.params.query;
  console.log('----', query)
  return (<Pop {...props} />)
}

// export default function MessageDetail(props){
class Pop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      end: false,
      page: 1,
      items: [],
      clear: false,
      query: this.props
    };
  }

  componentDidMount = async (clear = false) => {
    // this.search();
    const { query } = this.state.query;
    console.log('a', query);
    const page = clear ? 1 : this.state.page;
    console.log("query", query);
    this.setState({ loading: true,
      query:this.props });
    if (clear) {
      this.setState({ items: [] });
    }
    try {
      const res = await axios.get(`https://api.github.com/search/repositories?q=stars:>1&sort=stars&order=desc&type=Repositories&page=${page}`);
      console.log("res", res.data);
      // this.items = res.data
      this.setState(state => ({
        items: clear ? res.data.items : [...state.items, ...res.data.items],
        page: clear ? 1 : state.page + 1
      }));
    } catch (error) {
      console.log("error", error);
      this.setState({
        end: true
      });

    };
    this.setState({ loading: false });
  }

  componentDidUpdate(prevProps) {
    // if (this.props.query !== prevProps.props) {
    //   this.search(true);
    // };
    // console.log('[[[', prevProps);
    // console.log('this.props.query ', this.props.query);
    // // debugger  prevProps.match.params.query
    // this.setState({ 
    //   query:this.props
    //  });
  }

  // search = async (clear = false) => {
  
  //   // const query = this.props.match.params.query;
  //   const { query } = this.state.query;
  //   console.log('a', query);
  //   const page = clear ? 1 : this.state.page;
  //   console.log("query", query);
  //   this.setState({ loading: true,
  //     query:this.props });
  //   if (clear) {
  //     this.setState({ items: [] });
  //   }
  //   try {
  //     const res = await axios.get(`https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&type=Repositories&page=${page}`);
  //     console.log("res", res.data);
  //     // this.items = res.data
  //     this.setState(state => ({
  //       items: clear ? res.data.items : [...state.items, ...res.data.items],
  //       page: clear ? 1 : state.page + 1
  //     }));
  //   } catch (error) {
  //     console.log("error", error);
  //     this.setState({
  //       end: true
  //     });

  //   };
  //   this.setState({ loading: false });
  // };

  render() {


    const { items, loading, end } = this.state;
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
// }

// export default Popular;
