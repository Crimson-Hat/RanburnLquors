import React from 'react';
import './style.css';

function AdminWinesForm2(props) {
  return (
    <div className="container-fluid">
      <div className="card mb-5 adminCard">
        <div className="title-row">
          <h3 className="form-title-h3 text-center">{props.chosenWine._id ? (`_id: ${JSON.stringify(props.chosenWine._id)}`) : "Add a new item"}</h3>
        </div>
        <form>

          <div className="form-group row mt-2 container-fluid mx-auto">
            <label htmlFor="familyUpdate" className="col-3">Name/Family:</label>
            <div className="col-9">

              <textarea
                className="form-control"
                id="familyUpdate"
                rows="1"
                name="FamilyName"
                onChange={props.handleInputChange2}
                value={props.chosenWine.FamilyName}></textarea>
            </div>
          </div>

          <div className="form-group row container-fluid mx-auto">
            <label htmlFor="CountryUpdate" className="col-3">Country:</label>
            <div className="col-9">

              <textarea className="form-control"
                id="CountryUpdate"
                rows="1"
                value={props.chosenWine.Country}
                name="Country"
                onChange={props.handleInputChange2}></textarea>
            </div>
          </div>

          <div className="form-group row container-fluid mx-auto">
            <label htmlFor="SizeUpdate" className="col-3">Size:</label>
            <div className="col-9">

              <textarea className="form-control"
                id="SizeUpdate"
                rows="1"
                value={props.chosenWine.Size}
                name="Size"
                onChange={props.handleInputChange2}></textarea>
            </div>
          </div>

          <div className="form-group row container-fluid mx-auto">
            <label htmlFor="TypesUpdate" className="col-3">Types:</label>
            <div className="col-9">

              <textarea className="form-control"
                id="TypesUpdate"
                rows="1"
                value={props.chosenWine.Types}
                name="Types"
                onChange={props.handleInputChange2}></textarea>
            </div>
          </div>

          <div className="form-group row container-fluid mx-auto">
            <label htmlFor="ImgUrlUpdate" className="col-3">ImgUrl:</label>
            <div className="col-9">

              <textarea className="form-control"
                id="ImgUrlUpdate"
                rows="1"
                value={!props.chosenWine.ImgUrl ? "" : props.chosenWine.ImgUrl}
                name="ImgUrl"
                onChange={props.handleInputChange2}></textarea>
            </div>
          </div>

          <div className="form-group row container-fluid mx-auto">
            <label htmlFor="DescriptionUpdate" className="col-3">Description:</label>
            <div className="col-9">

              <textarea className="form-control"
                id="DescriptionUpdate"
                rows="5"
                value={props.chosenWine.Description}
                name="Description"
                onChange={props.handleInputChange2}></textarea>
            </div>
          </div>

          <div className="container-fluid text-center my-2">
          <button className="btn btn-success"
            onClick={props.handleDatabaseUpdate2}>Update the database</button>
          </div>

          <div className="container-fluid text-center my-4">
          <button className="btn btn-danger"
            onClick={props.handleDatabaseDelete2}>Delete wine from the database</button>
          </div>


        </form>
      </div>
    </div>
  )
}

export default AdminWinesForm2;