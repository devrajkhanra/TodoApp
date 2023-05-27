const jwt = require('jsonwebtoken');
const { Token } = require('../../models/Token');
const {generateAccessToken, verifyRefreshToken} = require('../../config/token')

const renew = async (req, res) => {

  const { refreshToken } = req.body;

  try {
    // Verify the refresh token
    const existingToken = await Token.findOne({ where: { refreshToken } });
    if (!existingToken) {
      return res.status(401).json({ error: 'Invalid refresh token' });
    }

    // Verify the user associated with the refresh token
    const decodedToken = verifyRefreshToken(refreshToken);
    const userId = decodedToken.user;

    // Generate a new access token
    const accessToken = generateAccessToken(userId)

    res.json({ accessToken });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = renew;
