import React from "react";
import "./style.css";

import Flippy, { FrontSide, BackSide } from 'react-flippy';


class Winescard extends React.Component {

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
                <div className="cardtitle text-center">{this.props.FamilyName}
                </div>
                <div className="container-fluid cardcontent row m-0 p-0">

                  <div className="col-6 colinherit">
                    <div className="country">
                      <span className="boldtitle">Country </span> 
                      <br/>
                      <span className="normalfont">{this.props.Country}</span>
                    </div>
                    <div className="types">
                      <span className="boldtitle">Types</span>   
                      <br/>                 
                      <span className="normalfont">{this.props.Types}</span>
                    </div>
                    <div className="size">
                      <span className="boldtitle">Availble in</span>      
                      <br/>              
                      <span className="normalfont">{this.props.Size}</span>
                    </div>
                    

                  </div>

                  <div className="container-fluid colinher text-center col-6 p-0 m-0">
                    <img className="imgprop img-fluid" src={this.props.ImgUrl} alt={this.props.FamilyName} />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </FrontSide>

        <BackSide className="p-0 col-12">
          <div>
            <div className="card mx-auto">
              <div className="card-body m-0 p-0">
                <div className="cardtitle text-center">{this.props.FamilyName}
                </div>
                <div className="container-fluid row m-0 p-0">
                  <div className="container-fluid text-left backcarddescription">
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

export default Winescard;