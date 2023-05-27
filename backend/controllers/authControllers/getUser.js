const User = require("../../models/User");

const getUser = async (req, res) => {
  const { userId } = req.params;

  try {
    // Find the user by ID
    const user = await User.findByPk(userId);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone
    })

  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {getUser}
