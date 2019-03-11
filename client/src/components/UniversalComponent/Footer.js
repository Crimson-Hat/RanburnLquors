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


        <div id="yelp-biz-badge-plain-frWrDW7toNHxu-iP6tUiUg"><a href="http://yelp.com/biz/radburn-liquors-fair-lawn-2?utm_medium=badge_button&amp;utm_source=biz_review_badge" target="_blank">Check out Radburn Liquors on Yelp</a></div>

        



      </div>
    </React.Fragment>
  )
}

export default Footer;