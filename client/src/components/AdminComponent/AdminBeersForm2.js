import React from 'react';
import './style.css';

function AdminBeersForm2(props) {
  return (
    <div className="container-fluid">
      <div className="card mb-5 adminCard">
        <div className="title-row">
          <h3 className="form-title-h3 text-center">{props.chosenBeer._id ? (`_id: ${JSON.stringify(props.chosenBeer._id)}`) : "Add a new item"}</h3>
        </div>
        <form>

          <div className="form-group row mt-2 container-fluid mx-auto">
            <label htmlFor="brandNameUpdate" className="col-3">Brand Name:</label>
            <div className="col-9">

              <textarea
                className="form-control"
                id="BrandNameUpdate"
                rows="1"
                name="BrandName"
                onChange={props.handleInputChange3}
                value={props.chosenBeer.BrandName}></textarea>
            </div>
          </div>

          <div className="form-group row container-fluid mx-auto">
            <label htmlFor="AvailableSizesUpdate" className="col-3">Available Sizes:</label>
            <div className="col-9">

              <textarea className="form-control"
                id="AvailableSizesUpdate"
                rows="1"
                value={props.chosenBeer.AvailableSizes}
                name="AvailableSizes"
                onChange={props.handleInputChange3}></textarea>
            </div>
          </div>

          <div className="form-group row container-fluid mx-auto">
            <label htmlFor="BeerStyleUpdate" className="col-3">Beer Style:</label>
            <div className="col-9">

              <textarea className="form-control"
                id="BeerStyleUpdate"
                rows="1"
                value={props.chosenBeer.BeerStyle}
                name="BeerStyle"
                onChange={props.handleInputChange3}></textarea>
            </div>
          </div>

          <div className="form-group row container-fluid mx-auto">
            <label htmlFor="AbvUpdate" className="col-3">Abv:</label>
            <div className="col-9">

              <textarea className="form-control"
                id="AbvUpdate"
                rows="1"
                value={props.chosenBeer.Abv}
                name="Abv"
                onChange={props.handleInputChange3}></textarea>
            </div>
          </div>


          <div className="form-group row container-fluid mx-auto">
            <label htmlFor="ImgUrlUpdate" className="col-3">ImgUrl:</label>
            <div className="col-9">

              <textarea className="form-control"
                id="ImgUrlUpdate"
                rows="1"
                value={props.chosenBeer.ImgUrl}
                name="ImgUrl"
                onChange={props.handleInputChange3}></textarea>
            </div>
          </div>

          <div className="form-group row container-fluid mx-auto">
            <label htmlFor="DescriptionUpdate" className="col-3">Description:</label>
            <div className="col-9">

              <textarea className="form-control"
                id="DescriptionUpdate"
                rows="5"
                value={props.chosenBeer.Description}
                name="Description"
                onChange={props.handleInputChange3}></textarea>
            </div>
          </div>

          <div className="container-fluid text-center my-2">
          <button className="btn btn-success"
            onClick={props.handleDatabaseUpdate3}>Update the database</button>
          </div>

          <div className="container-fluid text-center my-4">
          <button className="btn btn-danger"
            onClick={props.handleDatabaseDelete3}>Delete beer from the database</button>
          </div>


        </form>
      </div>
    </div>
  )
}

export default AdminBeersForm2;