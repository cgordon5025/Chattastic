const router = require('express').Router();
  
router.use("/users", require("./user-routes"));

module.exports = router;


// const apiRoutes = require('./api');
// const homeRoutes = require('./homeRoutes')


//need index in the PAI folder to get this to work
// router.use('/', homeRoutes)
// router.use('/api', apiRoutes);

// router.use((req, res) => {
//     res.send("<h1>Wrong Route!</h1>")
// });


// router.get('/', async (req, res) => {
//     res.render('homepage')
// })

// router.post('/', async (req, res) => {
//     const userData = await User.findAll()
//     const users = userData.map((user) => user.get({ plain: true })
//     )
//     res.render('homepage', {
//         users
//     })
// })
// module.exports = router;