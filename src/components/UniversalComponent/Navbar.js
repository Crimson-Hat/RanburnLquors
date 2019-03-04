import React from "react";
import logo from "./logo.png"

function NavBar() {

  return (
    <nav class="navbar">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-sm">
          <img className="img-fluid" src={logo} alt="logo" href="/" />
        </div>
        <div className="col-3"></div>
      </div>
    </nav>
  )
}

export default NavBar;