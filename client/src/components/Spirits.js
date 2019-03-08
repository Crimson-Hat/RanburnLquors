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
        <div>Spirits</div>
        <div className="row justify-content-around">
          {/* do .map here */}
          {!this.state.spirits.length ? "" : (
            this.state.spirits.map(spirit => {
              return (
                <Spiritscard ProductName={spirit.ProductName} Abv={spirit.Abv}/>
              )
            })
          )}
        </div>

        <div>
          <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />

          <h1>Trying to load data from Spirits database</h1>
          {JSON.stringify(this.state.spirits, null, 2)}
        </div>
      </React.Fragment>
    )
  }
}

export default Spirits;