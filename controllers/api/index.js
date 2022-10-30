const router = require('express').Router();
const userRoutes = require("./user-routes")
const messageRoutes = require("./message-routes")
const channelRoute = require("./channelRoute");
const threadRoute = require("./threadRoute");
router.use("/user", userRoutes)
router.use('/messages', messageRoutes)
router.use('/channel', channelRoute);
router.use('/thread', threadRoute);
module.exports = router;
