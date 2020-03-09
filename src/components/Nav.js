import React from "React";
import { NavLink } from "react-router-dom";

//nav.js
const NavBar = () => (
  <div>
    <div style={{ marginTop: "30px", marginLeft: "50px" }}>
      <NavLink exact to="/">
        Popular
      </NavLink>{" "}
      &nbsp;
      <NavLink to="/Bat">Battle</NavLink>
    </div>
  </div>
);
export default NavBar;
