import express from 'express';
import { UserModel } from '../model/User';

const router = express.Router();

router.get('/test', (req, res) => {
    res.send("Test completed");
});

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

export default router;