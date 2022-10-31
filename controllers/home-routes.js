const router = require("express").Router();
const { User, Channel, Message, Thread } = require("../models");
const withAuth = require("../utils/auth")

//We want to display all the channel's you have joined
router.get('/', withAuth, async (req, res) => {
  try {
    const channelData = await Channel.findAll()
    const channels = channelData.map((channel) =>
      channel.get({ plain: true }))
    const userID = req.session.userID
    res.render('homepage', {
      channels,
      userID,
      loggedIn: req.session.loggedIn
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

// Use withAuth middleware to prevent access to route
router.get('/chatroom', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.userID, {
      attributes: { exclude: ['password'] },
    });
    // console.log(userData);
    const users = userData.get({ plain: true });
    // console.log(users);
    res.render('chatroom', {
      users,
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

router.get('/channel/:id', async (req, res) => {
  console.log("going to threads")
  try {
    const threadData = await Thread.findAll({
      where: { channel_id: req.params.id },
      include: [{ model: Channel }, { model: User }]
    })
    const threads = threadData.map((thread) => thread.get({ plain: true }))
    const channelName = threads[0].channel.title;
    const channelID = threads[0].channel.id;
    const userID = req.session.userID
    console.log(channelName)
    // console.log(threadData)
    console.log(threads)
    res.render('allThreads', {
      threads,
      channelName,
      channelID,
      userID
    })

  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

router.get('/thread/:id', async (req, res) => {
  try {
    const messageData = await Message.findAll({
      where: { thread_id: req.params.id },
      include: [{ model: Channel }, { model: User }, { model: Thread }]
    })
    const messages = messageData.map((message) => message.get({ plain: true }))
    const channelName = messages[0].channel.title;
    const channelID = messages[0].channel.id
    const threadInfo = messages[0].thread.text_content
    const threadID = messages[0].thread.id
    const threadPosterData = await Thread.findByPk(threadID, {
      include: [{ model: User }]
    })
    const threadPosterRaw = threadPosterData.get({ plain: true })
    const threadPoster = threadPosterRaw.user.username
    const userID = req.session.userID
    console.log(userID)
    // console.log(threadID)
    // console.log(channelName)
    // console.log(threadData)
    // console.log(messages)
    res.render('singleThread', {
      messages,
      channelName,
      threadInfo,
      threadPoster,
      threadID,
      channelID,
      userID
    })

  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

module.exports = router;
