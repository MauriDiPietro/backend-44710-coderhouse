import { Router } from 'express'
import { register, login } from '../controllers/user.controller.js';
import { checkAuth } from '../jwt/auth.js';
/* ------------------------------------ - ----------------------------------- */
import passport from 'passport';

const router = Router()

router.post('/register', register);

router.post('/login', login);

router.get('/private', checkAuth, (req, res)=>{
  const { first_name, last_name, email, role } = req.user;
  res.json({
    status: 'success',
    userData: {
      first_name, 
      last_name, 
      email, 
      role
    }
  })
});

router.get('/private2', passport.authenticate('jwt'), (req, res)=> {
  res.send(req.user)
})

export default router;
