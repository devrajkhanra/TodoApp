
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Token = sequelize.define('Token', {
  accessToken: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  refreshToken: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  accessTokenExp: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  refreshTokenExp: {
    type: DataTypes.DATE,
    allowNull: false,
  }
});

module.exports = Token;
