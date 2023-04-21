// const http = require('http');
// import http from 'http';
import { createServer } from 'http';
import { products } from './db.js';

const server = createServer((req, res)=>{
    // res.end('Mi primer servidor con http!!')
    console.log(req.url);
    // console.log(req);
    if(req.url === '/products'){
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(products));
    }
    if(req.url === '/home'){
        res.end('<h1>Bienvenido</h1>')
    }
});

server.listen(8080, ()=>{
    console.log('Server ok en puerto 8080');
})