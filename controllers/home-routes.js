const router = require("express").Router();
const { Channel, User } = require("../models");
const withAuth = require("../utils/auth")

router.get('/', async (req, res) => {
  try {
    // Get all channels and JOIN with user data
    const channelData = await Channel.findAll({
      include: [
        {
          model: User,
          attributes: ['username', 'password'],
        },
      ],
    });

    // Serialize data so the template can read it
    const channels = channelData.map((channel) => channel.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      channels, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/channel/:id', async (req, res) => {
  try {
    const channelData = await Channel.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username', 'password'],
        },
      ],
    });

    const channel = channelData.get({ plain: true });

    res.render('channel', {
      ...channel,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// Use withAuth middleware to prevent access to route
router.get('/chatroom', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Channel }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('chatroom', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/chatroom');
      return;
    }
  
    res.render('login');
  });

module.exports = router;