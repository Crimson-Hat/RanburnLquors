import React from 'react';



function AdminSpiritsForm1(props) {
  // console.log(props.deals);
  return (
    <div className="container-fluid">

      <div className="card mb-5">

        <form>

          <div className="form-group">
            <label htmlFor="itemUpdate">What Spirit would you like to update?</label>
            <select name="itemname" onChange={props.handleInputChange} className="form-control" id="itemUpdate">
            <option value="Add a new item">Add a new item</option>
              {!props.deals.length ? "" : props.deals.map(deal => {
                return (
                  <option key={deal._id} value={deal._id}>{deal.ProductName}</option>
                )
              })}
              
            </select>

            

          </div>

         

          {/* <div className="form-group">
            <label for="typeOfUpdate">How would you like to update this item?</label>
            <select className="form-control" id="typeOfUpdate">
              <option>Update Product Name</option>
              <option>Update Volume (mL)</option>
              <option>Update Abv (%alc./vol.)</option>
              <option>Update Category</option>
              <option>Update Type</option>
              <option>Update Sub-Type</option>
              <option>Update Country</option>
              <option>Update Price</option>
              <option>Update Description</option>
              <option>DELETE PRODUCT</option>
            </select>
          </div>

          <div className="form-group">
            <label for="admin-input">What would you like to set the new value to, if applicable?</label>
            <textarea className="form-control" id="adminInput" rows="3"></textarea>
          </div> */}

        </form>
      </div>

    </div>
  )
}



export default AdminSpiritsForm1;