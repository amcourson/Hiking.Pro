const db = require("../models");

// Defining methods for the postsController
module.exports = {
  findAll: function (req, res) {
    db.Location.find(req.query)
      .sort({ name: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByState: function (req, res) {
    // switches difficulty level for the query
    const difficultySwitch = (diff) => {
      switch (diff) {
        case "ExtremelyDifficult":
          return "Extremely Difficult / Dbl Black Diamond";
        case "VeryDifficult":
          return "Very Difficult / Black Diamond";
        case "Intermediate":
          return "Intermediate / Blue Square";
        case "Easy":
          return "Easy / Green Circle";
        case "Easiest":
          return "Easiest / White Circle";
        default:
          return "Intermediate / Blue Square";
      } 
    };

    db.Location.find({
      region: req.params.region,
      city: req.params.city.split("-").join(" "),
      difficulty: difficultySwitch(req.params.difficulty)
    })
      .sort({ area: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Location.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Location.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};