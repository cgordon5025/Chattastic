const router = require("express").Router();

const userRoutes = require("./user-routes");
const channelRoute = require("./channelRoute");
const threadRoute = require("./threadRoute");
// const postRoutes = require('./post-routes');
// const apiRoutes = require('./api');

router.use("/user", userRoutes);
router.use('/channel', channelRoute)
router.use('/thread', threadRoute)

router.get("/", async (req, res) => {
  res.render("homepage");
});


module.exports = router;
