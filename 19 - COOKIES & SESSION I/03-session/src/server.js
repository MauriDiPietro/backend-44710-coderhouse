import express from 'express';
import session from 'express-session';
import {isAdmin} from './middlewares/isAdmin.js';
import {validateLogin} from './middlewares/validateLogin.js';

const app = express();

const sessionConfig = {
    secret: '123456',
    cookie: { maxAge: 60000 },
    saveUninitialized: true,
    resave: false
}

app.use(session(sessionConfig));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const users = [
    {
        username: 'juan',
        password: 123456,
        admin: true
    },
    {
        username: 'jose',
        password: 123456,
        admin: false
    }
];

app.post('/login', (req, res)=>{
    const { username, password } = req.body;
    const index = users.findIndex((user) => user.username === username && user.password === password);
    console.log(index);
    if(index < 0){
        res.status(401).json({ msg: 'No estas autorizado' })
    } else {
        const user = users[index];
        req.session.info = {
            loggedIn: true,
            count: 1,
            admin: user.admin
        }
        res.json({ msg: '¡Bienvenido!' })
    }
    console.log(req.session)
});

app.get('/secret-endpoint', validateLogin, (req, res) => {
    req.session.info.count++;
    res.json({
        msg: 'info secreta',
        count: req.session.info.count,
        session: req.session
    })
});

app.get('/admin-endpoint', validateLogin, isAdmin, (req, res) => {
    req.session.info.count++;
    res.json({
        msg: 'acá acceden solo los users ADMIN',
        count: req.session.info.count,
        session: req.session
    })
});

app.get('/', (req, res) => {
    const { name } = req.query;
    if(name){
        req.session.name = name;
    }
    const msj = req.session.name ? `Bienvenido ${req.session.name}!` : 'Bienvenido';
    res.json(msj)
});

app.post('/logout', (req, res)=>{
    req.session.destroy();
    res.json({ msg: 'session destruida' })
})

app.listen(8080, ()=>{
console.log('🚀 Server listening on port 8080');
});