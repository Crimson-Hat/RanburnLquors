import React from "react";
import API from "../utils/API";
import Spiritscard from "./SpiritsComponent/Spiritscard";
import './style.css';



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

        <div className="wineHeaderTitle wineHeaderTitle1 text-center py-2">
          Featured Spirits
        </div>

        <div className="container-fluid row">
          {!this.state.spirits.length ? "" :
            (this.state.spirits.map(spirits => {
              return (
                <div className=" container-fluid col-sm-12 col-md-6 col-lg-3  my-2">
                  <Spiritscard
                    ProductName={spirits.ProductName}
                    Volume={spirits.Volume}
                    ImgUrl={spirits.ImgUrl}
                    Category={spirits.Category}
                    Type={spirits.Type}
                    SubType={spirits.SubType}
                    Country={spirits.Country}
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