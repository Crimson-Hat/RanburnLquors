import React from 'react';
import './style.css';

function AdminSpiritsForm2(props) {
  return (
    <div className="container-fluid">
      <div className="card mb-5 adminCard">
      <div className="title-row">
        <h3 className="form-title-h3 text-center">{props.chosenItem._id ? (`_id: ${JSON.stringify(props.chosenItem._id)}`) : "Add a new item"}</h3>
      </div>
        <form>

          <div className="form-group row mt-2">
            <label htmlFor="nameUpdate" className="col-3">Name of item:</label>
            <div className="col-9">

              <textarea
                className="form-control"
                id="nameUpdate"
                rows="1"
                name="ProductName"
                onChange={props.handleInputChange}
                value={props.chosenItem.ProductName}></textarea>
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="VolumeUpdate" className="col-3">Volume:</label>
            <div className="col-9">

              <textarea className="form-control" id="VolumeUpdate"
                rows="1"
                value={props.chosenItem.Volume}
                name="Volume"
                onChange={props.handleInputChange}></textarea>
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="AbvUpdate" className="col-3">Abv:</label>
            <div className="col-9">

              <textarea className="form-control" id="AbvUpdate"
                rows="1"
                value={props.chosenItem.Abv}
                name="Abv"
                onChange={props.handleInputChange}></textarea>
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="CategoryUpdate" className="col-3">Category:</label>
            <div className="col-9">

              <textarea className="form-control" id="CategoryUpdate"
                rows="1"
                value={props.chosenItem.Category} name="Category"
                onChange={props.handleInputChange}></textarea>
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="TypeUpdate" className="col-3">Type:</label>
            <div className="col-9">

              <textarea className="form-control" id="TypeUpdate"
                rows="1"
                value={props.chosenItem.Type}
                name="Type"
                onChange={props.handleInputChange}></textarea>
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="SubTypeUpdate" className="col-3">SubType:</label>
            <div className="col-9">

              <textarea className="form-control" id="SubTypeUpdate"
                rows="1"
                value={props.chosenItem.SubType}
                name="SubType"
                onChange={props.handleInputChange}></textarea>
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="CountryUpdate" className="col-3">Country:</label>
            <div className="col-9">

              <textarea className="form-control" id="CountryUpdate"
                rows="1"
                value={props.chosenItem.Country}
                name="Country"
                onChange={props.handleInputChange}></textarea>
            </div>
          </div>


          <div className="form-group row">
            <label htmlFor="ImgUrlUpdate" className="col-3">ImgUrl:</label>
            <div className="col-9">
            
            <textarea className="form-control"
              id="ImgUrlUpdate"
              rows="1"
              value={!props.chosenItem.ImgUrl ? "" : props.chosenItem.ImgUrl}
              name="ImgUrl"
              onChange={props.handleInputChange}></textarea>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="DescriptionUpdate">Description:</label>
            <textarea className="form-control" id="DescriptionUpdate" rows="5" value={props.chosenItem.Description} name="Description"
              onChange={props.handleInputChange}></textarea>
          </div>

          <button className="btn-block"
            onClick={props.handleDatabaseUpdate}
          >Update the database</button>

          <button className="btn-block"
            onClick={props.handleDatabaseDelete}>Delete item from the database</button>

        </form>
      </div>
    </div>
  )
}

export default AdminSpiritsForm2;