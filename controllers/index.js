const router = require("express").Router();

// const userRoutes = require("./api/user-routes");
const channelRoute = require("./channelRoute");
const threadRoute = require("./threadRoute");
const homeRoutes = require('./home-routes');
const apiRoutes = require('./api')
// const messageRoutes = require('./api/message-routes');

// const postRoutes = require('./post-routes');
// const apiRoutes = require('./api');
router.use('/api', apiRoutes)
// router.use('/channel', channelRoute);
// router.use('/thread', threadRoute);
router.use('/', homeRoutes);
router.get("/", async (req, res) => {
  res.render("chatroom");
});


module.exports = router;
