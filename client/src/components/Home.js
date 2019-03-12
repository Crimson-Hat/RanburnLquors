import React, { Component } from 'react';
import "./style.css";
// import SimpleSlider from './HompageComponent/Slickcarousell';

import SimpleSlider2 from './HompageComponent/Slickcarousell';

import Homepagediv2 from './HompageComponent/Homepagediv2';
import Locationhours from './HompageComponent/Locationhours';


class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="homeHeaderTitle homeHeaderTitle1 text-center py-2">
        Radburn Liquors is your one-stop shop for quality wines, spirits, and beers!
        </div>

      
        {/* <SimpleSlider/> */}

        <SimpleSlider2/>
              
        <Homepagediv2 />

        <Locationhours />
        
      </React.Fragment>
    );
  }
}

export default Home;
