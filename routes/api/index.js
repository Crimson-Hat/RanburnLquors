const router = require("express").Router();
const dealsRoutes = require("./deals");
const spiritsRoutes = require("./spirits");
const winesRoutes = require("/wines");
const beersRoutes = require("/beers");


router.use("/deals", dealsRoutes);
router.use("/spirits", spiritsRoutes);
router.use("/wines", winesRoutes);
router.use("/beers", beersRoutes);

module.exports = router;
