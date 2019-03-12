import React, { Component } from "react";
import Slider from "react-slick";

import One from "./CarouselImages/One.jpg";
import Two from "./CarouselImages/Two.jpg";
import Three from "./CarouselImages/Three.jpg";
import Four from "./CarouselImages/Four.jpg";
import Five from "./CarouselImages/Five.jpg";

export default class SimpleSlider2 extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 4000,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div>
        <Slider {...settings}>
          <div >
            <img className="" src={One} alt="First slide" />
          </div>
          <div>
            <img className="" src={Two} alt="Second slide" />
          </div>
          <div>
            <img className="" src={Three} alt="Third slide" />
          </div>
          <div>
            <img className="" src={Four} alt="Fourth slide" />
          </div>
          <div>
            <img className="" src={Five} alt="Fifth slide" />
          </div>
        </Slider>
      </div>
    );
  }
}