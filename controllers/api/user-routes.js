const router = require("express").Router();
const { User, Post } = require("../../models");

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
      include: [{ model: Post }]
    });

    if (!userIdData) {
      res.status(404).json({ message: "No user found with this id!" });
      return;
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//this needs to be post since we don't want to remove the individual from the  database, just end their session
router.post('/logout', async (req, res) => {
  try {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end()
      });
    };
    if (!deletedUserData) {
      res.status(404).json({ message: 'No user found with this id!' });
      return;
    }
    res.status(200).json(deletedUserData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });
    if (!userData) {
      res.status(404).json({ message: "Login failed please try again!" });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(404).json({ message: "Incorrect password, please try again" });
      return;
    }
    req.session.save(() => {
      req.session.userID = userData.id;
      req.session.username = userData.username;
      req.session.loggedIn = true;
      res.status(200).json({ message: "you are now logged in! YAY" })
    });
    console.log(req.session.userID)

  } catch (err) {
    res.status(500).json(err)
  }
})

router.post('/signup', async (req, res) => {

    const createdUserData = await User.create(req.body);

    // this sets up the new user information
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userID = userData.id;
      req.session.username = userData.username;
      res.status(200).json(userData)
    });
    res.status(200).json(createdUserData);
});

module.exports = router;