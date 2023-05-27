const User  = require('../../models/User');

const updateUser = async (req, res) => {

  const { userId } = req.params; // Assuming you pass the user ID as a route parameter
  const { firstName, lastName, email, phone } = req.body;

  try {
    
    // Find the user by ID
    const user = await User.findByPk(userId);
    console.log(user);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update the user's name and email
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.phone = phone;
    await user.save();

    res.json({ message: 'User updated successfully' });
  
} catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {updateUser};
