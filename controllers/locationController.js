const db = require("../models");

// Defining methods for the postsController
module.exports = {
  findAll: function(req, res) {
    db.Location.find(req.query)
      .sort({ region: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByState: function(req, res) {
    db.Location.find({region: req.params.region})
      .sort({ name: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Location.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Location.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};