const bcrypt = require('bcrypt');
const User = require('../../models/User');

async function register(req, res) {
    const { firstName, lastName, email, password } = req.body;
    try {
        
        // Check if the user already exists
        const existingUser = await User.findOne({ where: { email } });
        
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the user
        const user = await User.create({
            firstName,
            lastName,
            email,
            phone,
            password: hashedPassword,
        });

        return res.status(201).json({ message: 'User registered successfully' });
    } 
    
    catch (error) {
        
        throw new Error('Internal server error');
    }
}

module.exports = {register}