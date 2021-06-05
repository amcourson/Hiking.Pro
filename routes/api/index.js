const router = require("express").Router();
const userRoutes = require("./users");
const locationRoutes = require("./locations");

// Post routes
router.use("/users", userRoutes);
router.use("/locations", locationRoutes);


module.exports = router;
