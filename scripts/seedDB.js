const mongoose = require("mongoose");
const db = require("../models");
const trails = require("./trailstest.json");
const cities = require("./citiestest.json");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hikingpro");

const userSeed = [
  {
    email: "rock@therock.com",
    password: "password123",
    location: "Dallas",
    completedHikes: [{"_id":"60b55acbd7875054780fcf17","name":"\"bb\"","difficulty":"Intermediate / Blue Square"},{"_id":"60b55acbd7875054780fcf15","name":"\"A\" Single trail","difficulty":"Intermediate / Blue Square"}],
    points: 40
  },
  {
    email: "steve@buscemi.com",
    password: "password123",
    location: "Chicago",
    completedHikes: [{"_id":"60b55acbd7875054780fcf17","name":"\"bb\"","difficulty":"Intermediate / Blue Square"},{"_id":"60b55acbd7875054780fcf15","name":"\"A\" Single trail","difficulty":"Intermediate / Blue Square"}],
    points: 0
  },
  {
    email: "yoda@theforce.com",
    password: "123password",
    location: "Austin",
    completedHikes: [],
    points: 20
  },

];

const locationSeed = trails

const citySeed = cities


db.User.remove({}) && db.Location.remove({})
  .then(() => db.User.collection.insertMany(userSeed)) && db.Location.collection.insertMany(locationSeed) && db.Cities.collection.insertMany(citySeed)
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
