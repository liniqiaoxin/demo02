import React from "react";
import axios from "axios";
import zwt from "@/components/assets/zwt.gif";

class Players extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      // login: '',
      // avatar_url: "",
      lists: [],
      // score: 0,
      click: true,
      onLoading: false,
      done: false
    };
  }

  // componentWillMount() {
  //   // 创建一个虚拟图片
  //   const img = new Image();
  //   // 发出请求，请求图片
  //   img.src = this.state.lists.avatar_url
  //   // 当图片加载完毕
  //   img.onload = () => {
  //     this.setState({
  //       done: true
  //     });
  //   }

  // }

  handleGetInputValue = event => {
    const username = event.target.value;
    this.setState({ username });
  };

  handlePost = async () => {
    this.setState({ onLoading: true });
    const { username } = this.state;
    // 在此做提交操作，比如发dispatch等
    const { transmitDate } = this.props;
    const url = `https://api.github.com/users/${username}`;

    try {
      const res = await axios.get(url);
      // axios.get(url).then(response => {
      // console.log(res);
      if (res.status === 200) {
        const { login } = res.data;
        this.setState({
          lists: res.data,
          done: true
        });
        const state = {
          login,
          click: false
        };
        this.setState(state);
        transmitDate(state);
      }
    } catch (e) {
      alert("该用户名不存在");
      this.setState({
        onLoading: false
      });
    }
    // event.preventDefault();
    // this.setState({onLoading:false})
  };

  changed = event => {
    const name = event.target.value;
    if (name === "") {
      return;
    }
    const reg = /^[\u4e00-\u9fa5]+|[a-zA-Z0-9]+$/;
    if (reg.test(name) === false) {
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
          {this.state.done ? (
            <img style={style.img} src={this.state.lists.avatar_url} alt="" />
          ) : (
            <img style={style.img} src={zwt} alt="" />
          )}
          {/* <img src={this.state.lists.avatar_url} style={style.img} alt="" /> */}
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
