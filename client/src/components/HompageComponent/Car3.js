import React, { Component } from "react";
import Slider from "react-slick";
import One from "./CarouselImages/One.jpg";
import Two from "./CarouselImages/Two.jpg";
import Three from "./CarouselImages/Three.jpg";
import Four from "./CarouselImages/Four.jpg";
import Five from "./CarouselImages/Five.jpg";
export default class Car3 extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed:4000,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
          <img className="img-fluid" src={One} alt="First slide" />
          </div>
          <div>
          <img className="img-fluid" src={Two} alt="First slide" />
          </div>
          <div>
          <img className="img-fluid" src={Three} alt="First slide" />
          </div>
          <div>
          <img className="img-fluid" src={Four} alt="First slide" />
          </div>
          <div>
          <img className="img-fluid" src={Five} alt="First slide" />
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
        </Slider>
      </div>
    );
  }
}