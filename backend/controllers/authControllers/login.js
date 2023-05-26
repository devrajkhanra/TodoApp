const bcrypt = require('bcrypt');
const User = require('../../models/User');

const login = async (req, res) => {
    
    const { email, password } = req.body;
    
    try {
        
        // Check if the user already exists
        const existingUser = await User.findOne({ where: { email } });
        
        if (!existingUser) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Validate the password
        const validPassword = await bcrypt.compare(password, existingUser.password);
        if (!validPassword) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        return res.status(200).json({ message: 'User logged in successfully' });
    } 
    
    catch (error) {
        throw new Error(error);
    }
}

module.exports = {login}