const router = require("express").Router();
const { User, Channel, Message } = require("../../models");

// get all messages
//localhost:3040/api/user
router.get("/", async (req, res) => {
  // find all users --- I think I might need to add more code to the findAll {}
  try {
    const userData = await User.findAll({
      include: [{ model: Channel }, { model: Message }]
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one user
router.get("/:id", async (req, res) => {
  // find a single user by its `id`
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [{ model: Channel }, { model: Message }]
    });

    if (!userData) {
      res.status(404).json({ message: "No messages found for this user!" });
      return;
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//localhost:3040/api/user/signup
router.post('/signup', async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    //this sets up the new user information
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userID = userData.id;
      req.session.username = userData.username;
    });
    res.status(200).json(userData);
  } catch (err) {
    console.log(err)
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
router.post('/logout', async (req, res) => {
  try {
    console.log("logging out!")
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end()
      });
    } else {
      res.status(404).end()
    }
  } catch (err) {
    res.status(500).json(err)
  }
})
module.exports = router;