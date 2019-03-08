import React from "react";
import "./style.css";

import Flippy, { FrontSide, BackSide } from 'react-flippy';


class Winescardtest extends React.Component {

  render() {

    return (
      <Flippy
        flipOnHover={false} // default false
        flipOnClick={true} // default false
        flipDirection="horizontal" // horizontal or vertical
        ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
      // if you pass isFlipped prop component will be controlled component.
      // and other props, which will go to div
      style={{ width: 'auto', height: 'auto' }} /// these are optional style, it is not necessary
      >

        <FrontSide className="col-12" style={{ backgroundColor: '#41669d' }}>
          <div>
            <div className="card mx-auto">
              <div>
                <img className="card-img-top img-fluid" src={this.props.ImgUrl} alt={this.props.FamilyName} />
              </div>
              <div className="card-body">
                <h4 className="card-title text-center">{this.props.FamilyName}
                </h4>
                <div className="row">
                  <div className="col-6 card-font-property pr-0">
                    {this.props.Types}
                    <br />

                    {this.props.Size}<span className="card-font-property2"></span>
                  </div>

                </div>
              </div>
            </div>
          </div>



        </FrontSide>
        <BackSide style={{ backgroundColor: '#175852' }}>




        </BackSide>
      </Flippy>
    )
  }
}

export default Winescardtest;