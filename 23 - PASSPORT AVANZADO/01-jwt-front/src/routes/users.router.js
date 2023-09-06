import { Router } from 'express'
import { register, login, loginFront, privateRoute } from '../controllers/user.controller.js';
import { checkAuth } from '../jwt/auth.js';

const router = Router()

router.post('/register', register);

router.get('/private', checkAuth, privateRoute);

router.post('/loginfront', loginFront);

export default router;
