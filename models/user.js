const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//User Schema contains Username, email, password, bio, avatar, and total points
const userSchema = new Schema({
  email: { type: String, required: [true, "Can't be blank"] },
  password: {type: String, required: [true, "Can't be blank"] },
  location: {type: String, required: [true, "Can't be blank"] },
  points: {type: Number, default: 0},
  id: {type: Number, required: true}
});

const User = mongoose.model("users", userSchema);

module.exports = User;