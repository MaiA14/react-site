import { NavLink } from "react-router-dom";
import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div className="topnav">
        <NavLink activeClassName="active" to="/under-construction" exact>
          רקע
        </NavLink>
        <NavLink activeClassName="active" to="/under-construction" exact>
          תשובות
        </NavLink>
        <NavLink activeClassName="active" to="/insights" exact>
          תובנות
        </NavLink>
        <NavLink activeClassName="active" to="/under-construction" exact>
          החלטות
        </NavLink>
      </div>
    );
  }
}
