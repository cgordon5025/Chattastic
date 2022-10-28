const router = require("express").Router();
const withAuth = require("../utils/auth")

const userRoutes = require("./user-routes");
const channelRoute = require("./channelRoute");
const threadRoute = require("./threadRoute");
const homeRoutes = require('./home-routes')
// const postRoutes = require('./post-routes');
// const apiRoutes = require('./api');

router.use("/user", userRoutes);
router.use('/channel', channelRoute)
router.use('/thread', threadRoute)
router.use('/', homeRoutes)
router.get("/", withAuth, async (req, res) => {
  res.render("homepage");
});


module.exports = router;
