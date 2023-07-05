import express from 'express';
import 'dotenv/config';
import './database.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
console.log(`🚀 Server listening on port ${PORT}`);
});