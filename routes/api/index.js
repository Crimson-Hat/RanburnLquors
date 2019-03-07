const router = require("express").Router();
const dealsRoutes = require("./deals");
const spiritsRoutes = require("./spirits");


router.use("/deals", dealsRoutes);
router.use("/spirits", spiritsRoutes);

module.exports = router;
