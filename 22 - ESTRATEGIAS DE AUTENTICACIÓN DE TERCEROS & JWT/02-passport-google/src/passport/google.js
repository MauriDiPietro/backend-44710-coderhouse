import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import passport from 'passport';
import UserDao from '../daos/user.dao.js';
const userDao = new UserDao();

//console.cloud.google.com
const strategyOptions = {
    clientID: '346643679398-eshq1f5f7egoop1ku65vdhnr08pvdrbk.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: '/users/oauth2/redirect/accounts.google.com',
    scope: [ 'profile', 'email' ],
    state: true
};

const registerOrLogin = async(accessToken, refreshToken, profile, done) =>{
    console.log('profile::', profile);
    const email = profile._json.email
    const user = await userDao.getByEmail(email);
    if(user) return done(null, user);  
    const newUser = await userDao.createUser({
        first_name: profile._json.given_name,
        last_name: profile._json.family_name,
        email,
        password: ' ',
        isGoogle: true
    });
    return done(null, newUser);
};

passport.use('google', new GoogleStrategy(strategyOptions, registerOrLogin));

