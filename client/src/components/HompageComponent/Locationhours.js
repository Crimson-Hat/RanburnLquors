import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";
import Mapimage from "./HomepageImages/Mapsimage.PNG"

function Locationhours() {

  return (
    <React.Fragment>
      <div className="locationmaster container-fluid pb-3 mx-auto">

        <div className="row container-fluid py-2 mx-auto">
          <div className="container locationtitle text-center mx-auto">
            Location & Hours
          </div>
        </div>
        <div className="container-fluid row mx-auto">
          <div className="container-fluid col-sm-12 col-md-7 mx-auto">
            <a href="https://www.google.com/maps/place/Radburn+Liquors/@40.9391914,-74.1203621,18z/data=!4m5!3m4!1s0x89c2fb7cf130a3c3:0x3e13939d0699936e!8m2!3d40.940084!4d-74.120078" target="_blank">
              <div className="container-fluid row mx-auto">
                <div className="container mapimagediv text-center mx-auto">
                  <img className="mapimage img-fluid" src={Mapimage} alt="map image" />
                </div>
              </div>
            </a>

          </div>
          <div className="container-fluid col-sm-12 col-md-5">
            <div className="container-fluid row text-center mx-auto px-0">
              <div className="container addressdiv pt-1 px-0">
                3557, 14-35 Plaza Road North <br />
                Fair Lawn, NJ 07410<br />
                United States<br />
                (201) 794-4445
              </div>
            </div>
            <div className="container row mx-auto">
              <div className="container hourstitle pt-2 text-center">
                Business Hours
              </div>
            </div>
            <div className="container row mx-auto">
              <div className="container hourslist text-center">
                <table className="text-left mx-auto">
                  <tr>
                    <td>Mon:</td>
                    <td>9:00 AM – 10:00 PM </td>
                  </tr>
                  <tr>
                    <td>Tue:</td>
                    <td>9:00 AM – 10:00 PM </td>
                  </tr>
                  <tr>
                    <td>Wed:</td>
                    <td>9:00 AM – 10:00 PM </td>
                  </tr>
                  <tr>
                    <td>Thu:</td>
                    <td>9:00 AM – 10:00 PM </td>
                  </tr>
                  <tr>
                    <td>Fri:</td>
                    <td>9:00 AM – 10:00 PM </td>
                  </tr>
                  <tr>
                    <td>Sat:</td>
                    <td>9:00 AM – 10:00 PM </td>
                  </tr>
                  <tr>
                    <td>Sun:</td>
                    <td>9:00 AM – 8:00 PM </td>
                  </tr>
                </table>
              </div>
            </div>

            
          </div>



        </div>



      </div>
    </React.Fragment>

  )
}

export default Locationhours;