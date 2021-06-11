const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citySchema = new Schema({
    name: {type: String}, 
    id: {type: Number},
    state: {type: String},
    country: {type: String},
    coord: { 
        lon: { type: Number },
        lat: { type: Number }
    }
});

const City = mongoose.model("cities", citySchema);

module.exports = City;