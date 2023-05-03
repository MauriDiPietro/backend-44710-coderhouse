import express from 'express';
import { __dirname } from './path.js';
import userRouter from './routes/user.router.js';
import viewsRouter from './routes/views.router.js';
import handlebars from 'express-handlebars'

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));
app.engine('handlebars', handlebars.engine()); 
app.set('views', __dirname + '/views');	
app.set('view engine', 'handlebars');	

app.use('/users', userRouter);
app.use('/', viewsRouter);

app.listen(8080, ()=>{
console.log('🚀 Server listening on port 8080');
});