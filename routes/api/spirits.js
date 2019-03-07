const router = require("express").Router();
const spiritsController = require("../../controllers/spiritsController");

// Matches with "/api/spirits"
router.route("/")
  .get(spiritsController.findAll)
  .post(spiritsController.create);

// Matches with "/api/spirits/:id"
router
  .route("/:id")
  .get(spiritsController.findById)
  .put(spiritsController.update)
  .delete(spiritsController.remove);

module.exports = router;
