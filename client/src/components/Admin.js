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
    },
    formType: "add"
    
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
    let formType = "add";
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
      formType = "edit"
    }


    this.setState({
      chosenItem: dealPicked,
      formType: formType
    });
  }

  // this gets fed into AdminSpiritsForm2 for the edit form inputs
  handleFormEditChange = event => {

      const { name, value } = event.target;

      // make a copy of chosenItem because we're going to update it
      const chosenItem = { ...this.state.chosenItem };

      //update chosenItem's data
      chosenItem[name] = value;

      // update chosenItem in state
      this.setState({ chosenItem });

  }

  handleDatabaseUpdate = event => {
    event.preventDefault();

    const chosenItem = { ...this.state.chosenItem };

    //if add (in state) is true, then hit the POST route to add an item
    if (this.state.formType === "add") {
      delete chosenItem._id;

      API.addNewSpirit(chosenItem)
        .then(res => {
          // console.log(res.data);
          const r0 = res.data;
          // do something with data here
        })
        .catch(err => console.log(err));
    }

    // if update (in state) is true, then hit the PUT route to update an item
    if (this.state.formType === "edit") {
      API.saveSpirits(chosenItem, chosenItem._id)
      .then(res => {
        // console.log(res.data);
        const r1 = res.data;
        // do something with data here
      })
      .catch(err => console.log(err));
    }
    
  }

  handleDatabaseDelete = event => {
    event.preventDefault();

    const chosenItem = { ...this.state.chosenItem };
    // if delete (in state) is true, then hit the DELETE route to delete the item from the db
    // if (this.state.formType === "edit") {
      API.deleteSpirits(chosenItem._id)
      .then(res => {
        // console.log(res.data);
        const r2 = res.data;
        // do something with data here
      })
      .catch(err => console.log(err));
      
    // }

  }

    




  render() {

    return (
      <React.Fragment>


        <div>
          <h1 className="title">Admin Stuff</h1>
          <div className="container-fluid mx-auto card-content">
            <div className="row container-fluid">
              <div className="col-5">
                <AdminSpiritsForm1 handleInputChange={this.handleDealSelect} deals={this.state.deals} />
                <h1>Add the preview card below here</h1>
              </div>

              <div className="col-5">
                <AdminSpiritsForm2 chosenItem={this.state.chosenItem} handleInputChange={this.handleFormEditChange} handleDatabaseUpdate={this.handleDatabaseUpdate} handleDatabaseDelete={this.handleDatabaseDelete} />
              </div>
              

            </div>
          </div>
        </div>
      </React.Fragment>
    );

  }
}

export default Admin;





