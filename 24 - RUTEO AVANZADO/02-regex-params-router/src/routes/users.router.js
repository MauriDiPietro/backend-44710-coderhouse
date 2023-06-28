import { Router } from "express";
const router = Router();

router.get('/', (req, res)=>{
    res.send('ruta users')
});

router.get('/email1/:email', (req, res)=>{
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    const { email } = req.params;
    if(email.match(emailRegex)){
        //await userDAo.getByEmail(email) ........
    res.send(`Email válido: ${email}`);
    } else
    res.send('Email inválido')
});

router.get('/email2/:email([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})', (req, res) => {
     //await userDAo.getByEmail(email) ........
     const { email } = req.params;
     res.send(`Email válido: ${email}`)
});

router.get('/name/:name([a-zA-Z]+)', (req, res) => {
    res.send('nombre valido')
});


router.get('/email3/:email3', (req, res) => {
    //await userDAo.getByEmail(email) ........
    const { email3 } = req.params;
    res.send(`Email válido: ${email3}`)
});

router.param('email3', (req, res, next, email3)=>{
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    const isValid = email3.match(emailRegex);
    if(isValid) next()
    else res.status(400).send('Email inválido desde middleware param')
});

router.get('*', (req, res) => {
    res.json({msg: 'Ruta inexistente'})
});

export default router;