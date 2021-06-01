import axios from "axios";

export default {
  //Get Single location
  getLocation: function(id) {
    return axios.get("/api/locations" + id);
  },
  //Get all Locations
  getLocations: function() {
    return axios.get("/api/locations");
  },
  //Saves a new location to 
  saveLocation: function() {
    return axios.post("/api/locations");
  },
  //Registers a new user
  registerUser: function() {
    return axios.post("/api/users/register")
  },
  //Logs in a current user
  loginUser: function() {
    return axios.post("/api/users/login")
  },
  //Gets the Current users data
  getUser: function(id) {
    return axios.get("/api/users" + id)
  },
  //Updates the users data
  updateUser: function(id) {
    return axios.put("/api/users" + id)
  }

};