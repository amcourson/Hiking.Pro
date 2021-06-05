let dotenv = require('dotenv').config()

module.exports = {
    JWTSECRET: process.env['JWT_SECRET'] || 'testSecret'
}