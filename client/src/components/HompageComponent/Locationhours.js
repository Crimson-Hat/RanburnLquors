import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";
import Mapimage from "./HomepageImages/Mapsimage.PNG"

function Locationhours() {

  return (
    <React.Fragment>
      <div className="locationmaster container-fluid pb-3 mx-auto">

        <div className="row container-fluid pt-2 mx-auto">
          <div className="container locationtitle text-center mx-auto">
            Location & Hours
          </div>
        </div>
<<<<<<< HEAD
        <div className="container-fluid row">
          <div className="container-fluid col-sm-12 col-md-7 text-center">
=======
        <div className="container-fluid row mx-auto">
          <div className="container-fluid col-sm-12 col-md-7 mx-auto">
            <a href="https://www.google.com/maps/place/Radburn+Liquors/@40.9391914,-74.1203621,18z/data=!4m5!3m4!1s0x89c2fb7cf130a3c3:0x3e13939d0699936e!8m2!3d40.940084!4d-74.120078" target="_blank">
>>>>>>> 3cc8cdaaae9b211d105d5dff415c3c3b582646b8

              <div className="container-fluid row text-center mx-auto">
                <div className="container addressdiv pt-2">
                  3557, 14-35 Plaza Road North <br />
                  Fair Lawn, NJ 07410<br />
                  United States<br />
                </div>
              </div>
<<<<<<< HEAD
            <a href="https://www.google.com/maps/place/Radburn+Liquors/@40.9391914,-74.1203621,18z/data=!4m5!3m4!1s0x89c2fb7cf130a3c3:0x3e13939d0699936e!8m2!3d40.940084!4d-74.120078" target="_blank">
              <div className="container-fluid row">
                <div className="container mapimagediv text-center">
                  <img className="mapimage img-fluid" src={Mapimage} alt="map image" />
=======
              <div className="container-fluid row mx-auto">
                <div className="container mapimagediv text-center mx-auto">
                  <img className="mapimage img-fluid mx-auto" src={Mapimage} alt="map image" />
>>>>>>> 3cc8cdaaae9b211d105d5dff415c3c3b582646b8
                </div>
              </div>
            </a>

          </div>
<<<<<<< HEAD
          <div className="container-fluid col-sm-12 col-md-5 text-center">
            <div className="container row">
=======
          <div className="container-fluid col-sm-12 col-md-5">
            <div className="container row mx-auto">
>>>>>>> 3cc8cdaaae9b211d105d5dff415c3c3b582646b8
              <div className="container hourstitle text-center">
                Business Hours
              </div>
            </div>
            <div className="container row mx-auto">
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