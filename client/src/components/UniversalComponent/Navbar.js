import React from "react";
import logo from "./logo.png";
import { Link, NavLink } from "react-router-dom";

function NavBar() {

  return (
    <nav>
      {/* Logo */}
      <div className="row container-fluid">
        <div className="col-3"></div>
        <div className="col-sm">
          <Link to="/">
            <img className="img-fluid" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="col-3"></div>
      </div>
      {/* NavLinks Line */}
      <div className="row container-fluid">
        <div className="container col-3 text-center">
        </div>
      <div className="row container col-6">
          <div className="col-4 text-center">
            <NavLink
              to='/wines'
              className="tags"
              activeStyle={{ color: 'red', fontWeight: 'bold' }}>
              Wines
          </NavLink>
          </div>
          <div className="col-4 text-center">
            <NavLink
              to='/spirits'
              className="tags"
              activeStyle={{ color: 'red', fontWeight: 'bold' }}>
              Spirits
          </NavLink>
          </div>
          <div className="col-4 text-center">
            <NavLink
              to='/beers'
              className="tags"
              activeStyle={{ color: 'red', fontWeight: 'bold' }}>
              Beers
            </NavLink>
          </div>          
        </div>
        <div className="container col-3 text-center">
        </div>
      </div>
    </nav >
  )
}

export default NavBar;