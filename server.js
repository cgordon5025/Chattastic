//lets call down out libraries
const express = require('express');
//the most up to date version is 6.0.6
//the version in all classwork is 5.2.0
const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// const socketio = require('socket.io')
const path = require('path')
const { strict } = require('assert')
//locations of files
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers')

const app = express();
const PORT = process.env.PORT || 3040;

//
const sess = {
    secret: 'Super duper secret',
    cookie: {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    }),
}

app.use(session(sess))


//creating the handlebars environment, expect output to be handlebar
const hbs = exphbs.create({ helpers });
//engine is how we're delivering the data to a certain location
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
app.use(express.static(path.join(__dirname, 'public')));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`App Listening on port ${PORT}`)
    });
})