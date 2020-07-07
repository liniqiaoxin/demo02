import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "@/pages/App";
import "font-awesome/css/font-awesome.min.css";
import "@/styles/index.less";
import "@/index.css";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>
  document.getElementById("app")
);
