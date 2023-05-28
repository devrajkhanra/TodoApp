const { Token } = require('../models/Token');
const {verifyAccessToken, verifyRefreshToken, generateAccessToken} = require('../config/token')

const authenticate = async (req, res, next) => {
  // console.log(req.headers);
  const accessToken = req.headers.accesstoken;
  const refreshToken = req.headers.refreshtoken;

  try {
    // Verify the access token
    const decodedToken = verifyAccessToken(accessToken);
    req.user = decodedToken.user;
    next();
  } catch (error) {
    // If the access token is expired
    if (error.name === 'TokenExpiredError') {
      try {
        // Verify the refresh token
        const existingToken = await Token.findOne({ where: { refreshToken } });
        if (!existingToken) {
          return res.status(401).json({ error: 'Invalid refresh token' });
        }

        // Verify the user associated with the refresh token
        const decodedRefreshToken = verifyRefreshToken(refreshToken);
        const userId = decodedRefreshToken.user;

        // Generate a new access token
        const newAccessToken = generateAccessToken(userId);

        // Update the expiration time of the refresh token
        existingToken.refreshTokenExp = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
        await existingToken.save();

        // Attach the new access token to the request
        req.headers.accesstoken = newAccessToken;

        next();
      } catch (error) {
        return res.status(401).json({ error: 'Invalid refresh token' });
      }
    } else {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  }
};

module.exports = {authenticate};
