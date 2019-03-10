import React from "react";
import API from "../utils/API";

import Winescard from "./WinesComponent/Winescard";



class Wines extends React.Component {

  state = {
    wines: []
  };

  componentDidMount() {
    API.getWines().then(res => {
      console.log(res.data);
      this.setState({ wines: res.data })
    })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid row">
          {!this.state.wines.length ? "" :
            (this.state.wines.map(wines => {
              return (
                <div className=" container-fluid col-sm-12 col-md-6 col-lg-3  my-2">
                  <Winescard
                    FamilyName={wines.FamilyName}
                    ImgUrl={wines.ImgUrl}
                    Types={wines.Types}
                    Size={wines.Size}
                    Description={wines.Description}
                    Country={wines.Country}
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

export default Wines;