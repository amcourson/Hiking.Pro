const router = require("express"). Router();
const googleapi = require("../../controllers/googleController");



router.route("/")
    .get(googleController.findByLocation);

module.exports = router;