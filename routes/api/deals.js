const router = require("express").Router();
const dealsController = require("../../controllers/dealsController");

// Matches with "/api/deals"
router.route("/")
  .get(dealsController.findAll)
  .post(dealsController.create);

// Matches with "/api/deals/:id"
router
  .route("/:id")
  .get(dealsController.findById)
  .put(dealsController.update)
  .delete(dealsController.remove);

module.exports = router;
