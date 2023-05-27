
const {verifyAccessToken} = require('../config/token')

const authenticate = async (req, res, next) => {
  try {
    const accessToken = req.headers.authorization.split(' ')[1];
    const decodedToken = verifyAccessToken(accessToken);
    req.user = decodedToken.user;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

module.exports = {authenticate};
