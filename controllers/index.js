const router = require("express").Router();

// const userRoutes = require("./api/user-routes");

const homeRoutes = require('./home-routes');
const apiRoutes = require('./api')

router.use('/api', apiRoutes)
router.use('/', homeRoutes);
router.get('/', async (req, res) => {
    res.render('homepage')
})


module.exports = router;
