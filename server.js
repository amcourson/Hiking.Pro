const express = require("express");
const path = require('path')
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

if (process.env.NODE_env === 'production'){
  app.use(express.static(path.join(__dirname, 'client', 'build')));
}


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

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')))

app.listen(PORT, () => console.log(`LISTENING AT https://localhost:${PORT}`))