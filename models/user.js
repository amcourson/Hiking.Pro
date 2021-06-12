const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const citySchema = require('./City').schema

//User Schema contains Username, email, password, bio, avatar, and total points
const userSchema = new Schema({
  name: { type: String, required: [true, "Can't be blank"] },
  email: { type: String, required: [true, "Can't be blank"] },
  password: {type: String, required: [true, "Can't be blank"] },
  location: {type: citySchema  },
  completedHikes: {type: Array},
  points: {type: Number, default: 0},
});

const User = mongoose.model("users", userSchema);

module.exports = User;
