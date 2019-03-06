import React from "react";
import "./style.css";

function FeaturedCard(props) {

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 my-2">
      <div className="card mx-auto">
        <div>
          <img className="card-img-top img-fluid" src={props.image} alt={props.name} />
        </div>
        <div className="card-body">
          <h4 className="card-title text-center">{props.name}
          </h4>
          <div className="row">
            <div className="col-6 card-font-property pr-0">
              {props.size}
              <br />

              {props.alc}<span className="card-font-property2">alc./vol.</span>
            </div>
            <div className="col-6 card-font-property">
              <div className="text-right font-weight-light text-danger"><del>{props.was}</del></div>
          <div className="row text-right">
            <div>
              <div className="card-font-property3">{props.price}</div>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}


export default FeaturedCard;