const router = require("express").Router();
const { Thread } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const thread = await Thread.findAll({
    });
    res.status(200).json(thread)
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
    res.status(200).json(threadData)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  const body = req.body
  console.log(body)
  // create a new tag
  try {
    const createdThread = await Thread.create({
      ...body
    }
    );
    res.status(200).json(createdThread);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete one user by its `id` value
  try {
    const deletedThread = await Thread.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deletedThread) {
      res.status(404).json({ message: "No Thread found with this id!" });
      return;
    }
    res.status(200).json(deletedThread);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
