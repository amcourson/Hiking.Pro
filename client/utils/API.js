import axios from "axios";

export default {
    getParks: function() {
      return axios.get("https://developer.nps.gov/api/v1/parks?api_key=SBPJpghPIRlWN31fBas9m3MsSuQyEoSsoIjv8lZj");
    },
};
  