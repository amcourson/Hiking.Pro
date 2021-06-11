const router = require("express").Router()
const cityController = require('../../controllers/citiesController')

router.get('/', cityController)

module.exports = router;