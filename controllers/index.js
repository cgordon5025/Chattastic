const router = require('express').Router();
// const apiRoutes = require('./api');
// const homeRoutes = require('./homeRoutes')


//need index in the PAI folder to get this to work
// router.use('/', homeRoutes)
// router.use('/api', apiRoutes);

// router.use((req, res) => {
//     res.send("<h1>Wrong Route!</h1>")
// });


router.get('/', async (req, res) => {
    res.render('homepage')
})

router.post('/', async (req, res) => {
    const post = "This is a post request"
    res.render('homepage', {
        posts
    })
})
module.exports = router;