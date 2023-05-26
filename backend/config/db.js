// config/db.js
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'todoapp',
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,

    {
        host: 'localhost',
        dialect: 'mysql',
    });

module.exports = sequelize;