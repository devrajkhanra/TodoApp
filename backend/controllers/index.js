const {register} = require('./authControllers/register')
const {login} = require('./authControllers/login')
const {logout} = require('./authControllers/logout')
const {getUser} = require('./authControllers/getUser')
const {updateUser} = require('./authControllers/update')
module.exports = {
    register, 
    login,
    logout,
    getUser,
    updateUser
}