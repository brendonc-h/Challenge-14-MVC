const Sequelize = require('sequelize');

require('dotenv').config();


//connection to the database
const sequelize = process.env.JAWSDB_URL
? new Sequelize(process.env.JAWSDB_URL)
: new Sequelize(process.env.JAWSDB_NAME, process.env.JAWSDB_USER,
process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;