// const mongoose = require("mongoose")
// const User = mongoose.model("users")
// let passport = require('passport')
// let passportJWT = require('passport-jwt')
// let LocalStrategy = require('passport-local')
// let dotenv = require('dotenv').config()


// passport.use(new LocalStrategy(
//   { userNameField: 'email' },
//   (email, password, done) => {
//     if (email == user.email && password == user.password) {
//       return done(null, user)
//     } else {
//       return done(null, false, { message: 'Token not matched.' })
//     }
//   }
// ))

// passport.use(new passportJWT.JWTStrategy(
//   {
//     jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
//     secretOrKey: process.env['JWT_SECRET'] || 'test_secret'
//   }, 
//   async (jwt_payload, done) => {
//     User.findOne(jwt_payload).then()
//     if (user.id == jwt_payload.user.id) {
//       return done(null, user)
//     } else {
//       return done(null, false, { message: 'Token not matched.'})
//     }
//   }
// ))

// module.exports = passport