const router = require("express").Router();
const { User, Channel } = require("../models");
const withAuth = require("../utils/auth")

// router.get('/', (req, res) => {
//   res.render('homepage')
// });
//We want to display all the channel's you have joined
router.get('/', async (req, res) => {
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
    const userData = await User.findAll();

    const posts = userData.map((user) => user.get({ plain: true }));
    
    res.render('chatroom', {
      posts,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.loggedIn) {
    res.redirect('/homepage');
    return;
  }

  res.render('login');
});

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