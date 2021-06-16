const router = require("express").Router();
const locationController = require("../../controllers/locationController");


router.route('/radius').get(locationController.findInRadius)

// Matches with "/api/location"
router
  .route("/")
  .get(locationController.findAll)
  .post(locationController.create);

  router
  .route("/search/:region&:city&:difficulty")
  .get(locationController.findByState)

// Matches with "/api/location/:id"
router
  .route("/:id")
  .get(locationController.findById)

module.exports = router;
