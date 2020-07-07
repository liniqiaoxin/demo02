import React from "react";
import { NavLink } from "react-router-dom";

export default function MyNavLink(props) {
  return <NavLink {...props} activeClassName="active" />;
  // return <NavLink {...props} activeStyle={{color: 'red'}} />;
}
