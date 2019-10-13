import React from "react";
import API from "../utils/API";

import Beerscard from "./BeersComponent/Beerscard";

class Beers extends React.Component {

  state = {
    beers: []
  };

  componentDidMount() {
    API.getBeers().then(res => {
      console.log(res.data);
      this.setState({ beers: res.data })
    })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <React.Fragment>

        <div className="wineHeaderTitle wineHeaderTitle1 text-center py-2">
          Featured Beers
        </div>

        <div className="container-fluid row">
          {!this.state.beers.length ? "" :
            (this.state.beers.map(beers => {
              return (
                <div className="container-fluid col-sm-12 col-md-6 col-lg-3  my-2">
                  <Beerscard
                    BrandName={beers.BrandName}
                    AvailableSizes={beers.AvailableSizes}
                    BeerStyle={beers.BeerStyle}
                    ImgUrl={beers.ImgUrl}
                    Abv={beers.Abv}
                    Description={beers.Description}
                  />
                </div>
              )
            })
            )}
        </div>
      </React.Fragment >
    )
  }
}

export default Beers;