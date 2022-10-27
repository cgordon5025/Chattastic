const router = require("express").Router();
const { User, Post } = require("../models");

// get all users
router.get("/", async (req, res) => {
  // find all users
  try {
    const allUserData = await User.findAll({ include: Post });
    res.status(200).json(allUserData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one user
router.get("/:id", async (req, res) => {
  // find a single user by its `id`
  try {
    const userIdData = await User.findByPk(req.params.id, {
      // JOIN with Post
      include: [{model: Post}]
    });

    if (!userIdData) {
      res.status(404).json({ message: "No user found with this id!" });
      return;
    }
  } catch (err) {res.status(500).json(err);
 }
});


router.delete('/:id', async (req, res) => {
  // delete one user by its `id` value
  try {
      if (req.session.loggedIn) {
    const deletedUserData = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deletedUserData) {
      res.status(404).json({ message: 'No user found with this id!' });
      return;
    }
    res.status(200).json(deletedUserData);
  }} catch (err) {
    res.status(500).json(err);
}});

module.exports = router;