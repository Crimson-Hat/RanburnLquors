import React from 'react';

function AdminSpiritsForm2(props) {
  console.log(props);
  return (
    <div className="container-fluid">
      <div className="card mb-5">
      <h3>{props.chosenItem._id ? (`_id: ${JSON.stringify(props.chosenItem._id)}`) : "Add a new item"}</h3>
        <form>

          <div className="form-group">
            <label htmlFor="nameUpdate">Name of item:</label>
            <textarea 
              className="form-control" 
              id="nameUpdate" 
              rows="1" 
              name="ProductName"
              onChange={props.handleInputChange}
              value={props.chosenItem.ProductName}></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="VolumeUpdate">Volume:</label>
            <textarea className="form-control" id="VolumeUpdate" rows="1" value={props.chosenItem.Volume}  name="Volume"
              onChange={props.handleInputChange}></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="AbvUpdate">Abv:</label>
            <textarea className="form-control" id="AbvUpdate" rows="1" value={props.chosenItem.Abv}  name="Abv"
              onChange={props.handleInputChange}></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="CategoryUpdate">Category:</label>
            <textarea className="form-control" id="CategoryUpdate" rows="1" value={props.chosenItem.Category}  name="Category"
              onChange={props.handleInputChange}></textarea>
          </div>
          
          <div className="form-group">
            <label htmlFor="TypeUpdate">Type:</label>
            <textarea className="form-control" id="TypeUpdate" rows="1" value={props.chosenItem.Type}  name="Type"
              onChange={props.handleInputChange}></textarea>
          </div>

          {/* go back and change the props.children.Type below to reflect the subtype once the database is updated to have "SubType" instead of "Sub-Type" */}

          <div className="form-group">
            <label htmlFor="SubTypeUpdate">SubType:</label>
            <textarea className="form-control" id="SubTypeUpdate" rows="1" value={props.chosenItem.SubType}  name="SubType"
              onChange={props.handleInputChange}></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="CountryUpdate">Country:</label>
            <textarea className="form-control" id="CountryUpdate" rows="1" value={props.chosenItem.Country}  name="Country"
              onChange={props.handleInputChange}></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="DescriptionUpdate">Description:</label>
            <textarea className="form-control" id="DescriptionUpdate" rows="5" value={props.chosenItem.Description}  name="Description"
              onChange={props.handleInputChange}></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="DescriptionUpdate">ImgUrl:</label>
            <textarea className="form-control"
            id="ImgUrlUpdate"
            rows="1"
            value={!props.chosenItem.ImgUrl ? "" : props.chosenItem.ImgUrl} name="ImgUrl"
            onChange={props.handleInputChange}></textarea>
          </div>

        </form>
      </div>
    </div>
  )
}

export default AdminSpiritsForm2;