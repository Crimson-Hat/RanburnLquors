const router = require("express").Router();
const winesController = require("../../controllers/winesController");

// Matches with "/api/wines"
router.route("/")
  .get(winesController.findAll)
  .post(winesController.create);

// Matches with "/api/wines/:id"
router
  .route("/:id")
  .get(winesController.findById)
  .put(winesController.update)
  .delete(winesController.remove);

module.exports = router;
