import React from "react";
import "./style.css";

function FeaturedCard(props) {

  return (
    <div className="container-fluid mx-auto card-content">
      <div className="row container-fluid">
        <div className="col-lg-3 col-md-4 col-sm-6 my-2">
          <div className="card mx-auto">
            <div>
              <img className="card-img-top img-fluid" src={props.image} alt={props.name} />
            </div>
            <div className="card-body">
              <h5 className="card-title text-center">{props.name}</h5>
              <div className="row">
                <div className="col-6">
                  {props.size}
                
                  {props.alc}
                </div>
                <div className="col-6">
                  <h4 className="card-title text-right font-weight-light text-danger"><del>{props.was}</del></h4>
                  <h3 className="card-title text-right">{props.price}</h3>
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