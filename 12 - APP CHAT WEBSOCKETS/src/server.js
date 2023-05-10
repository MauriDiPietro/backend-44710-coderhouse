import express from 'express';
import { __dirname } from './utils.js';
import handlebars from 'express-handlebars';
import { Server } from 'socket.io';
import viewsRouter from './routes/views.router.js';
import MessagesManager from './managers/messages.manager.js';
const messagesManager = new MessagesManager(__dirname+'/db/messages.json');
// import morgan from 'morgan';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname+'/views');

// app.use(morgan('dev'));
app.use('/chat', viewsRouter);

const httpServer = app.listen(8080, ()=>{
    console.log('🚀 Server listening on port 8080');
});

const socketServer = new Server(httpServer);

socketServer.on('connection', async(socket)=>{
    console.log('¡🟢 New connection!', socket.id);

    socketServer.emit('messages', await messagesManager.getAll());

    socket.on('disconnect', ()=>{
        console.log('¡🔴 User disconnect!');
    });

    socket.on('newUser', (user)=>{
        console.log(`${user} is logged in`);
    });

    socket.on('chat:message', async(msg)=>{
        await messagesManager.createMsg(msg);
        socketServer.emit('messages', await messagesManager.getAll());
    });

    socket.on('newUser', (user)=>{
        socket.broadcast.emit('newUser', user);
    });

    socket.on('chat:typing', (data)=>{
        socket.broadcast.emit('chat:typing', data);
    })
});