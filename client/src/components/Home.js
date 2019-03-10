import React, { Component } from 'react';
import "./style.css";
import SimpleSlider from './HompageComponent/Slickcarousell';
import Homepagediv2 from './HompageComponent/Homepagediv2';
import Locationhours from './HompageComponent/Locationhours';


class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="headertitle headertitle1 text-center py-3">
        Proudly serving customers throughout Bergen and Passaic Counties!
        </div>

        <SimpleSlider/>
        
        <Homepagediv2 />

        <Locationhours />


      </React.Fragment>
    );
  }
}

export default Home;
