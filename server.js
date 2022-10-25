const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helper');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Top Secret',
    cookie: {
        maxAge: 999,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true, 
    store: new SequelizeStore ({
        db: sequelize
    })
};

app.use(session(sess));

const hnbs = exphbs.create({helper});

app.engine('handlebars', hnbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('/controllers/'));

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}!`);
    sequelize.sync({ force: false});
});