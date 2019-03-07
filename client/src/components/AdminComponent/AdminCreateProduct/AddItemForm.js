import React from 'react';
import spirits from '../../../../../spirits.json'


function AddItem() {
  return (
    // <React.Fragment>
    <div className="container-fluid">

      <div className="card">

      <h2>Add a Product</h2>

        <form>

          <div className="form-group">
            <label for="newName">What is the Product's Name?</label>
            <input type="text" className="form-control" id="newName" placeholder="Drink Name Here">
          </div>

          <div className="form-group">
            <label for="newVolume">What is the Product's Volume?</label>
            <input type="text" className="form-control" id="newVolume" placeholder="Drink Volume Here">
          </div>

          <div className="form-group">
            <label for="newAbv">What is the Product's Abv?</label>
            <input type="text" className="form-control" id="newAbv" placeholder="Drink Abv Here">
          </div>

          <div className="form-group">
            <label for="newCategory">What is the Product's Category?</label>
            <input type="text" className="form-control" id="newCategory" placeholder="Drink Category Here">
          </div>

          <div className="form-group">
            <label for="newType">What is the Product's Type?</label>
            <input type="text" className="form-control" id="newType" placeholder="Drink Type Here">
          </div>

          <div className="form-group">
            <label for="newSubType">What is the Product's Sub-Type?</label>
            <input type="text" className="form-control" id="newSubType" placeholder="Drink Sub-Type Here">
          </div>

          <div className="form-group">
            <label for="newCountry">What is the Product's Country?</label>
            <input type="text" className="form-control" id="newCountry" placeholder="Drink Country Here">
          </div>

          <div className="form-group">
            <label for="newPrice">What is the Product's Price?</label>
            <input type="text" className="form-control" id="newPrice" placeholder="Drink Name Here">
          </div>

          <div className="form-group">
            <label for="newDescription">What is the Product's Description?</label>
            <textarea className="form-control" id="newDescription" rows="4"></textarea>
          </div>

        </form>
        
      </div>

      </div>
      {/* </React.Fragment> */}
      
      )
    }
        
export default AddItem;