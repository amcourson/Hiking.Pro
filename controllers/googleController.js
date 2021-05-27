const db = require("../models");

module.exports = {
    findbyLocation: function(req,res) {
        db.findbyLocation
        .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
    };