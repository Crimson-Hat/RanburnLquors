import React from "react";
import "./style.css";

import Flippy, { FrontSide, BackSide } from 'react-flippy';

class Spiritscard extends React.Component {
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

        <FrontSide className="p-0 m-3 col-12">
          <div className="container-fluid p-0">
            <div className="card mx-auto">
              <div className="card-body p-0 m-0">
                <div className="spiritsCardTitle mt-3 text-center">
                  {this.props.ProductName}
                </div>

                <div className="container-fluid cardcontent row m-0 p-0">

                  <div className="col-5 colinherit pl-3 mr-0">
                    <div className="country pb-2 pl-2">
                      <span className="spiritsBoldTitle">Info</span>
                      <br />
                      <span className="spiritsNormalFont">{this.props.Country}</span>
                      <br />
                      <span className="spiritsNormalFont">{this.props.Type}</span>
                      <br />
                      <span className="spiritsNormalFont">{this.props.SubType}</span>
                      <br />
                      <span className="spiritsNormalFont">{this.props.Volume}</span>
                      <br />
                      <span className="spiritsNormalFont">{this.props.Abv}ABV</span>
                    </div>
                  </div>

                  <div className="container-fluid colinher  col-7 text-left p-0 m-0">
                    <img className="imgpropsspirits img-fluid" src={this.props.ImgUrl} alt={this.props.ProductName} />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </FrontSide>

        <BackSide className="p-0 m-3 col-12">
          <div>
            <div className="card mx-auto">
              <div className="card-body m-0 p-0">
                <div className="spiritsCardTitle mt-3 text-center">
                  {this.props.ProductName}
                </div>
                <div className="container-fluid row m-0 p-0">
                  <div className="container-fluid text-left spiritsBackCardDescription">
                    {this.props.Description}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </BackSide>
      </Flippy>
    )
  }
}

export default Spiritscard;