import React from "react";
import API from "../utils/API";


class Checkout extends React.Component {
  state = {
    deals: []
  };

  componentDidMount() {
    API.getSpirits().then(res => {
      console.log(res.data);
      this.setState({ spirits: res.data })
    })
      .catch(err => console.log(err));


    API.getBeers().then(res => {
      console.log(res.data);
      this.setState({ beers: res.data })
    })
      .catch(err => console.log(err));

    API.getWines().then(res => {
      console.log(res.data);
      this.setState({ wines: res.data })
    })
      .catch(err => console.log(err));


    API.getDeals().then(res => {
      console.log(res.data);
      this.setState({ deals: res.data })
    })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <React.Fragment>
        <h1>Trying to load data from Spirits database</h1>
        <div>
          {JSON.stringify(this.state.spirits, null, 2)}
        </div>

        <h1>Trying to load data from Beers database</h1>
        <div>
          {JSON.stringify(this.state.beers, null, 2)}
        </div>

        <h1>Trying to load data from Wines database</h1>
        <div>
          {JSON.stringify(this.state.wines, null, 2)}
        </div>


        <h1>Trying to load data from Deals database</h1>
        <div>
          {JSON.stringify(this.state.deals, null, 2)}
        </div>
      </React.Fragment>
    )
  }
}

export default Checkout;