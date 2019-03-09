import React from 'react';

function AdminWinesForm1(props) {
  return (
    <div className="container-fluid">

      <div className="card mb-5 adminCard">

        <div className="title-row">
          <h3 className="form-title-h3 text-center">Update or Add</h3>
        </div>

        <form>

          <div className="form-group">
            <label htmlFor="wineUpdate">What Wine would you like to update? Or would you like to add a new one?</label>
            <select name="wineName" onChange={props.handleInputChange2}
              className="form-control" id="wineUpdate">
              <option value="Add a new wine">Add a new wine</option>
              {!props.wines.length ? "" : props.wines.map(wine => {
                return (
                  <option key={wine._id} value={wine._id}>{wine.FamilyName}</option>
                )
              })}

            </select>



          </div>

        </form>

      </div>

    </div>
  )
}

export default AdminWinesForm1;