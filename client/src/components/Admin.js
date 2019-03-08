import React from "react";
import AdminSpiritsForm1 from "./AdminComponent/AdminSpiritsForm1";
import AdminSpiritsForm2 from "./AdminComponent/AdminSpiritsForm2";
import API from '../utils/API';

class Admin extends React.Component {
  state = {
    deals: [],
    chosenItem: {
      _id: "",
      ProductName: "",
      Volume: "",
      Abv: "",
      Category: "",
      Type: "",
      SubType: ""
    }
    // value: {}
  };

  componentDidMount() {
    console.log('hi')
    API.getSpirits().then(res => {
      console.log('hi again')
      console.log(res.data);
      this.setState({ deals: res.data })
    })
      .catch(err => console.log(err));

  }

  // this gets fed into AdminSpiritsForm1 for the select dropdown
  handleDealSelect = event => {
    const { name, value } = event.target;
    let dealPicked = {};
    if (value === "Add a new item") {
      dealPicked = {
        _id: "",
        ProductName: "",
        Volume: "",
        Abv: "",
        Category: "",
        Type: "",
        SubType: "",
        Country: "",
        Description: "",
        ImgUrl: ""
      }
    } else {
      dealPicked = this.state.deals.find(deal => deal._id === value);
    }


    this.setState({
      chosenItem: dealPicked
    });
  }

  // this gets fed into AdminSpiritsForm2 for the edit form inputs
  handleFormEditChange = event => {

    //check to see if the value of the first form is not on "Add a new item"

      const { name, value } = event.target;

      // make a copy of chosenItem because we're going to update it
      const chosenItem = { ...this.state.chosenItem };

      //update chosenItem's data
      chosenItem[name] = value;

      // update chosenItem in state
      this.setState({ chosenItem });


  

  }




  render() {

    return (
      <React.Fragment>


        <div>
          <h1 className="title">Admin Stuff</h1>
          <div className="container-fluid mx-auto card-content">
            <div className="row container-fluid">
              <div className="col-4">
                <AdminSpiritsForm1 handleInputChange={this.handleDealSelect} deals={this.state.deals} />

                <AdminSpiritsForm2 chosenItem={this.state.chosenItem} handleInputChange={this.handleFormEditChange} />
              </div>
              {/* <AddItem /> */}

            </div>
          </div>
        </div>
      </React.Fragment>
    );

  }
}

export default Admin;





