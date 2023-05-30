const Token = require('../../models/Token')

const logout = async (req, res) => {
    
    try {
        const {refreshToken} = req.body;

        // Delete the refresh token from the database
        const destroyToken= await Token.destroy({ where: { refreshToken: refreshToken } });
        if(!destroyToken){
            return res.status(400).json({message:'Failed to logout'})
        }

        return res.status(200).json({ message: 'Logout successful' });
    }

    catch (error) {
        return res.status(500).json({ error });
    }
}

module.exports = { logout }