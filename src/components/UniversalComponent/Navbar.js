import React from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";

function NavBar() {

  return (
    <nav class="navbar">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-sm">
          <Link  to="/">
          <img className="img-fluid" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="col-3"></div>
      </div>
    </nav>
  )
}

export default NavBar;