import React from "react";
import "./style.css";

function Topbar() {

  return (
    <React.Fragment>
      <div className="topbar">

        <div class="d-flex justify-content-around p-1">
          <a className="iconcss" href="https://www.facebook.com/radburnliquors/" target="_blank">
            <i className="fab fa-facebook-f fals"></i>
          </a>


          <a className="iconcss" href="mailto:radburn.liquors@gmail.com" target="_blank">
            <i className="far fa-envelope-open fals"></i>
          </a>


          <a className="iconcss" href="https://www.google.com/maps/place/Radburn+Liquors/@40.9391914,-74.1203621,18z/data=!4m5!3m4!1s0x89c2fb7cf130a3c3:0x3e13939d0699936e!8m2!3d40.940084!4d-74.120078" target="_blank">
            <i class="fas fa-map-marked-alt"></i>
          </a>


          <a className="iconcss" href="tel:201-794-4445" target="_blank">
            <i class="fas fa-phone"></i>
          </a>


          <a className="iconcss" href="https://twitter.com/RadburnLiquors" target="_blank">
            <i className="fab fa-twitter fals"></i>
          </a>

          <a className="iconcss" href="https://www.yelp.com/biz/radburn-liquors-fair-lawn-2" target="_blank">
            <i className="fab fa-yelp fals"></i>
          </a>



        </div>
      </div>
    </React.Fragment>
  )
}

export default Topbar;