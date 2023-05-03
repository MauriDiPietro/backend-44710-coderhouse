import { Router } from "express";
const router = Router();
import { __dirname } from "../path.js";
import UserManager from "../managers/user.manager.js";
const userManager = new UserManager(__dirname + '/db/users.json');

router.get('/', (req, res) => {
    res.render('form');
});

router.get('/home/:id', async(req, res) => {
    const { id } = req.params;
    const user = await userManager.getUserById(Number(id));
    res.render('home', user );
});

export default router;