const router = require("express").Router();
const { Message } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const message = await Message.findAll({
      include: [
        {
          model: Message,
          attributes: "text",
        },
      ],
    });
    res.status(200).json(message)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/Message/:id", async (req, res) => {
  try {
    const messageData = await Message.findByPk(req.params.id, {
      include: [
        {
          model: Message,
          attributes: ["text"],
        },
      ],
    });
    res.status(200).json(messageData)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//localhost:3040/message
router.post("/", async (req, res) => {
  // create a new message
  try {
    const createdMessage = await Message.create({
      text: req.body.text
    });
    res.status(200).json(createdMessage);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete one message by its `id` value
  try {
    const deleteMessage = await Message.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deleteMessage) {
      res.status(404).json({ message: "No Thread found with this id!" });
      return;
    }
    res.status(200).json(deleteMessage);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
