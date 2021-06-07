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

      validateRegisterInput: (data) => {
        let errors = {};
      // Convert empty fields to an empty string so we can use validator functions
        name = !isEmpty(username) ? username : "";
        email = !isEmpty(email) ? email : "";
        password = !isEmpty(password) ? password : "";
        password2 = !isEmpty(password2) ? password2 : "";
      // username checks
        if (Validator.isEmpty(username)) {
          errors.name = "Name field is required";
        }
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
        
      }

}