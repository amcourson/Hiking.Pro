let { City } = require('../models')

module.exports = (req, res) => {
    City.find({ name: req.query.q }).then(r => {
        res.status(200).json(r)
    }).catch(e => res.status(422).json(e))
}