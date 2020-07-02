import React from "react";
import axios from "axios";

class Players extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      // login: '',
      avatarUrl: "",
      // score: 0,
      click: true,
      onLoading: false
    };
  }

  handleGetInputValue = event => {
    const username = event.target.value;
    this.setState({ username });
  };

  handlePost = () => {
    this.setState({ onLoading: true });
    const { username } = this.state;
    // 在此做提交操作，比如发dispatch等
    const { transmitDate } = this.props;
    const url = `https://api.github.com/users/${username}`;
    try {
      axios.get(url).then(response => {
        const { login, avatarUrl, publicRrepos } = response.data;
        const state = {
          login,
          avatarUrl,
          publicRrepos,
          click: false
        };
        this.setState(state);
        transmitDate(state);
      });
    } catch (e) {
      // alert('该用户名不存在');
    }
    // event.preventDefault();
    // this.setState({onLoading:false})
  };

  changed = event => {
    const name = event.target.value;
    if (name === "") {
      return;
    }
    if (!name.match("^[a-zA-Z0-9_\u4e00-\u9fa5]+$")) {
      alert("请不要输入特殊字符!");
      document.getElementById("inputName").value = "";
    }
  };

  onClick = () => {
    this.setState({
      click: true,
      onLoading: false,
      username: ""
    });
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
      button: {
        width: "125px",
        height: "48px",
        border: "0",
        fontSize: "18px"
      },
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
      if (this.state.onLoading) {
        return (
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={{ textAlign: "center" }}>
              <span>loading...</span>
            </div>
          </div>
        );
      }
      return (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <form
            onSubmit={this.handlePost}
            style={{ display: "flex", fontSize: "16px" }}
          >
            <input
              id="inputName"
              onInput={this.changed}
              type="text"
              placeholder="github username"
              value={this.state.username}
              onChange={this.handleGetInputValue}
              style={style.input}
            />
            <input
              type="submit"
              value="submit"
              disabled={!this.state.username}
              className={this.state.username ? "button" : "disbutton"}
              // className="button"
              style={style.button}
            />
          </form>
        </div>
      );
    }

    return (
      <div style={style.play}>
        <div style={style.imgp}>
          <img src={this.state.avatarUrl} style={style.img} alt="" />
          <p style={{ fontSize: "25px" }}>{this.state.username}</p>
        </div>

        <button type="button" onClick={this.onClick} style={style.btn}>
          <i className="fa fa-times" aria-hidden="true" />
        </button>
      </div>
    );
  }
}

export default Players;
