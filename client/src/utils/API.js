import axios from "axios";

export default {
  //Get Single location
  getLocation: function(id) {
    return axios.get("/api/locations/" + id);
  },

  //going to allow the user to search by region city and difficulty
  getLocationByState: function(region, city, difficulty) {
    return axios.get("/api/locations/search/" + region + "&" + city + "&" + difficulty);
  },
  //Get all Locations
  getLocations: function() {
    return axios.get("/api/locations/");
  },
  //Saves a new location to 
  saveLocation: function() {
    return axios.post("/api/locations/");
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
    return axios.get("/api/users/"+id)
  },
  //Updates the users data
  updateUser: function(id, userData) {

    return axios.put("/api/users/"+id, userData)
  }

};