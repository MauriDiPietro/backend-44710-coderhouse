import express from "express";
import cluster from 'cluster';
import { cpus } from 'os';

const numCPUs = cpus().length;

if ( cluster.isPrimary ) {
  console.log('num CPUs --> ', numCPUs);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code) => {
    console.log(`Proceso hijo pid: ${worker.process.pid} caído con código ${code} - ${Date()}`);
    cluster.fork();
  });

} else {
  const app = express();
  
  const PORT = 8080;
  
  app.get("/operacion-simple", (req, res) => {
    let sum = 0;
    for (let i = 0; i < 10000; i++) {
      sum += i;
    }
    res.json({ 
      sum,
      pid: process.pid,
      isWorker: cluster.isWorker
     });
  });
  
  app.get("/operacion-compleja", (req, res) => {
    let sum = 0;
    for (let i = 0; i < 5000000; i++) {
      sum += i;
    }
    res.json({ 
      sum,
      pid: process.pid,
      isWorker: cluster.isWorker
     });
  });

  app.get('/dead', (req, res) => {
    res.json({ msg: 'ok' });
    process.exit(0);
  });
  
  app.listen(PORT, () =>
    console.log(`Servidor express escuchando en el puerto ${PORT}, process: ${process.pid}`)
  );
}


