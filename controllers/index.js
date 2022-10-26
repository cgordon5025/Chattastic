const User = require('../models/User');

const router = require('express').Router();

const userRoutes = require('./user-routes');
// const postRoutes = require('./post-routes');
// const apiRoutes = require('./api');

router.use('/user', userRoutes);
// router.use('/post', postRoutes);

//need index in the PAI folder to get this to work
// router.use('/', homeRoutes)
// router.use('/api', apiRoutes);

// router.use((req, res) => {
//     res.send("<h1>Wrong Route!</h1>")
// });


router.get('/', async (req, res) => {
    res.render('homepage')
})

// router.post('/', async (req, res) => {
//     const userData = await User.findAll()
//     const users = userData.map((user) => user.get({ plain: true })
//     )
//     res.render('homepage', {
//         users
//     })
// })
module.exports = router;