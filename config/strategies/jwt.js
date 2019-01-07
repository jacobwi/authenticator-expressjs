import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

import * as Config from '../';
import { UserModel } from '../../model/User';

const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = Config.jwtSecret;

export default function () { 
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        console.log(jwt_payload)
        UserModel.findById(jwt_payload._id).then(user => {
            if (user) {
                console.log("found it")
                return done(null, user)
            }

            return done(null, false)
        }).catch(err => {
            console.log(`Error Log: ${err}`)
        })
    }))
}; 