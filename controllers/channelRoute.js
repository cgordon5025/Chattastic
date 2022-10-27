const router = require("express").Router();
const Channel = require("../models");

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

router.post("/", async (req, res) => {
  // create a new tag
  try {
    const createdUserData = await User.create(req.body);
    res.status(200).json(createdUserData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete one user by its `id` value
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
