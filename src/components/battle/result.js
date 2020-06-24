

import React from "react";
import axios from "axios";
import { hot } from "react-hot-loader/root";
import { Link } from 'react-router-dom'





class Result extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            first: {},
            last: {},
        };
    }
    getValue = (username) => {
        let url = `https://api.github.com/users/${username}`;
        return new Promise((resolve, reject) => {
            axios
                .get(url)
                .then((data) => {
                    resolve(data);
                })
                .catch((data) => {
                    reject(data);
                });
        });
    };

    async componentDidMount() {
        const firstDate = this.props.match.params.firstName;
        const lastDate = this.props.match.params.lastName;
        const f = await this.getValue(firstDate);
        const s = await this.getValue(lastDate);
        if (f) {
            this.setState({
                first: f.data,
                last: s.data,
            });
        }
    }
  

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
                                <img src={first.avatar_url} style={style.img} />
                                <p style={style.p}>{first.login}</p>
                                <h4 style={style.h}>score:{first.public_repos}</h4>
                            </div>
                            <div style={style.resultCard}>
                                <h3>Loser</h3>
                                <img src={last.avatar_url} style={style.img} />
                                <p style={style.p}>{last.login}</p>
                                <h4 style={style.h}>score:{last.public_repos}</h4>
                            </div>
                        </div>
                        <div style={style.btn}>
                            <Link to="/battle">
                                <button style={style.b} onClick={this.clickBattle}>
                                    Reset
                        </button>
                            </Link>
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
                                <h4 style={style.h}>score:{last.public_repos}</h4>
                            </div>
                            <div style={style.resultCard}>
                                <h3>Loser</h3>
                                <img src={first.avatar_url} style={style.img} />
                                <p style={style.p}>{first.login}</p>
                                <h4 style={style.h}>score:{first.public_repos}</h4>
                            </div>
                        </div>
                        <div style={style.btn}>
                            <Link to="/battle">
                                <button style={style.b} onClick={this.clickBattle}>
                                    Reset
                        </button>
                            </Link>
                        </div>
                    </div>
                );
            }
        }
    }

    export default hot(Result);
