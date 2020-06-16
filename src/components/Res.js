import React from 'react';
import axios from 'axios';
import { hot } from 'react-hot-loader/root';
import { Link } from 'react-router-dom';


class Res extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data1: {},
            data2: {}
        };
    }

    componentDidMount() {
        const { first, last } = this.props.location.query
        const url1 = `https://api.github.com/users/${first}`;
        const url2 = `https://api.github.com/users/${last}`;
        axios.get(url1).then((res) => {
            this.setState({
                data1: res.data
            })
        });
        axios.get(url2).then((res) => {
            this.setState({
                data2: res.data
            })
        });

    }

    render() {

        const { data1, data2 } = this.state
        console.log(data1, data2);
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
            if (data1.public_repos > data2.public_repos) {
                return (
                  <div style={style.result}>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                      <div style={style.resultCard}>
                        <h3>Winner</h3>
                        <img src={data1.avatar_url} style={style.img} />
                        <p style={style.p}>{data1.login}</p>
                        <h4 style={style.h}>score:{data1.public_repos}</h4>
                      </div>
                      <div style={style.resultCard}>
                        <h3>Loser</h3>
                        <img src={data2.avatar_url} style={style.img} />
                        <p style={style.p}>{data2.login}</p>
                        <h4 style={style.h}>score:{data2.public_repos}</h4>
                      </div>
                    </div>
                    <div style={style.btn}>
                      <button style={style.b} >
                        <Link to={{ pathname: '/Bat' }}>RESET</Link>
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
                        <img src={data2.avatar_url} style={style.img} />
                        <p style={style.p}>{data2.login}</p>
                        <h4 style={style.h}>score:{data2.public_repos}</h4>
                      </div>
                      <div style={style.resultCard}>
                        <h3>Loser</h3>
                        <img src={data1.avatar_url} style={style.img} />
                        <p style={style.p}>{data1.login}</p>
                        <h4 style={style.h}>score:{data1.public_repos}</h4>
                      </div>
                    </div>
                    <div style={style.btn}>
                      <button style={style.b}>
                        <Link to={{ pathname: '/Bat' }}>RESET</Link>
                      </button>
                    </div>
                  </div>
                );
              }  
    }

}

export default hot(Res);