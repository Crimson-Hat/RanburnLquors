import React from 'react';

function AdminSpiritsForm2(props) {
  return (
    <div className="container-fluid">
      <div className="card col-4 mb-5">
      <h3>_id: {JSON.stringify(props.chosenItem._id)}</h3>
        <form>

          <div className="form-group">
            <label htmlFor="nameUpdate">Name of item:</label>
            <textarea className="form-control" id="nameUpdate" rows="1" value={props.chosenItem.ProductName}></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="VolumeUpdate">Volume:</label>
            <textarea className="form-control" id="VolumeUpdate" rows="1" value={props.chosenItem.Volume}></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="AbvUpdate">Abv:</label>
            <textarea className="form-control" id="AbvUpdate" rows="1" value={props.chosenItem.Abv}></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="CategoryUpdate">Category:</label>
            <textarea className="form-control" id="CategoryUpdate" rows="1" value={props.chosenItem.Category}></textarea>
          </div>
          
          <div className="form-group">
            <label htmlFor="TypeUpdate">Type:</label>
            <textarea className="form-control" id="TypeUpdate" rows="1" value={props.chosenItem.Type}></textarea>
          </div>

          {/* go back and change the props.children.Type below to reflect the subtype once the database is updated to have "SubType" instead of "Sub-Type" */}

          <div className="form-group">
            <label htmlFor="SubTypeUpdate">SubType:</label>
            <textarea className="form-control" id="SubTypeUpdate" rows="1" value={props.chosenItem.Type}></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="CountryUpdate">Country:</label>
            <textarea className="form-control" id="CountryUpdate" rows="1" value={props.chosenItem.Country}></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="DescriptionUpdate">Description:</label>
            <textarea className="form-control" id="DescriptionUpdate" rows="5" value={props.chosenItem.Description}></textarea>
          </div>



        </form>
      </div>
    </div>
  )
}

export default AdminSpiritsForm2;