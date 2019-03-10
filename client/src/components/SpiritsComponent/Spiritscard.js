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

        <FrontSide>
          {this.props.ProductName}
          {this.props.Volume}
          {this.props.ImgUrl}
          {this.props.ProductName}
          {this.props.Category}
          {this.props.Type}
          {this.props.SubType}
          {this.props.CountryType}
          {this.props.Abv}
        </FrontSide>

        <BackSide>
          {this.props.ProductName}
          {this.props.Description}

        </BackSide>
      </Flippy>
    )
  }
}

export default Spiritscard;