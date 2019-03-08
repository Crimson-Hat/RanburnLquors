import axios from "axios";

export default {
  //-------------------Spirits Methods----------------------------------------
  //-------------------Spirits Methods----------------------------------------


  //Get all spirits
  getSpirits: function () {
    return axios.get("/api/spirits")
  },

  getSingleSpirit: function (id) {
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

  //-------------------Beers Methods----------------------------------------
  //-------------------Beers Methods----------------------------------------


  //Get all beers
  getBeers: function () {
    return axios.get("/api/beers")
  },

  getSingleBeer: function (id) {
    return axios.get("/api/beers/" + id);
  },

  //deletes the beer with the given id
  deletebeers: function (id) {
    return axios.delete("/api/beers/" + id)
  },

  //Saves a beer to the database
  saveBeers: function (beersData) {
    return axios.post("/api/beer", beersData);
  },

  //-------------------Beers Methods----------------------------------------
  //-------------------Beers Methods----------------------------------------


  //-------------------Wines Methods----------------------------------------
  //-------------------Wines Methods----------------------------------------
 //Get all wines
 getWines: function () {
  return axios.get("/api/wines")
},

getSingleWines: function (id) {
  return axios.get("/api/wines/" + id);
},

//deletes the wine with the given id
deleteWines: function (id) {
  return axios.delete("/api/wines/" + id)
},

//Saves a wine to the database
saveWines: function (winesData) {
  return axios.post("/api/wines", winesData);
},
  //-------------------Wines Methods----------------------------------------
  //-------------------Wines Methods----------------------------------------

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
