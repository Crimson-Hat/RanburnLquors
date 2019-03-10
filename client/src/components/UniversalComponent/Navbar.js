import React from "react";
import logo from "./logo.svg";
import { Link, NavLink } from "react-router-dom";

function NavBar() {

  return (
    <nav className="navcss">
      {/* Logo */}
      <div className="row container-fluid navcss1">
        <div className="col-3"></div>
        <div className="col-sm text-center mt-2">
          <Link to="/">
            <img className="img-fluid logoimg" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="col-3"></div>
      </div>
      {/* NavLinks Line */}
      <div className="row container-fluid pb-2 px-0 m-auto">
        <div className="container  col-sm-1 col-md-3 text-center">
        </div>
        <div className="row container-fluid col-sm-10 col-md-6 p-0 m-0 text-center directory-links">
          <div className="col-4 text-center px-4">
            <NavLink
              style={{ textDecoration: 'none', color: '#5e1715' }}
              to='/wines'
              className="tags px-2"
              activeStyle={{ color: 'white' }}>
              Wines
          </NavLink>
          </div>
          <div className="col-4 text-center">
            <NavLink
              style={{ textDecoration: 'none', color: '#5e1715' }}
              to='/spirits'
              className="tags px-2"
              activeStyle={{ color: 'white' }}>
              Spirits
          </NavLink>
          </div>
          <div className="col-4 text-center">
            <NavLink
              style={{ textDecoration: 'none', color: '#5e1715' }}
              to='/beers'
              className="tags px-2"
              activeStyle={{ color: 'white' }}>
              Beers
            </NavLink>
          </div>
        </div>
        <div className="container col-sm-1 col-md-3 text-center">
          {/* <Link
        style={{ textDecoration: 'none', color: 'black' }} 
        to="/admin"
        >
        admin
        </Link> */}
        </div>
      </div>
    </nav >
  )
}

export default NavBar;