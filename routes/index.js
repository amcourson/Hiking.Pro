let express = require('express')
let router = express.Router()
let path = require('path')
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

router.use('/', (req, res) => res.sendFile(path.join(__dirname, '../client/build/index.html')))

module.exports = router