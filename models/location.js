const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//location schema is going to contain every bit of information for the hike.
const locationSchema = new Schema({
    name: {type: String, default: null}, 
    difficulty: {type: String, default: null}, 
    distance: {type: String, default: null}, 
    descent: {type: String, default: null}, 
    climb: {type: String, default: null}, 
    area: {type: String, default: null}, 
    latitude: {type: String, default: null}, 
    longitude: {type: String, default: null}, 
    city: {type: String, default: null}, 
    region: {type: String, default: null}, 
    country:  {type: String, default: "US"}
});

const Location = mongoose.model("locations", locationSchema);

module.exports = Location;