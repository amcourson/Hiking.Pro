let express = require('express')
let dotenv = require('dotenv').config()
const mongoose = require("mongoose");


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

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hikerpro");


app.listen(PORT, () => console.log(`LISTENING AT https://localhost:${PORT}`))