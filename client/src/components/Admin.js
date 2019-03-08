import React from "react";
import AdminSpiritsForm1 from "./AdminComponent/AdminSpiritsForm1";
import AdminSpiritsForm2 from "./AdminComponent/AdminSpiritsForm2";
// import featured from "./AdminComponent/featured.json";
import AddItem from './AdminComponent/AdminCreateProduct/AddItemForm';
// import spirits from "./AdminComponent/AdminCreateProduct/spirits.json";
import API from '../utils/API';

class Admin extends React.Component {
  state = {
    deals: [],
    chosenItem: {},
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

  handleInputChange = event => {
    const {name, value} = event.target;

    const dealPicked = this.state.deals.find(deal => deal._id === value);

    this.setState({
      chosenItem: dealPicked
    });
  }

  // handleYesOrNo = event => {
  //   const {value} = event.target;

  //   this.setState({
  //     [value]: value
  //   });

  //   console.log(value);
  // }

  // handleAddSpirit = () =>
  

  render() {

    return (
      <React.Fragment>


        <div>
          <h1 className="title">Admin Stuff</h1>
          <div className="container-fluid mx-auto card-content">
            <div className="row container-fluid">
            <div className="col-4">
              <AdminSpiritsForm1 handleInputChange={this.handleInputChange} deals={this.state.deals} />

              <AdminSpiritsForm2 chosenItem={this.state.chosenItem}/>
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





