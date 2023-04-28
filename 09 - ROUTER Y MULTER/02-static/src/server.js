import express from 'express';
import { __dirname } from './path.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));

app.listen(8080, ()=>{
    console.log('🚀 Server listening on port 8080');
});


