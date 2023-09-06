import { Router } from 'express'
import passport from 'passport';
import { registerResponse, loginResponse } from '../controllers/user.controller.js';

const router = Router()

router.post('/register', passport.authenticate('register'), registerResponse);

router.post('/login', passport.authenticate('login'), loginResponse);

export default router;
