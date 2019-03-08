import React from "react";
import AdminSpiritsForm1 from "./AdminComponent/AdminSpiritsForm1";
import AdminSpiritsForm2 from "./AdminComponent/AdminSpiritsForm2";
import AdminWinesForm1 from "./AdminComponent/AdminWinesForm1";
import API from '../utils/API';

class Admin extends React.Component {
  state = {
    deals: [],
    wines: [],
    chosenItem: {
      _id: "",
      ProductName: "",
      Volume: "",
      Abv: "",
      Category: "",
      Type: "",
      SubType: ""
    },
    chosenWine: {
      _id: "",
      FamilyName: "",
      Country: "",
      Size: "",
      Types: "",
      Description: "",
      ImgUrl: ""
    },
    formType: "add"

    // value: {}
  };

  componentDidMount() {
    console.log('hi');
    API.getSpirits().then(res => {
      console.log('hi again');
      console.log(res.data);
      this.setState({ deals: res.data })
    })
      .catch(err => console.log(err));

    console.log('hi wine');
    API.getWines().then(res => {
      console.log("hi wine again");
      console.log(res.data);
      this.setState({ wines: res.data })
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

  handleWineSelect = event => {
    const { name, value } = event.target;
    let formTypeWines = "add";
    let winePicked = {};
    if (value === "Add a new item") {
      winePicked = {
        _id: "",
        FamilyName: "",
        Country: "",
        Size: "",
        Types: "",
        Description: "",
        ImgUrl: ""
      }
    } else {
      winePicked = this.state.wines.find(wine => wine._id === value);
      formTypeWines = "edit"
    }

    this.setState({
      chosenWine: winePicked,
      formTypeWines: formTypeWines
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

  handleFormEditChange2 = event => {

    const { name, value } = event.target;

    const chosenWine = { ...this.state.chosenWine };

    chosenWine[name] = value;

    this.setState({ chosenWine });

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

  handleDatabaseUpdate2 = event => {
    event.preventDefault();

    const chosenWine = { ...this.state.chosenWine };

    if (this.state.formTypeWines === "add") {
      delete chosenWine._id;

      API.addNewWine(chosenWine)
      .then(res => {
        const w0 = res.data;
      })
      .catch(err => console.log(err));
    }

    if (this.state.formTypeWines === "edit") {
      API.saveWines(chosenWine, chosenWine._id)
      .then(res => {
        const w1 = res.data;
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

  handleDatabaseDelete2 = event => {
    event.preventDefault();

    const chosenWine = { ...this.state.chosenWine };

    API.deleteWines(chosenWine._id)
    .then(res => {
      const w2 = res.data;
    })
    .catch(err => console.log(err));
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

            <div className="row container-fluid">
              <div className="col-5">
                <AdminWinesForm1 handleInputChange2={this.handleWineSelect} wines={this.state.wines} />
                <h1>Add the preview wine card below here</h1>
              </div>

              {/* ADD THE ADMINWINESFORM2 STUFF HERE */}
              <div className="col-5">
                <AdminWinesForm2 chosenWine={this.state.chosenWine} handleInputChange2={this.handleFormEditChange2} handleDatabaseUpdate2={this.handleDatabaseUpdate2} handleDatabaseDelete2={this.handleDatabaseDelete2} />
              </div>

            </div>

          </div>
        </div>
      </React.Fragment>
    );

  }
}

export default Admin;





