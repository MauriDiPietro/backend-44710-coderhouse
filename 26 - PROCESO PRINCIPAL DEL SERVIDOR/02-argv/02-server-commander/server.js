import express from 'express';
import { Command } from 'commander';

const app = express();

const command = new Command();
command
    .option('-p <port>', 'port server', 8080)
    .option('-m <mode>', 'mode server', 'development')
    
command.parse();

console.log('options:', command.opts());
console.log('args:', command.args);
console.log(command.args[0])

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = command.opts().p;

app.listen(PORT, ()=>{
console.log(`🚀 Server listening on port ${PORT}`);
console.log(`mode: ${command.opts().m}`);
});