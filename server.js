const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helper');
const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Top Secret',
    cookie: {
        maxAge: 900000,
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

const hnbs = exphbs.create({helpers});

app.engine('handlebars', hnbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views')

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}!`);
    sequelize.sync({ force: false});
});