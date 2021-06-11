const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWTSECRET } = require('../config/keys.js')
const {validateRegisterInput, validateLoginInput} = require("../utils");


module.exports = {
    create: function (req, res) {
        const { errors, isValid } = validateRegisterInput(req.data);
        // Check validation
        if (!isValid) {
            return res.status(400).json(errors);
        }
        User.findOne({ email: req.body.email }).then(user => {
            if (user) {
                return res.status(400).json({ message: "Email already exists" });
            } else {
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    location: req.body.location
                });
                // Hash password before saving in database
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    });
                });
            }
        });
    },
    login: (req, res) => {
        console.log('req')
        const { email, password } = req.body
        const { errors, isValid } = validateLoginInput(email, password);
        if (!isValid) {
            return res.status(400).json({message: 'invalid password'});
        }
        User.findOne({ email }).then(user => {
            if (!user) {
                return res.status(404).json({ message: 'not found' });
            }
            bcrypt.compare(password, user.password).then(isMatch => {
                if (isMatch) {
                    const payload = {
                        id: user.id,
                        name: user.name
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
                                user: {email: user.email, id: user.id}
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