import axios from "axios";

export default {
  //-------------------Spirits Methods----------------------------------------
  //-------------------Spirits Methods----------------------------------------


  //Get all spirits
  getSpirits: function () {
    return axios.get("/api/spirits")
  },

  getSpirits: function(id) {
    return axios.get("/api/spirits/" + id);
  },

  //deletes the spirits with the given id
  deleteSpirits: function (id) {
    return axios.delete("/api/spirits/" + id)
  },

  //Saves a spirit to the database
  saveSpirits: function (spiritsData) {
    return axios.post("/api/spirits", spiritsData);
  },

  //-------------------Spirits Methods----------------------------------------
  //-------------------Spirits Methods----------------------------------------


  //-------------------Deals Methods----------------------------------------
  //-------------------Deals Methods----------------------------------------


  // Gets all deals
  getDeals: function () {
    return axios.get("/api/deals");
  },
  // Gets the deal with the given id
  // getDeals: function(id) {
  //   return axios.get("/api/deals/" + id);
  // },

  // Deletes the deal with the given id
  deleteDeals: function (id) {
    return axios.delete("/api/deals/" + id);
  },
  // Saves a deal to the database
  saveDeal: function (dealsData) {
    return axios.post("/api/deals", dealsData);
  }
};


  //-------------------Deals Methods----------------------------------------
  //-------------------Deals Methods----------------------------------------
