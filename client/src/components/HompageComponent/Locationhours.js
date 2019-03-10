import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";
import Mapimage from "./HomepageImages/Mapsimage.PNG"

function Locationhours() {

  return (
    <React.Fragment>
      <div className="locationmaster container-fluid pb-3">

        <div className="row container-fluid pt-2">
          <div className="container locationtitle text-center">
            Location & Hours
          </div>
        </div>
        <div className="container-fluid row">
          <div className="container-fluid col-sm-12 col-md-7">
            <a href="https://www.google.com/maps/place/Radburn+Liquors/@40.9391914,-74.1203621,18z/data=!4m5!3m4!1s0x89c2fb7cf130a3c3:0x3e13939d0699936e!8m2!3d40.940084!4d-74.120078" target="_blank">

              <div className="container-fluid row text-center">
                <div className="container addressdiv pt-2">
                  3557,14-35 Plaza Road North <br />
                  Fair Lawn, NJ 07410<br />
                  United States<br />
                </div>
              </div>
              <div className="container-fluid row">
                <div className="container mapimagediv text-center">
                  <img className="mapimage img-fluid" src={Mapimage} alt="map image" />
                </div>
              </div>
            </a>

          </div>
          <div className="container-fluid col-sm-12 col-md-5">
            <div className="container row">
              <div className="container hourstitle text-center">
                Business Hours
              </div>
            </div>
            <div className="container row">
              <div className="container hourslist text-center">
                Mon:	9:00 AM – 10:00 PM <br/>
                Tue:	9:00 AM – 10:00 PM <br/>
                Wed:	9:00 AM – 10:00 PM <br/>
                Thu:	9:00 AM – 10:00 PM <br/>
                Fri:	9:00 AM – 10:00 PM <br/>
                Sat:	9:00 AM – 10:00 PM <br/>
                Sun:	9:00 AM – 8:00 PM 
              </div>
            </div>


          </div>



        </div>



      </div>    
    </React.Fragment>

  )
}

export default Locationhours;