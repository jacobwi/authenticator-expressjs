import express from 'express';
import passport from 'passport';

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

        res.status(200).send(`User ${user.username} has signed in successfully`);
    })(req, res, next);
});

export default router;