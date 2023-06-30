import jwt from 'jsonwebtoken';
import UserManager from '../daos/mongodb/managers/user.manager.js';
const userManager = new UserManager();
import 'dotenv/config';

const SECRET_KEY_JWT = process.env.SECRET_KEY_JWT;

/**
 * Middleware que verifica si el token es válido a través del header 'Authorization'
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
export const checkAuth = async (req, res, next) => {
    try {
        const authHeader = req.get('Authorization');
        if(!authHeader) return res.status(401).json({ msg: 'Unauthorized' });
        const token = authHeader.split(' ')[1];
        const decode = jwt.verify(token, SECRET_KEY_JWT);
        const user = await userManager.getById(decode.userId);
        if(!user) return res.status(401).json({ msg: 'Unauthorized' });
        req.user = user;
        next();
    } catch (error) {
        console.log(error);
    }
}