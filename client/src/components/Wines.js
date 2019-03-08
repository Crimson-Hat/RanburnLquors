import React from "react";
import API from "../utils/API";

import Winescard from "./WinesComponent/Winescard";
import Winescardtest from "./WinesComponent/Winescardtest";



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

        <Winescard />

        <div className="container-fluid row">
          {!this.state.wines.length ? "" :
            (this.state.wines.map(wines => {
              return (
                <div className=" container-fluid col-sm-12 col-md-6 col-lg-3  my-2">
                  <Winescardtest
                    FamilyName={wines.FamilyName}
                    ImgUrl={wines.ImgUrl}
                    Types={wines.Types}
                    Size={wines.Size}
                  />
                </div>
              )
            })
            )}
        </div>


        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <div>Wines</div>
        <h1>Trying to load data from Wines database</h1>
        <div>
          {JSON.stringify(this.state.wines, null, 2)}
        </div>
      </React.Fragment >
    )
  }
}

export default Wines;