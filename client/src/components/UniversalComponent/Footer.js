import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

function Footer() {

  return (
    <React.Fragment>
      <div className="footer">
        <Link to="/disclaimer">
          <div className="container disclaimerlink">
            DISCLAIMER
          </div>
        </Link>

        <Link to="/designers">
          <div className="container designerlink">
            Click Here to contact site designers
          </div>
        </Link>


        


      </div>
    </React.Fragment>
  )
}

export default Footer;