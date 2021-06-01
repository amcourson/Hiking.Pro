const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const passport = require("passport");


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serves static assets on Heroku

app.use(express.static("client/build"));


// Add routes, both API and view
app.use(routes);

// DB Config
const db = require("./config/keys").mongoURI;

mongoose
  .connect(
    process.env.MONGODB_URI || db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);




app.listen(PORT, () => console.log(`LISTENING AT https://localhost:${PORT}`))