const router = require("express").Router();
const userController = require("../../controllers/userController.js");

router
  .route("/register")
  .post(userController.create);

router
  .route("/login")
  .post(userController.login)

router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)

router.route('/data')
  .get(userController.getData)

module.exports = router;