import React from 'react';

function AdminBeersForm2(props) {
  return (
    <div className="container-fluid">
      <div className="card mb-5">
        <h3>{props.chosenBeer._id ? (`_id: ${JSON.stringify(props.chosenBeer._id)}`) : "Add a new item"}</h3>
        <form>

        {/* chosenBeer: {
      _id: "",
      BrandName: "",
      AvailableSizes:"",
      BeerStyle: "",
      Abv: "",
      Description: "",
      ImgUrl: ""
    } */}

          <div className="form-group">
            <label htmlFor="brandNameUpdate">BrandName of beer:</label>
            <textarea
            className="form-control"
            id="BrandNameUpdate"
            rows="1"
            name="BrandName"
            onChange={props.handleInputChange3}
            value={props.chosenBeer.BrandName}></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="AvailableSizesUpdate">AvailableSizes:</label>
            <textarea className="form-control"
            id="AvailableSizesUpdate"
            rows="1"
            value={props.chosenBeer.AvailableSizes}
            name="AvailableSizes"
            onChange={props.handleInputChange3}></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="BeerStyleUpdate">BeerStyle:</label>
            <textarea className="form-control"
            id="BeerStyleUpdate"
            rows="1"
            value={props.chosenBeer.BeerStyle}
            name="BeerStyle"
            onChange={props.handleInputChange3}></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="AbvUpdate">Abv:</label>
            <textarea className="form-control"
            id="AbvUpdate"
            rows="1"
            value={props.chosenBeer.Abv}
            name="Abv"
            onChange={props.handleInputChange3}></textarea>
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

          <div className="form-group">
            <label htmlFor="ImgUrlUpdate">ImgUrl:</label>
            <textarea className="form-control"
            id="ImgUrlUpdate"
            rows="1"
            value={props.chosenBeer.ImgUrl}
            name="ImgUrl"
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