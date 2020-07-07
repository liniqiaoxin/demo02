import React from "react";
import axios from "axios";
import { hot } from "react-hot-loader/root";
import { Link } from "react-router-dom";
// import zwt from '../assets/zwt.jpg'

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: {},
      last: {}
      // done: true,
      // firstImageUrl: ''
      // firstName: this.props.match.params.firstName,
      // lastName: this.props.match.params.lastName,
    };
  }

  async componentDidMount() {
    // const myhref = window.location.href.split('?')[1].split('&')
    // console.log('href', window.location.href.split('?')[1].split('&'))
    // const firstN = myhref[0].split('=')[1]
    // const lastN = myhref[1].split('=')[1]
    // console.log(firstN, lastN)
    // this.setState({
    //   firstName: firstN,
    //   lastName: lastN
    // })
    // const firstDate = this.state.firstName;
    // const lastDate = this.state.lastName;
    const firstDate = this.props.match.params.firstName;
    const lastDate = this.props.match.params.lastName;
    const f = await this.getValue(firstDate);
    const s = await this.getValue(lastDate);
    if (f) {
      this.setState({
        first: f.data,
        last: s.data
        // firstImageUrl:  f.data.avatar_url,
        // done: false
      });
    }
  }

  // handleImageLoaded = () => { };

  // handleImageErrored = () => {
  //   this.setState({
  //     firstImageUrl: zwt
  //   });
  // };

  getValue = username => {
    const url = `https://api.github.com/users/${username}`;
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then(data => {
          resolve(data);
        })
        .catch(data => {
          reject(data);
        });
    });
  };

  render() {
    const { first, last } = this.state;
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

    if (first.public_repos > last.public_repos) {
      return (
        <div style={style.result}>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={style.resultCard}>
              <h3>Winner</h3>
              {/* {
                this.state.doneLast
                  ? (
                    <img
                      style={style.img}
                      src={first.avatar_url}
                      alt=""
                    />
                  )
                  : (
                    <img
                      style={style.img}
                      src={zwt}
                      alt=""
                    />
                  )
              } */}
              {/* {this.state.done ? (
                <img style={{ width: "50%" }} src={zwt} alt="" />
              ) : (
                <img
                  style={style.img}
                  src={this.state.firstImageUrl}
                  onLoad={this.handleImageLoaded}
                  onError={this.handleImageErrored}
                  alt=""
                />

                )} */}
              <img src={first.avatar_url} style={style.img} alt="" />
              <p style={style.p}>{first.login}</p>
              <h4 style={style.h}>score:{first.public_repos}</h4>
            </div>
            <div style={style.resultCard}>
              <h3>Loser</h3>
              {/* {
                this.state.doneFirst
                  ? (
                    <img
                      style={style.img}
                      src={last.avatar_url}
                      alt=""
                    />
                  )
                  : (
                    <img
                      style={style.img}
                      src={zwt}
                      alt=""
                    />
                  )
              } */}
              <img src={last.avatar_url} style={style.img} alt="" />
              <p style={style.p}>{last.login}</p>
              <h4 style={style.h}>score:{last.public_repos}</h4>
            </div>
          </div>
          <div style={style.btn}>
            <Link to="/battle">
              <button type="button" style={style.b} onClick={this.clickBattle}>
                Reset
              </button>
            </Link>
          </div>
        </div>
      );
    }
    return (
      <div style={style.result}>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div style={style.resultCard}>
            <h3>Winner</h3>
            {/* {
              this.state.doneFirst
                ? (
                  <img
                    style={style.img}
                    src={last.avatar_url}
                    alt=""
                  />
                )
                : (
                  <img
                    style={style.img}
                    src={zwt}
                    alt=""
                  />
                )
            } */}
            <img src={last.avatar_url} style={style.img} alt="" />
            <p style={style.p}>{last.login}</p>
            <h4 style={style.h}>score:{last.public_repos}</h4>
          </div>
          <div style={style.resultCard}>
            <h3>Loser</h3>
            {/* {
              this.state.doneLast
                ? (
                  <img
                    style={style.img}
                    src={first.avatar_url}
                    alt=""
                  />
                )
                : (
                  <img
                    style={style.img}
                    src={zwt}
                    alt=""
                  />
                )
            } */}
            {/* {this.state.done ? (
              <img style={{ width: "50%" }} src={zwt} alt="" />
              ) : (
                <img
                  style={style.img}
                  src={this.state.firstImageUrl}
                  onLoad={this.handleImageLoaded}
                  onError={this.handleImageErrored}
                  alt=""
                />

                )} */}
            <img src={first.avatar_url} style={style.img} alt="" />
            <p style={style.p}>{first.login}</p>
            <h4 style={style.h}>score:{first.public_repos}</h4>
          </div>
        </div>
        <div style={style.btn}>
          <Link to="/battle">
            <button type="button" style={style.b} onClick={this.clickBattle}>
              Reset
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default hot(Result);
