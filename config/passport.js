import passport from 'passport';

import local from './strategies/local';

local();

export default function(app){
    app.use(passport.initialize());
    app.use(passport.session());

    // Saves the user in session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
      
    // Retreives user from session
    passport.deserializeUser(function(id, done) {
        User.findById(id, function (err, user) {
          done(err, user);
        });
    });

}