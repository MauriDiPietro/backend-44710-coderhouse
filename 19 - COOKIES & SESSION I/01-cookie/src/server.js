import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

const secret = '123456';

app.use(cookieParser(secret));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/set-cookie', (req, res) => {
    res.cookie('idioma', 'ingles').json({msg: 'ok'})
});

app.get('/get-cookie', (req, res) => {
    console.log(req.cookies);
    const { idioma } = req.cookies;
    idioma === 'ingles' ? res.send('Hello!') : res.send('Hola!')
    // console.log(req.signedCookies);
});

app.get('/set-signed-cookie', (req, res) => {
    res.cookie('name', 'Martin', {signed: true}).json({msg: 'ok'})
});

app.get('/', (req, res) => {
    res.json({
        cookies: req.cookies,
        signedCookies: req.signedCookies
    })
    // res.clearCookie('idioma')
    // res.send('ok')
});

app.listen(8080, ()=>{
console.log('🚀 Server listening on port 8080');
});