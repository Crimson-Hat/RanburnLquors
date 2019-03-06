const router = require("express").Router();
const dealsRoutes = require("./deals");

// Book routes
router.use("/deals", dealsRoutes);

module.exports = router;
