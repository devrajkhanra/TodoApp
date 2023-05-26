
const Token = require('../models/Token');
const {verifyAccessToken} = require('../config/token')

const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.slice(7); // Remove 'Bearer ' from the token string

      // Verify the access token
      const decoded = verifyAccessToken(token);

      // Check if the token exists in the Token model
      const existingToken = await Token.findOne({ where: { token } });
      if (!existingToken) {
        throw new Error('Invalid token');
      }

      req.user = decoded;
      next();
    } else {
      throw new Error('Access token not found');
    }
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

module.exports = {authenticate};
