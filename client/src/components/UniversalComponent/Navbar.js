import React from "react";
import logo from "./logo.svg";
import { Link, NavLink } from "react-router-dom";
import './style.css';

function NavBar() {

  return (
    <nav className="navcss">
      {/* Logo */}
      <div className="row container-fluid m-0 p-0 navcss1">
        <div className="container-fluid text-center mt-2">
          <Link to="/">
            <img className="img-fluid logoimg" src={logo} alt="logo" />
          </Link>
        </div>
      </div>

      {/* NavLinks Line */}
      <div className="row container-fluid pb-2 px-0 m-auto">
        <div className="container-fluid col-sm-1 col-md-3 p-0 m-0 ">
        </div>
        <div className="row container-fluid col-sm-10 col-md-6 p-0 m-0 directory-links">
        <div className="container-fluid m-0 p-0">
          <div className="d-flex justify-content-between p-1">
            <div className="">
              <NavLink
                style={{ textDecoration: 'none', color: '#5e1715' }}
                to='/wines'
                className="tags px-2"
                activeStyle={{ color: 'white' }}>
                Wines
          </NavLink>
            </div >
            <div className="mx-1">
              <NavLink
                style={{ textDecoration: 'none', color: '#5e1715' }}
                to='/spirits'
                className="tags px-2"
                activeStyle={{ color: 'white' }}>
                Spirits
          </NavLink>
            </div>
            <div className="">
              <NavLink
                style={{ textDecoration: 'none', color: '#5e1715' }}
                to='/beers'
                className="tags px-2"
                activeStyle={{ color: 'white' }}>
                Beers
            </NavLink>
            </div>
          </div>
        </div>
</div>

        <div className="container col-sm-1 col-md-3">
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