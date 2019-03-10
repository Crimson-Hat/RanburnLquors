import React from "react";

import "./style.css"

class Disclaimer extends React.Component {
  render() {
    return (
      <React.Fragment>

        <div className="container-fluid designerdiv">
          <div className="container-fluid row">
            <div className="container-fluid text-center designertitle">
              Contact Designers
            </div>
          </div>

          <div className="container-fluid row text-justify designerbody">
           Priyesh Patel/Jordan
          </div>

        </div>
      </React.Fragment>
    )
  }
}

export default Disclaimer;