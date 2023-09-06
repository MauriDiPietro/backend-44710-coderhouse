import express from 'express';
import { calculo } from './calc.js';

const app = express();

let visitas = 0;

app.get('/', (req, res) => {
  visitas += 1;
  res.json({
    mensage: 'Servidor Bloqueante',
    visitas,
  });
});

app.get('/calculo', (req, res) => {
  const resultado = calculo();
  res.json({
    resultado,
  });
});

const puerto = 8080;

app.listen(puerto, () => {
  console.log(`Servidor Bloqueante escuchando en el puerto ${puerto}`);
});