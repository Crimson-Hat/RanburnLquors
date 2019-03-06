import React from 'react';



function AdminTest(props) {
  return (
    <div className="container-fluid">

      <div className="card">
      
      <form>

        <div className="form-group">
          <label for="itemUpdate">What item would you like to update?</label>
          <select className="form-control" id="itemUpdate">
            <option>Collier Creek Cabernet Sauvignon</option>
            <option>Collier Creek Pinot Noir</option>
            <option>Collier Creek Chardonnay</option>
            <option>J.Moreau & Fils Vouvray</option>
            <option>Jack Daniels</option>
            <option>Bulleit Bourbon</option>
            <option>Tito's Vodka</option>
            <option>The Macellan 12yr Double Cask</option>
          </select>
        </div>

        <div className="form-group">
        <label for="typeOfUpdate">How would you like to update this item?</label>
        <select className="form-control" id="typeOfUpdate">
          <option>Update item name</option>
          <option>Update item image</option>
          <option>Update item type</option>
          <option>Update item price</option>
          <option>Update item size</option>
          <option>Update item's alcohol/volume concentration</option>
          <option>Update item's old price</option>
        </select>
        </div>
      </form>
      </div>

    </div>
  )
}



export default AdminTest;