const Token = require('../../models/Token')

const logout = async (req, res) => {

    try {
        const accessToken = req.body.accessToken;

        // Delete the refresh token from the database
        await Token.destroy({ where: { token: accessToken } });

        res.json({ message: 'Logout successful' });
    }

    catch (error) {
        throw new Error(error);
    }
}

module.exports = { logout }