const mongoose = require("mongoose");
const db = require("../models");
const trails = require("./trailstest.json");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hikingpro");

const userSeed = [
  {
    username: "TheRock",
    email: "rock@therock.com",
    password: "password123",
    location: "Dallas",
    favorites: [],
    completed: ["60b820f196ae0e2738634c3c"],
    points: 40
  },
  {
    username: "SteveBuscemi",
    email: "steve@buscemi.com",
    password: "password123",
    location: "Chicago",
    favorites: ["60b820f196ae0e2738634c3c","60b820f196ae0e2738634c3d"],
    completed: ["60b820f196ae0e2738634c3e"],
    points: 0
  },
  {
    username: "Yoda",
    email: "yoda@theforce.com",
    password: "123password",
    location: "Austin",
    favorites: ["60b820f196ae0e2738634c3c"],
    completed: [],
    points: 20
  }
];

const locationSeed = trails


db.User.remove({}) && db.Location.remove({})
  .then(() => db.User.collection.insertMany(userSeed)) && db.Location.collection.insertMany(locationSeed)
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
