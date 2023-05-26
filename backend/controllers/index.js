const {register} = require('./authControllers/register')
const {login} = require('./authControllers/login')

module.exports = {
    register, 
    login
}