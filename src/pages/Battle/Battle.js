import React from "react";
import { hot } from "react-hot-loader/root";
import Players from "@/pages/battle/components/Players";
import Instructions from "@/pages/battle/components/Instructions";

class Bat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: [],
      last: [],
      firstName: "",
      lastName: ""
    };
  }

  clickBattle = () => {
    const { first, last } = this.state;
    if (first.length !== 0 && last.length !== 0) {
      this.setState({
        first: [],
        last: [],
        firstName: "",
        lastName: ""
      });
    }
    const { firstName, lastName } = this.state;
    this.props.history.push({
      pathname: `/battle/result/?player1=${firstName}&player2=${lastName}`
    });
  };

  transmitDate = date => {
    const { first, last } = this.state;
    if (first.length === 0 && last.length === 0) {
      this.setState({
        first: date,
        firstName: date.login
      });
    } else if (last.length === 0 && first.length !== 0) {
      this.setState({
        last: date,
        lastName: date.login
      });
    }
  };

  empty = () => {
    const { first, last } = this.state;
    if (first.length !== 0 && last.length === 0) {
      this.setState({ first: [] });
    } else if (last.length !== 0 && first.length !== 0) {
      this.setState({ last: [] });
    }
  };

  render() {
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
    const { first, last } = this.state;
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
            type="button"
            style={style.b}
            className={first.length === 0 || last.length === 0 ? "hide" : ""}
            onClick={this.clickBattle}
          >
            BATTLE
          </button>
        </div>
      </div>
    );
  }
}

export default hot(Bat);
