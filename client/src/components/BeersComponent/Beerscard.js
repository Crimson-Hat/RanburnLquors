import React from "react";
import "./style.css";

import Flippy, { FrontSide, BackSide } from 'react-flippy';


class Beerscard extends React.Component {

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

        <FrontSide >
          {this.props.BrandName}                                   {this.props.AvailableSizes}
          {this.props.BeerStyle}
          {this.props.Abv}
          {this.props.ImgUrl}

        </FrontSide>

        <BackSide>


          {this.props.BrandName}
          {this.props.Description}

        </BackSide>



      </Flippy>
    )
  }
}

export default Beerscard;