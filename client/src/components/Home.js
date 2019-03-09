import React, { Component } from 'react';
import "./style.css";
import SimpleSlider from './HompageComponent/Slickcarousell';
import Homepagediv2 from './HompageComponent/Homepagediv2';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="headertitle headertitle1 text-center py-3">
        Radburn Liquors is your one-stop shop for quality wines, spirits, and beers!
        </div>

        <SimpleSlider/>
        
        <Homepagediv2 />


      </React.Fragment>
    );
  }
}

export default Home;
