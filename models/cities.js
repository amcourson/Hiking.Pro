const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//City Schema is going to contain data for our cities in the database
const citySchema = new Schema({
    id: {type: String, default: null}, 
    name: {type: String, default: null}, 
    state: {type: String, default: null}, 
    country: {type: String, default: null}, 
    coord: {}
});

const Cities = mongoose.model("cities", citySchema);

module.exports = Cities;