const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const citySchema = require('./City').schema

const userSchema = new Schema({
  email: { type: String, required: [true, "Can't be blank"] },
  password: {type: String, required: [true, "Can't be blank"] },
<<<<<<< HEAD
  location: { type: citySchema },
=======
  location: {type: String, required: [true, "Can't be blank"] },
  completedHikes: [],
>>>>>>> main
  points: {type: Number, default: 0},
});

const User = mongoose.model("users", userSchema);

module.exports = User;