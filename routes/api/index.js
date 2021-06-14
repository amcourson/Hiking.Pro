const router = require("express").Router();
const userRoutes = require("./users");
const locationRoutes = require("./locations");
const cityRoutes = require('./cities')

// Post routes
router.use("/users", userRoutes);
router.use("/locations", locationRoutes);
router.use('/cities', cityRoutes)


module.exports = router;
