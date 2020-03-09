import React from "react";
import axios from "axios";
import { hot } from "react-hot-loader/root";

class Players extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      login: "",
      avatar_url: "",
      score: 0,
      click: true
    };
  }

  handleGetInputValue = event => {
    const username = event.target.value;
    this.setState({ username });
  };

  handlePost = () => {
    const { username } = this.state;
    console.log(username, "------username");
    //在此做提交操作，比如发dispatch等
    const { transmitDate } = this.props;
    const url = "https://api.github.com/search/users?q=" + username;
    axios.get(url).then(response => {
      const { login, avatar_url, score } = response.data.items[0];
      const state = {
        login,
        avatar_url,
        score,
        click: false
      };
      this.setState(state);
      transmitDate(state);
    });
    event.preventDefault();
  };
  onClick = () => {
    this.setState({ click: true });
    this.props.empty();
  };

  render() {
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
    if (this.state.click) {
      return (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <form
            onSubmit={this.handlePost}
            style={{ display: "flex", fontSize: "16px" }}
          >
            <input
              type="text"
              placeholder="github username"
              value={this.state.username}
              onChange={this.handleGetInputValue}
              style={style.input}
            />
            <input
              type="submit"
              value="submit"
              className="button"
              style={style.button}
            />
          </form>
        </div>
      );
    } else {
      return (
        <div style={style.play}>
          <div style={style.imgp}>
            <img src={this.state.avatar_url} style={style.img} />
            <p style={{ fontSize: "25px" }}>{this.state.username}</p>
          </div>

          <button onClick={this.onClick} style={style.btn}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
      );
    }
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

class Bat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: "BATTLE",
      first: [],
      last: []
    };
  }
  clickBattle = () => {
    const { player, first, last } = this.state;
    if (player == "BATTLE" && first.length != 0 && last.length != 0) {
      this.setState({ player: "RESET" });
    } else if (player == "RESET" && first.length != 0 && last.length != 0) {
      this.setState({
        player: "BATTLE",
        first: [],
        last: []
      });
    }
  };
  transmitDate = date => {
    const { first, last } = this.state;
    if (first.length == 0 && last.length == 0) {
      this.setState({ first: date });
    } else if (last.length == 0 && first.length != 0) {
      this.setState({ last: date });
    }
  };
  empty = () => {
    const { first, last } = this.state;
    if (first.length != 0 && last.length == 0) {
      this.setState({ first: [] });
    } else if (last.length != 0 && first.length != 0) {
      this.setState({ last: [] });
    }
  };

  render() {
    const { player, first, last } = this.state;
    const style = {
      btn: { display: "flex", justifyContent: "center", marginTop: "10px" },
      b: { fontSize: "18px", border: "0", textAlign: "center" },
      result: { marginTop: "95px" },
      resultCard: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "200px",
        backgroundColor: "#e5e5e5"
      },
      img: { width: "150px" },
      p: { fontSize: "18px" },
      h: { marginTop: "0" }
    };
    console.log("first", first.score);
    console.log("last", last.score);
    if (player == "BATTLE" || first.length == 0 || last.length == 0) {
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
              <Players transmitDate={this.transmitDate} empty={this.empty} />
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
              <Players transmitDate={this.transmitDate} empty={this.empty} />
            </div>
          </div>
          <div style={style.btn}>
            <button
              style={style.b}
              className={first.length == 0 || last.length == 0 ? "hide" : ""}
              onClick={this.clickBattle}
            >
              {player}
            </button>
          </div>
        </div>
      );
    }
    if (first.score > last.score) {
      return (
        <div style={style.result}>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={style.resultCard}>
              <h3>Winner</h3>
              <img src={first.avatar_url} style={style.img} />
              <p style={style.p}>{first.login}</p>
              <h4 style={style.h}>score:{first.score}</h4>
            </div>
            <div style={style.resultCard}>
              <h3>Loser</h3>
              <img src={last.avatar_url} style={style.img} />
              <p style={style.p}>{last.login}</p>
              <h4 style={style.h}>score:{last.score}</h4>
            </div>
          </div>
          <div style={style.btn}>
            <button style={style.b} onClick={this.clickBattle}>
              {player}
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div style={style.result}>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={style.resultCard}>
              <h3>Winner</h3>
              <img src={last.avatar_url} style={style.img} />
              <p style={style.p}>{last.login}</p>
              <h4 style={style.h}>score:{last.score}</h4>
            </div>
            <div style={style.resultCard}>
              <h3>Loser</h3>
              <img src={first.avatar_url} style={style.img} />
              <p style={style.p}>{first.login}</p>
              <h4 style={style.h}>score:{first.score}</h4>
            </div>
          </div>
          <div style={style.btn}>
            <button style={style.b} onClick={this.clickBattle}>
              {player}
            </button>
          </div>
        </div>
      );
    }
  }
}

export default hot(Bat);
