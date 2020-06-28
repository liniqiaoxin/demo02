import React from "react";

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
export default Instructions;
