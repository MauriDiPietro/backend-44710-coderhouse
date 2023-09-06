import {Router} from 'express';
const router = Router();
import UserManager from '../managers/user.manager.js';
import { __dirname } from '../path.js';
const userManager = new UserManager(__dirname + '/db/users.json');

router.get('/', async(req, res) => {
    try {
        const users = await userManager.getUsers();
        res.json(users);
    } catch (error) {
        console.log(error);
    }
});

router.post('/', async(req, res) => {
    try {
        console.log(req.body);
        const { firstname, lastname, email } = req.body;
        const user = {
            firstname,
            lastname,
            email
        }
        const userCreated = await userManager.createUser(user);
        // res.json(userCreated);
        res.redirect(`/home/${userCreated.id}`)
    } catch (error) {
        console.log(error);
    }
});

export default router;