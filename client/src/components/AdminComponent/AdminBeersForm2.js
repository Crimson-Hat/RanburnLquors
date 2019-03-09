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

          <div className="form-group row mt-2">
            <label htmlFor="brandNameUpdate" className="col-3">BrandName:</label>
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

          <div className="form-group row">
            <label htmlFor="AvailableSizesUpdate" className="col-3">AvailableSizes:</label>
            <div className="col-9">
            
            <textarea className="form-control"
            id="AvailableSizesUpdate"
            rows="1"
            value={props.chosenBeer.AvailableSizes}
            name="AvailableSizes"
            onChange={props.handleInputChange3}></textarea>
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="BeerStyleUpdate" className="col-3">BeerStyle:</label>
            <div className="col-9">
            
            <textarea className="form-control"
            id="BeerStyleUpdate"
            rows="1"
            value={props.chosenBeer.BeerStyle}
            name="BeerStyle"
            onChange={props.handleInputChange3}></textarea>
            </div>
          </div>

          <div className="form-group row">
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


          <div className="form-group row">
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

          <div className="form-group">
            <label htmlFor="DescriptionUpdate">Description:</label>
            <textarea className="form-control"
            id="DescriptionUpdate"
            rows="5"
            value={props.chosenBeer.Description}
            name="Description"
            onChange={props.handleInputChange3}></textarea>
          </div>

          <button className="btn-block"
          onClick={props.handleDatabaseUpdate3}>Update the database</button>

          <button className="btn-block"
          onClick={props.handleDatabaseDelete3}>Delete beer from the database</button>


        </form>
      </div>
    </div>
  )
}

export default AdminBeersForm2;