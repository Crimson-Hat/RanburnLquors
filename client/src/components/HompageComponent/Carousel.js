import React from "react";
import One from "./CarouselImages/One.jpg";
import Two from "./CarouselImages/Two.jpg";
import Three from "./CarouselImages/Three.jpg";
import Four from "./CarouselImages/Four.jpg";
import Five from "./CarouselImages/Five.jpg";

function Carousel() {

  return (
    <React.Fragment>
      <div className="container outerdivcarousel">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

        </div>
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={One} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Two} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Three} alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Four} alt="Fourth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Five} alt="Fifth slide" />
          </div>
        </div>

        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>

      </div>

    </React.Fragment>
  )
}

export default Carousel;