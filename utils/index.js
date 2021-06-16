const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports= {

    validateLoginInput: (email, password) => {
        let errors = {};
      // Convert empty fields to an empty string so we can use validator functions
        email = !isEmpty(email) ? email : "";
        password = !isEmpty(password) ? password : "";
      // Email checks
        if (Validator.isEmpty(email)) {
          errors.email = "Email field is required";
        } else if (!Validator.isEmail(email)) {
          errors.email = "Email is invalid";
        }
      // Password checks
        if (Validator.isEmpty(password)) {
          errors.password = "Password field is required";
        }
      return {
          errors,
          isValid: isEmpty(errors)
        };
      },

      validateRegisterInput: (email, password, password2) => {
        return {erros: true, isValid: true}
        let errors = {};
      // Convert empty fields to an empty string so we can use validator functions
        email = !isEmpty(email) ? email : "";
        password = !isEmpty(password) ? password : "";
        password2 = !isEmpty(password2) ? password2 : "";

      // Email checks
        if (Validator.isEmpty(email)) {
          errors.email = "Email field is required";
        } else if (!Validator.isEmail(email)) {
          errors.email = "Email is invalid";
        }
      // Password checks
        if (Validator.isEmpty(password)) {
          errors.password = "Password field is required";
        }
      if (Validator.isEmpty(password2)) {
          errors.password2 = "Confirm password field is required";
        }
      if (!Validator.isLength(password, { min: 6, max: 30 })) {
          errors.password = "Password must be at least 6 characters";
        }
      if (!Validator.equals(password, password2)) {
          errors.password2 = "Passwords must match";
        }
      return {
          errors,
          isValid: isEmpty(errors)
        };
      },

      withAuth: (req, res, next) => {
        
      },

      degreesToMiles: (lat1, lon1, lat2, lon2) => {
        let R = 63713000
        let phi1 = lat1 * Math.PI/180
        let phi2 = lat2 * Math.PI/180
        let deltaphi = (lat2 - lat1) * Math.PI/180
        let deltalambda = (lon2 - lon1) * Math.PI/180

        let a = Math.sin(deltaphi / 2) * Math.sin(deltaphi / 2) +
                Math.cos(phi1) * Math.cos(phi2) *
                Math.sin(deltalambda / 2) * Math.sin(deltalambda / 2)
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

       return R * c / 16090
    }

}