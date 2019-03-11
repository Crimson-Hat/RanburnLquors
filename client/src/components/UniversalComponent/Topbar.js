import React from "react";
import "./style.css";

function Topbar() {

  return (
    <React.Fragment>
      <div className="topbar p-5">

        <div class="d-flex justify-content-around p-1">
          <a className="iconcss" href="" target="_blank">
            <i className="fab fa-facebook-f fals"></i>
          </a>


          <a className="iconcss" href="" target="_blank">
            <i className="far fa-envelope-open fals"></i>
          </a>


          <a className="iconcss" href="https://www.google.com/maps/place/Radburn+Liquors/@40.9391914,-74.1203621,18z/data=!4m5!3m4!1s0x89c2fb7cf130a3c3:0x3e13939d0699936e!8m2!3d40.940084!4d-74.120078" target="_blank">
            <i class="fas fa-map-marked-alt"></i>
          </a>


          <a className="iconcss" href="" target="_blank">
            <i class="fas fa-phone"></i>
          </a>


          <a className="iconcss" href="" target="_blank">
            <i className="fab fa-yelp fals"></i>
          </a>


          <a className="iconcss" href="" target="_blank">
            <i className="fab fa-twitter fals"></i>
          </a>


        </div>
      </div>
    </React.Fragment>
  )
}

export default Topbar;