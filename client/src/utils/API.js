import axios from "axios";

export default {
 
  getLocation: function() {
    return axios.get("../../routes/api");
  }
};