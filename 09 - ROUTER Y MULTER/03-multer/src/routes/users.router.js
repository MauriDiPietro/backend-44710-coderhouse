import { Router } from "express";
const router = Router();

router.get('/', (req, res)=>{
    res.send('ruta 1')
});



router.get('/home', (req, res)=>{
    res.send('home')
});

export default router;