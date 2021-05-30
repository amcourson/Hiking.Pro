const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//User Schema contains Username, email, password, bio, avatar, and total points
const locationSchema = new Schema({
    name: {type: String}, 
    difficulty: {type: String}, 
    distance: {type: String}, 
    descent: {type: String}, 
    climb: {type: String}, 
    area: {type: String}, 
    latitude: {type: String}, 
    longitude: {type: String}, 
    city: {type: String}, 
    region: {type: String}, 
    country:  {type: String}
});

const Location = mongoose.model("locations", locationSchema);

module.exports = Location;