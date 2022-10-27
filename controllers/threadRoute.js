const router = require("express").Router();
const Thread = require("../models");

router.get("/", async (req, res) => {
  try {
    const thread = await Thread.findAll({
      include: [
        {
          model: Thread,
          attributes: "title",
        },
      ],
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/thread/:id", async (req, res) => {
  try {
    const threadData = await Thread.findByPk(req.params.id, {
      include: [
        {
          model: Thread,
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
