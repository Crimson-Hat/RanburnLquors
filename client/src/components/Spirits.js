import React from "react";
import API from "../utils/API";
import Spiritscard from "./SpiritsComponent/Spiritscard";



class Spirits extends React.Component {
  state = {
    spirits: []
  };

  componentDidMount() {
    API.getSpirits().then(res => {
      console.log(res.data);
      this.setState({ spirits: res.data })
    })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid row">
          {!this.state.spirits.length ? "" :
            (this.state.spirits.map(spirits => {
              return (
                <div className=" container-fluid col-sm-12 col-md-6 col-lg-3  my-2">
                  <Spiritscard
                    ProductName={spirits.ProductName}
                    ImgUrl={spirits.ImgUrl}
                    Category={spirits.Category}
                    Types={spirits.Types}
                    SubTypes={spirits.SubTypes}
                    CountryType={spirits.CountryType}
                    Abv={spirits.Abv}
                    Description={spirits.Description}
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

export default Spirits;