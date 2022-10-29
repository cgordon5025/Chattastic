const router = require("express").Router();
const {Channel, Thread} = require("../models");

router.get("/", async (req, res) => {
  try {
    const channel = await Channel.findAll();
    res.status(200).json(channel)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("//:id", async (req, res) => {
  try {
    const channelData = await Channel.findByPk(req.params.id, {
    });
    res.status(200).json(channelData)
    console.log(channelData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new tag
  try {
    const createdChannelData = await Channel.create(req.body);
    res.status(200).json(createdChannelData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete one channel by its `id` value
  try {
    const deletedChannel = await Channel.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deletedChannel) {
      res.status(404).json({ message: "No Channel found with this id!" });
      return;
    }
    res.status(200).json(deletedChannel);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;

