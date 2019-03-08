import React from "react";

// import FlipCardComponent from "./../UniversalComponent/Flipcard";
import FlipCard from 'react-flipcard-2';

class Spiritscard extends React.Component {

  render() {

    return (
      <FlipCard>
          <div>
          THIS IS THE FRONT
            {/* <div>
              <img className="card-img-top img-fluid" src={this.props.ImgUrl} alt={this.props.ProductName} />
            </div>
            <div className="card-body">
              <h4 className="card-title text-center">{this.props.ProductName}
              </h4>
              <div className="row">
                <div className="col-6 card-font-property pr-0">
                  {this.props.Volume}
                  <br />

                  {this.props.Abv}<span className="card-font-property2">alc./vol.</span>
                </div>
                <div className="col-6 card-font-property">
                  <div className="row text-right">
                    <div>
                      <div className="card-font-property3">{this.props.Country}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>*/}
          </div> 
        <div>
          {this.props.Description}
          Back of card data
        </div>
      </FlipCard>

    )
  }
}

export default Spiritscard;