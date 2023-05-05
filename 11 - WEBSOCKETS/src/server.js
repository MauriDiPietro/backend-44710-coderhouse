import express from 'express';
import { __dirname } from './path.js';
import { Server } from 'socket.io';
import handlebars from 'express-handlebars';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname+'/views');

app.get('/', (req, res) => {
    res.render('websockets')
});

const httpServer = app.listen(8080, ()=>{
    console.log('🚀 Server listening on port 8080');
});

const socketServer = new Server(httpServer);

const arrayProducts = [];

socketServer.on('connection', (socket) =>{
    console.log('usuario conectado!', socket.id);
    socket.on('disconnect', ()=>{
        console.log('usuario desconectado!');
    });
    // socket.emit('saludoDesdeBack', 'Bienvenido a web socket!');
    // socket.on('respuestaDesdeFront', (message)=>{
    //     console.log(message);
    // });
    // socket.emit('arrayProducts', arrayProducts)   
    socketServer.emit('arrayProducts', arrayProducts);
    // socket.broadcast.emit('arrayProducts', arrayProducts)
    socket.on('newProduct', (obj) => {
        arrayProducts.push(obj);
        socketServer.emit('arrayProducts', arrayProducts);   //!ENVÍO A TODOS
        // socket.emit('arrayProducts', arrayProducts)       //!ENVÍO AL SOCKET EN PARTICULAR    
        // socket.broadcast.emit('arrayProducts', arrayProducts)    //!ENVÍO A TODOS MENOS AL QUE ENVÍA
    })
});