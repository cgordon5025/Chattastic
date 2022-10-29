const router = require('express').Router();
const userRoutes = require("./user-routes")
const messageRoutes = require("./message-routes")
router.use("/user", userRoutes)
router.use('/messages', messageRoutes)

module.exports = router;
