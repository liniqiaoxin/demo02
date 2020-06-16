// import React from 'react'
// export default function About() {
//   return <div>About组件内容</div>
// }

import React from "react";
import axios from "axios";
import { hot } from "react-hot-loader/root";
import { Link } from 'react-router-dom';

class Players extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      click: true,
      data: {}
    };
  }

  onClick = () => {
    const { username } = this.state;
    if (username === '') return;
    const url = `https://api.github.com/search/users?q=${username}`;
    axios.get(url).then((res) => {
      const data = res && res.data.items[0]
      this.setState({
        data,
        click: false,
      }, () => {
        this.props.getPlayers(username)
      })
    });
  };

  close = () => {
    this.setState({ click: true, username: '' }, () => {
      this.props.getPlayers(this.state.username)
    });
  }

  onChange = (e) => {
    this.setState({ username: e.target.value })
  }

  render() {
    const { click, data } = this.state
    const style = {
      input: {
        width: "360px",
        height: "42px",
        marginRight: "20px",
        fontSize: "16px"
      },
      button: { width: "125px", height: "48px", border: "0", fontSize: "18px" },
      play: {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "nowrap",
        background: "#e5e5e5",
        textAlign: "center",
        alignItems: "center"
      },
      img: {
        width: "50px",
        height: "50px",
        marginRight: "20px",
        marginLeft: "20px"
      },
      btn: {
        fontSize: "25px",
        backgroundColor: "#e5e5e5",
        border: "0",
        color: "red"
      },
      imgp: { display: "flex", flexWrap: "nowrap", alignItems: "center" }
    };
    return (
      <>
        {
          click ? 
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <form style={{ display: "flex", fontSize: "16px" }}>
                <input
                  type="text"
                  placeholder="github username"
                  value={this.state.username}
                  onChange={this.onChange}
                  style={style.input}
                />
                <input
                  type="submit"
                  value="submit"
                  className="button"
                  onClick={this.onClick}
                  style={style.button}
                />
              </form>
            </div>
          : 
           <div style={style.play}>
              <div style={style.imgp}>
                <img src={data.avatar_url} style={style.img} />
                <p style={{ fontSize: "25px" }}>{data.login}</p>
              </div>
    
              <button  onClick={() => this.close()} style={style.btn}>
                <i className="fa fa-times" aria-hidden="true"></i>
              </button>
            </div>
        }
      </>
    )
  }
}

class Instructions extends React.Component {
  render() {
    const style = {
      col1: { fontSize: "20px", textAlign: "center", margin: "8px 16px" },
      icon1: {
        backgroundColor: "#eee",
        fontSize: "120px",
        padding: "32px",
        color: "rgba(255,191,116)"
      },
      col2: { fontSize: "20px", textAlign: "center", margin: "8px 16px" },
      icon2: {
        backgroundColor: "#eee",
        fontSize: "120px",
        padding: "32px",
        color: "gray"
      },
      col3: { fontSize: "20px", textAlign: "center", margin: "8px 16px" },
      icon3: {
        backgroundColor: "#eee",
        fontSize: "120px",
        padding: "32px",
        color: " gold"
      }
    };

    return (
      <div>
        <h2 className="text-center">Instructions</h2>
        <div className="row">
          <div className="col-1" style={{ alignItems: "flex-end" }}>
            <div style={style.col1}>Enter two Github</div>
            <div>
              <i className="fa fa-users" style={style.icon1} />
            </div>
          </div>
          <div className="col-2" style={{ alignItems: "center" }}>
            <div style={style.col2}>Battle</div>
            <div>
              <i className="fa fa-fighter-jet" style={style.icon2} />
            </div>
          </div>
          <div className="col-3" style={{ alignItems: "flex-start" }}>
            <div style={style.col3}>See the winner</div>
            <div>
              <i className="fa fa-trophy" style={style.icon3} />
            </div>
          </div>
        </div>
        <div>
          <h3 style={{ textAlign: "center" }}>players</h3>
        </div>
      </div>
    );
  }
}



class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      last: '',
    };
  }

  playerOne = (first) => {
    this.setState({
      first
    })
  }

  playerTwo = (last) => {
    this.setState({
      last
    })
  }
  

  render() {
    const { first, last } = this.state;
    const style = {
      btn: { display: "flex", justifyContent: "center", marginTop: "10px" },
      b: { fontSize: "18px", border: "0", textAlign: "center" },
    };
    console.log(first, last);
    return (

      <div>
          <div>
            <Instructions />
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                width: "500px"
              }}
            >
              <h3>Player One</h3>
              <Players getPlayers={this.playerOne.bind(this)} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                width: "500px"
              }}
            >
              <h3>Player Two</h3>
              <Players getPlayers={this.playerTwo.bind(this)} />
            </div>
          </div>
          <div style={style.btn}>
            <button
              style={style.b}
              className={first.length == 0 || last.length == 0 ? "hide" : ""}
              onClick={this.clickBattle}
            >
              <Link to={{ pathname: `/result/${first}&${last}`, query: { first, last } }}>BATTLE</Link>
            </button>
          </div>
        </div>
    );
  }
}

export default hot(About);