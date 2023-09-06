import express from 'express';
import { fork } from 'child_process';
import {dirname} from 'path'
import { fileURLToPath } from 'url'
export const __dirname = dirname(fileURLToPath(import.meta.url))

const scriptPath = __dirname+'/calc.js'

const app = express();
let visitas = 0;

app.get('/', (req, res) => {
  visitas += 1;
  res.json({
    mensage: 'Servidor No Bloqueante',
    visitas,
  });
});

app.get('/calculo', (req, res) => {
    const computo = fork(scriptPath)
    computo.send('start')
    computo.on('message', (sum) =>{
        res.json({
            resultado: sum
        })
    })
});

const puerto = 8081;

app.listen(puerto, () => {
  console.log(`Servidor No Bloqueante, puerto ${puerto} & PID: ${process.pid}`);
});