const jwt = require('jsonwebtoken');

const secretKey = process.env.SECRET_KEY;

// Generate an access token
const generateAccessToken = (userId) => {
  const payload = { userId };
  const options = { expiresIn: '15m' };
  return jwt.sign(payload, secretKey, options);
};

// Generate a refresh token
const generateRefreshToken = (userId) => {
  const payload = { userId };
  const options = { expiresIn: '7d' };
  return jwt.sign(payload, secretKey, options);
};

// Verify the access token
const verifyAccessToken = (token) => {
  return jwt.verify(token, secretKey);
};


module.exports = {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
};
