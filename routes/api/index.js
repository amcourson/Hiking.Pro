const router = require("express").Router()

// Post routes
router.use("/users", require("./users"));

module.exports = router;
