const router = require("express").Router();
const Channel = require("../models/Channel");

router.get("/", async (req, res) => {
  try {
    const channel = await Channel.findAll({
      include: [
        {
          model: Channel,
          attributes: "title",
        },
      ],
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/channel/:id", async (req, res) => {
  try {
    const channelData = await Channel.findByPk(req.params.id, {
      include: [
        {
          model: Channel,
          attributes: ["id", "title"],
        },
      ],
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
