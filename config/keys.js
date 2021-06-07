let dotenv = require('dotenv').config()

module.exports = {
    JWTSECRET: process.env['JWT_SECRET'] || 'testSecret',
    mongoURI: "mongodb+srv://hikepro:XL1AFPcoUseM0GzR@cluster0.jjevb.mongodb.net/hikingpro?retryWrites=true&w=majority"
}