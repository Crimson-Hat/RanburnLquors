import React from "react";
import API from "../utils/API";


class Checkout extends React.Component {
state = {
  deals: []
};

componentDidMount() {
  API.getDeals().then(res => {
    console.log(res.data);
    this.setState({ deals: res.data})})
  .catch(err => console.log(err));

}

  render() {
    return (
      <React.Fragment>
      <h1>Trying to load data from database</h1>
      <div>
      
        {JSON.stringify(this.state.deals, null, 2)}
        
      </div>
    </React.Fragment>
    )
  }
}

export default Checkout;