import Router from './class.customRouter.js';
import { register, login, profile } from '../controllers/user.controller.js';
import { checkAuth } from '../jwt/auth.js';

export default class UserCustomRouter extends Router {
    init(){
        this.get('/', (req, res)=>{
            res.success(200, 'todo ok');
        })

        this.post('/register', ['PUBLIC'], register);
        this.post('/login', ['PUBLIC'], login);
        // this.get('/profile', checkAuth, profile);
        this.get('/profile', ['USER'], profile);
        this.get('/admin', ['ADMIN'], (req, res)=>{res.success(200, 'ruta admin')})
    }
}