import React from "react";
import AdminTest from "./AdminComponent/Admintestcomponent";
import featured from "./AdminComponent/featured.json";


class Admin extends React.Component {
  state = {
    featuredList: featured
  };
  render() {
    const { featuredList } = this.state;
    console.log(featured);
    return (
      // <div>Admin</div>
      <div>
        <h1 className="title">Featured</h1>
        <div className="container-fluid mx-auto card-content">
          <div className="row container-fluid">
            {featuredList.map(featured => {
              return (
                <AdminTest
                  key={featured.id}
                  featuredId={featured.id}
                  name={featured.name}
                  image={featured.image}
                  type={featured.type}
                  price={featured.price} />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;





