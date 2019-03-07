import React from 'react';

function AdminSpiritsForm2(props) {
  return (
    <div className="container-fluid">
      <div className="card col-4 mb-5">
      <h3>{JSON.stringify(props.chosenItem)}</h3>
        <form>

          <div className="form-group">
            <label htmlFor="nameUpdate">Name of item:</label>
            <textarea className="form-control" id="nameUpdate" rows="1" value={props.chosenItem.ProductName}></textarea>
          </div>

          {/* <div className="form-group">
            <label htmlFor="VolumeUpdate">Volume:</label>
            <textarea className="form-control" id="VolumeUpdate" rows="1" value={props.chosenItem.Volume}></textarea>
          </div> */}

        </form>
      </div>
    </div>
  )
}

export default AdminSpiritsForm2;