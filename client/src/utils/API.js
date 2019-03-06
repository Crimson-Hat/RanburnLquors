import axios from "axios";

export default {
  // Gets all deals
  getDeals: function() {
    return axios.get("/api/deals");
  },
  // Gets the deal with the given id
  // getDeals: function(id) {
  //   return axios.get("/api/deals/" + id);
  // },
  // Deletes the deal with the given id
  deleteDeals: function(id) {
    return axios.delete("/api/deals/" + id);
  },
  // Saves a deal to the database
  saveBook: function(dealsData) {
    return axios.post("/api/books", dealsData);
  }
};
