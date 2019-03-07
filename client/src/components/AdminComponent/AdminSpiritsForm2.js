import React from 'react';

function AdminSpiritsForm2(props) {
  return (
    <div className="container-fluid">
      <div className="card col-4 mb-5">
      <h3>{props.productId}</h3>
        <form>
          <div className="form-group">
            <label htmlFor="nameUpdate">Name of item:</label>
            <textarea className="form-control" id="nameUpdate" rows="1"></textarea>
          </div>

        </form>
      </div>
    </div>
  )
}

export default AdminSpiritsForm2;