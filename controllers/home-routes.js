const router = require("express").Router();
const { User, Channel, Message } = require("../models");
const withAuth = require("../utils/auth")

//We want to display all the channel's you have joined
router.get('/', withAuth, async (req, res) => {
  try {
    const channelData = await Channel.findAll()
    const channels = channelData.map((channel) =>
      channel.get({ plain: true }))
    res.render('homepage', {
      channels,
      loggedIn: req.session.loggedIn
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

// Use withAuth middleware to prevent access to route
router.get('/chatroom', async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.userID, {
      attributes: { exclude: ['password'] },
    });

    const posts = userData.map((user) => user.get({ plain: true }));
    
    res.render('chatroom', {
      ...user,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/chatroom/:id', async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const messageData = await Message.findAll({
      where: { channel_id: req.params.id },
      include: [{ model: User }]
    });

    const messages = messageData.map((message) => message.get({ plain: true }))

    res.render('chatroom', {
      messages,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/signup', async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/')
    return
  }
  res.render('signup')
})
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/annoucements', async (req, res) => {
  try {
    const messageData = await Message.findAll({
      include: [{ model: User }]
    });
    const messages = messageData.map((message) => message.get({ plain: true }))
    res.render('annoucements', {
      messages,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get('/newAnnoucement', async (req, res) => {
  res.render('newAnnoucement')
})

router.get('/addChannels', async (req, res) => {
  try {
    // Find the logged in user based on the session ID
  
    res.render('addChannels', {
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;