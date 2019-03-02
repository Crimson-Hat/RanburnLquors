import React from 'react';


// class Admintestcomponent extends Component {
//   render() {
//     return (
//       <div>Admintestcomponent</div>
//     )
//   }
// }

function AdminTest(props) {
  return(
    <div className="container-fluid mx-auto card-content">
        <h3 className="text-center">Featured Deals</h3>

        <div className="row container-fluid">

          <div className="col-lg-3 col-md-4 col-sm-6 my-2">

            <div className="card mx-auto">

                <div>
                  <img className="card-img-top img-fluid" src={props.image} alt={props.name} />
                </div>

                <div className="card-body">
                <h5 className="card-title text-center">{props.name}</h5>
                </div>

            </div>

          </div>

        </div>

      </div>
  )
}



export default AdminTest;