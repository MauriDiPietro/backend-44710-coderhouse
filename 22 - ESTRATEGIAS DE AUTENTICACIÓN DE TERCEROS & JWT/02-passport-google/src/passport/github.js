import { Strategy as GithubStrategy } from 'passport-github2';
import passport from 'passport';
import UserDao from '../daos/user.dao.js';
const userDao = new UserDao();

const strategyOptions = {
    clientID: 'Iv1.77a8c28d24f7855d',
    clientSecret: 'fa1a31b0fe0e7e7931bf1562bc2bf55219633d68',
    callbackURL: 'http://localhost:8080/users/profile-github' 
}

const registerOrLogin = async(accessToken, refreshToken, profile, done) =>{
    console.log('profile::', profile);
    const email = profile._json.email !== null ? profile._json.email : profile._json.blog
    const user = await userDao.getByEmail(email);
    if(user) return done(null, user);  
    const newUser = await userDao.createUser({
        first_name: profile._json.name.split(' ')[0],
        last_name: profile._json.name.split(' ')[1] || ' ',
        email: profile._json.email !== null ? profile._json.email : profile._json.blog,
        password: ' ',
        isGithub: true
    });
    return done(null, newUser);
};

passport.use('github', new GithubStrategy(strategyOptions, registerOrLogin));