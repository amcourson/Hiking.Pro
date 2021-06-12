const { User, City } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWTSECRET } = require('../config/keys.js')
const {validateRegisterInput, validateLoginInput} = require("../utils");


module.exports = {
    create: function (req, res) {
        const { errors, isValid } = validateRegisterInput(req.body.email, req.body.password, req.body.password);
        // Check validation
        if (!isValid) {
            return res.status(400).json(errors);
        }
        User.findOne({ email: req.body.email }).then(user => {
            if (user) {
                return res.status(400).json({ message: "Email already exists" });
            } else {
                City.findOne({ id: req.body.cityId }).then(r => {
                    const newUser = new User({
                        email: req.body.email,
                        password: req.body.password,
                        location: r,
                        completedHikes: [],
                        points: 0
                    })

                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if (err) throw err;
                            newUser.password = hash;
                            newUser
                                .save()
                                .then(user => {
                                    const payload = {
                                        id: user._id,
                                        name: user.name
                                    }
                                    jwt.sign(
                                        payload,
                                        JWTSECRET,
                                        {
                                            expiresIn: '24h'
                                        },
                                        (err, token) => {
                                            res.status(200).json({
                                                token: token,
                                                user: {
                                                    _id: user._id,
                                                    email: user.email,
                                                    location: user.location,
                                                    points: user.points,
                                                    completetedHikes: []
                                                }
                                            });
                                        }
                                    );
                                }).catch(err => {
                                    console.log(err)
                                    res.status(400).json({err: err, message: 'TRY AGAIN'})
                                })
                        })
                    })
                })
            }
        })
    },
    login: (req, res) => {
        console.log('req')
        const { email, password } = req.body
        // const { errors, isValid } = validateLoginInput(email, password);
        // if (!isValid) {
        //     return res.status(400).json({message: 'invalid password'});
        // }
        User.findOne({ email }).then(user => {
            if (!user) {
                return res.status(404).json({ message: 'not found' });
            }
            bcrypt.compare(password, user.password).then(isMatch => {
                if (isMatch) {
                    const payload = {
                        id: user._id
                    };
                    jwt.sign(
                        payload,
                        JWTSECRET,
                        {
                            expiresIn: '24h'
                        },
                        (err, token) => {
                            res.status(200).json({
                                token: token,
                                user: {
                                    _id: user._id,
                                    email: user.email,
                                    location: user.location,
                                    points: user.points
                                }
                            });
                        }
                    );
                } else {
                    return res
                        .status(400)
                        .json({ passwordincorrect: "Email or Password incorrect" });
                }
            });
        });
    },
    getData: (req, res) => {
        
    },
    findById: function (req, res) {
        User.findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        User.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
};