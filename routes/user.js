import express from 'express';
import passport from 'passport';
const jwt = require('jsonwebtoken');

import * as Config from '../config';
import { UserModel } from '../model/User';

const router = express.Router();

// @route   GET user/test
// @desc    Test request
// @access  Public
router.get('/test', (req, res) => {
    res.send("Test completed");
});

// @route   POST user/register
// @desc    Registers a user
// @access  Public
router.post('/register', (req, res) => {
    let newUser = new UserModel({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    newUser.save().then(user => {       
        res.send(user);
    }).catch(error => {
        res.status(400).send(error);
    })

});

// @route   POST user/login
// @desc    Login request
// @access  Public
router.post('/login', (req, res, next) => {
    passport.authenticate('local', function(err, user, info) {
        if (err) { return next(err); }
        if (!user) { return res.status(404).send("User not found"); }
        jwt.sign(user.toJSON(), Config.jwtSecret, { expiresIn: Config.tokenExpiration }, (error, token) => {
            if (error) throw error

             res.json({
                 success: true,
                 token: 'Bearer ' + token
             });
        })


    })(req, res, next);
});


// @route   POST user/profile
// @desc    Private route that only logged in users can access
// @access  Private
router.get('/current', passport.authenticate('jwt', { session: false}), (req, res) => {
    res.status(200).json(req.user);
});

export default router;