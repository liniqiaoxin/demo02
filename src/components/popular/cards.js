import React from "react";

class Cards extends React.Component {
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
            <img style={{ width: "50%" }} src={list.owner.avatar_url} alt="" />
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
export default Cards;
