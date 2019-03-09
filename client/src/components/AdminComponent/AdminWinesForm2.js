import React from 'react';

function AdminWinesForm2(props) {
  return (
    <div className="container-fluid">
      <div className="card mb-5">
        <h3>{props.chosenWine._id ? (`_id: ${JSON.stringify(props.chosenWine._id)}`) : "Add a new item"}</h3>
        <form>

        {/* chosenWine: {
      _id: "",
      FamilyName: "",
      Country: "",
      Size: "",
      Types: "",
      Description: "",
      ImgUrl: ""
    } */}

          <div className="form-group">
            <label htmlFor="familyUpdate">Name/Family of wine:</label>
            <textarea
            className="form-control"
            id="familyUpdate"
            rows="1"
            name="FamilyName"
            onChange={props.handleInputChange2}
            value={props.chosenWine.FamilyName}></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="CountryUpdate">Country:</label>
            <textarea className="form-control"
            id="CountryUpdate"
            rows="1"
            value={props.chosenWine.Country}
            name="Country"
            onChange={props.handleInputChange2}></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="SizeUpdate">Size:</label>
            <textarea className="form-control"
            id="SizeUpdate"
            rows="1"
            value={props.chosenWine.Size}
            name="Size"
            onChange={props.handleInputChange2}></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="TypesUpdate">Types:</label>
            <textarea className="form-control"
            id="TypesUpdate"
            rows="1"
            value={props.chosenWine.Types}
            name="Types"
            onChange={props.handleInputChange2}></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="DescriptionUpdate">Description:</label>
            <textarea className="form-control"
            id="DescriptionUpdate"
            rows="5"
            value={props.chosenWine.Description}
            name="Description"
            onChange={props.handleInputChange2}></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="ImgUrlUpdate">ImgUrl:</label>
            <textarea className="form-control"
            id="ImgUrlUpdate"
            rows="1"
            value={!props.chosenWine.ImgUrl ? "" : props.chosenWine.ImgUrl}
            name="ImgUrl"
            onChange={props.handleInputChange2}></textarea>
          </div>

          <button className="btn-block"
          onClick={props.handleDatabaseUpdate2}>Update the database</button>

          <button className="btn-block"
          onClick={props.handleDatabaseDelete2}>Delete wine from the database</button>
          

        </form>
      </div>
    </div>
  )
}

export default AdminWinesForm2;