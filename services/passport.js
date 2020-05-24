/* eslint-disable no-new */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      done(null, user);
    });
});
// Hello world
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (!existingUser) {
        const user = await new User({
          googleId: profile.id,
          username: profile.displayName,
          email: profile.emails[0].value,
          img: profile.photos[0].value,
        }).save();
        return done(null, user);
      }
      done(null, existingUser);
    },
  ),
);
