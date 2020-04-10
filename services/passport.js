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

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true,
  }, (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id })
      .then((existingUser) => {
        if (!existingUser) {
          new User({
            googleId: profile.id,
            username: profile.displayName,
            email: profile.emails[0].value,
            img: profile.photos[0].value,
          })
            .save()
            .then((user) => done(null, user));
        } else {
          done(null, existingUser);
        }
      });
  }),
);
