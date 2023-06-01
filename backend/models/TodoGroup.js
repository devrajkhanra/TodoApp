// models/TodoGroup.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const TodoGroup = sequelize.define('TodoGroup', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

TodoGroup.belongsTo(User, { foreignKey: 'userId' });

module.exports = TodoGroup;
