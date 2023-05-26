const {register} = require('./authControllers/register')
const {login} = require('./authControllers/login')
const {logout} = require('./authControllers/logout')

module.exports = {
    register, 
    login,
    logout
}