let express = require('express')
let dotenv = require('dotenv').config()
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


let PORT = process.env['PORT'] || 3001

// Serves static assets on Heroku
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

let app = express()
app.use(
    express.urlencoded({ extended: true }),
    express.json(),
    require('./routes')
)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hikingpro");

// // Bodyparser middleware
// app.use(
//   bodyParser.urlencoded({
//     extended: false
//   })
// );
// app.use(bodyParser.json());


//This will be for Authentication once fully deployed

// // DB Config
// const db = require("./config/keys").mongoURI;

// mongoose
//   .connect(
//     db,
//     { useNewUrlParser: true }
//   )
//   .then(() => console.log("MongoDB successfully connected"))
//   .catch(err => console.log(err));


app.listen(PORT, () => console.log(`LISTENING AT https://localhost:${PORT}`))