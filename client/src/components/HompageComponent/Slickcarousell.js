import React, { Component } from "react";

// import "./slick/slick.css";
// import "./slick/slick-theme.css";

import Slider from "react-slick";

import One from "./CarouselImages/One.jpg";
import Two from "./CarouselImages/Two.jpg";
import Three from "./CarouselImages/Three.jpg";
import Four from "./CarouselImages/Four.jpg";
import Five from "./CarouselImages/Five.jpg";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      pauseOnHover: true,
      swipeToSlide: true,
      touchMove: true,

     };
    return (
      <div className="m-auto h-30">
        <Slider {...settings}>
          <div >
            <img className="d-block text-center w-100" src={One} alt="First slide" />
          </div>
          <div>
            <img className="d-block w-100" src={Two} alt="Second slide" />
          </div>
          <div>
            <img className="d-block w-100" src={Three} alt="Third slide" />
          </div>
          <div>
            <img className="d-block w-100" src={Four} alt="Fourth slide" />
          </div>
          <div>
            <img className="d-block w-100" src={Five} alt="Fifth slide" />
          </div>
          </Slider>
      </div>
    );
  }
}