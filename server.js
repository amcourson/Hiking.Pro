const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;


// Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// Serves static assets on Heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build"));
}
// if (process.env.NODE_ENV != "production") {
//   app.use(express.static("./client/public"));
// }



app.use(
  express.urlencoded({ extended: true }),
  express.json(),
  require('./routes'),
  require('cors')()
)

// DB Config
const db = require("./config/keys").mongoURI;

mongoose
  .connect(
    process.env.MONGODB_URI || db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));


app.listen(PORT, () => console.log(`LISTENING AT https://localhost:${PORT}`))