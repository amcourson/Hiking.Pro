const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//User Schema contains Username, email, password, bio, avatar, and total points
const userSchema = new Schema({
  username: { type: String, required: true, match: [/^[a-zA-Z0-9]+$/, 'is invalid'] },
  email: { type: String, required: [true, "Can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'] },
  password: {type: String, required: [true, "Can't be blank"], match: [/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'must be atleast 8 characters, atleast 1 letter and 1 number']},
  points: {type: Number, default: 0}
});

const User = mongoose.model("User", userSchema);

module.exports = User;