const bcrypt = require("bcrypt");
const User = require("../../models/User");
const Token = require("../../models/Token");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../../config/token");

const login = async (req, res) => {
  console.log(req);
  const { email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ where: { email } });

    if (!existingUser) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Validate the password
    const validPassword = await bcrypt.compare(password, existingUser.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate Tokens
    const accessToken = generateAccessToken(existingUser.id);
    const refreshToken = generateRefreshToken(existingUser.id);
    const accessTokenExp = new Date(Date.now() + 15 * 60 * 1000);
    const refreshTokenExp = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    // Store the refresh token in the database
    const storeToken = await Token.create({
      accessToken: accessToken,
      refreshToken: refreshToken,
      accessTokenExp: accessTokenExp,
      refreshTokenExp: refreshTokenExp,
    });

    if (!storeToken) {
      throw new Error("Store token failed");
    }

    return res.status(200).json({
      message: "User logged in successfully",
      user: {
        id: existingUser.id,
        firstName: existingUser.firstName,
        lastName: existingUser.lastName,
        email: existingUser.email,
        phone: existingUser.phone,
      },
      tokens: {
        accessToken: accessToken,
        refreshToken: refreshToken,
      },
    });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

module.exports = { login };
