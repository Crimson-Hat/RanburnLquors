import React from 'react';

function AdminBeersForm1(props) {
  return (
    <div className="container-fluid">
    
      <div className="card mb-5">
      
        <form>

          <div className="form-group">
            <label htmlFor="beerUpdate">What Beer would you like to update?</label>
            <select name="beerName" onChange={props.handleInputChange3} className="form-control" id="beerUpdate">
              <option value="Add a new beer">Add a new beer</option>
              {!props.beers.length ? "" : props.beers.map(beer => {
                return (
                  <option key={beer._id} value={beer._id}>{beer.BrandName}</option>
                )
              })}

            </select>



          </div>

        </form>
      
      </div>
    
    </div>
  )
}

export default AdminBeersForm1;