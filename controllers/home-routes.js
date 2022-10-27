const router = require("express").Router();
const { User } = require("../models")

//Creates a New User//
router.post("/", async (req, res) => {
    try {
        const dbUserData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        req.session.save(() => {
            req.session.loggedIn = true;
            res.status(200).json(dbUserData)
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//Login function
router.post("/login", async (req, res) => {
    try{
        const dbUserData = await User.findOne({
            where: {
                email: req.body.email,
            },
        });

        if(!dbUserData) {
            res
                .status(400)
                .json({ message: "Invalid email or Password. Please try again"})
                return;
        }

        const validPass = await dbUserData.checkPass(req.body.password);

        if(!validPass) {
            res
                .status(400)
                .json({ message: "Invalid email or Password. Please try again"})
                return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;
            console.log(
                "Success!!",
                req.session.cookie
            );

            res
                .status(200)
                .json({ user:dbUserData, message: "Login Successful"})
        });
    } catch(err) {
        console.log(err)
        res.status(500).json(err);
    }
});

//Logout//
router.post("/logout", (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;