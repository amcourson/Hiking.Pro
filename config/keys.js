let dotenv = require('dotenv').config()

module.exports = {
    mongoURI: process.env['MONGO_ADMIN_URI'] || "mongodb://localhost/hikingpro",
    secretOrKey: "secret"
  };