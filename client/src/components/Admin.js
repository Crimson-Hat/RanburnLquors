import React from "react";
import AdminTest from "./AdminComponent/Admintestcomponent";
import featured from "./AdminComponent/featured.json";
import AddItem from './AdminComponent/AdminCreateProduct/AddItemForm';
import spirits from "./AdminComponent/AdminCreateProduct/spirits.json";

class Admin extends React.Component {
  state = {
    featuredList: featured,
    spiritsList: spirits
  };
  render() {
    const { featuredList } = this.state;
    console.log(featured);
    return (
       <React.Fragment>
      <div>
        <h1 className="title">Admin Stuff</h1>
        <div className="container-fluid mx-auto card-content">
          <div className="row container-fluid">
          <AdminTest/>

          <AddItem/>
            
          </div>
        </div>
      </div>
      </React.Fragment>
    );
    
  }
}

export default Admin;





