import React from "react";

import "./style.css"

class Disclaimer extends React.Component {
  render() {
    return (
      <React.Fragment>

        <div className="container-fluid designerdiv pb-3">
          <div className="container-fluid row mb-3">
            <div className="container-fluid text-center designertitle">
              Contact Site Designers
            </div>
          </div>

          <div className="container-fluid row text-justify designerbody">

            <div className="col-12 col-sm-4 pl-5">
              <h4 className="text-left">Priyesh Patel</h4>
              <div className="row">
                E-mail: 91priyesh@gmail.com
              </div>
              <div className="row">
                <a className="designer-link" href="#" target="_blank">LinkedIn</a>
              </div>

              <div className="row">
                <a className="designer-link" href="#" target="_blank">Portfolio</a>
              </div>

              <div className="row">
                <a className="designer-link" href="#" target="_blank">gitHub</a>
              </div>
            </div>

            <div className="col-12 col-sm-4">
            
            </div>

            <div className="col-12 col-sm-4 contact-j pl-5">
              <h4 className="text-left">Jordan Mesibov</h4>
              <div className="row">
                E-mail: mesibovj@gmail.com
                </div>
              <div className="row">
                <a className="designer-link" href="https://www.linkedin.com/in/jordan-mesibov-581538176" target="_blank">LinkedIn</a>
              </div>

              <div className="row">
                <a className="designer-link" href="https://github.com/JordanMesibov" target="_blank">Portfolio</a>
              </div>

              <div className="row">
                <a className="designer-link" href="https://github.com/JordanMesibov" target="_blank">gitHub</a>
              </div>
            </div>

          </div>

        </div>
      </React.Fragment>
    )
  }
}

export default Disclaimer;