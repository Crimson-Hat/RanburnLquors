import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

function Footer() {

  return (
    <React.Fragment>
      <div className="footer d-flex justify-content-around">

        <Link to="/disclaimer">
          <div className="container disclaimerlink pt-3">
            Disclaimer
          </div>
        </Link>

        <Link to="/designers">
          <div className="container designerlink pt-3">
            Contact Site designers
          </div>
        </Link>


        


      </div>
    </React.Fragment>
  )
}

export default Footer;