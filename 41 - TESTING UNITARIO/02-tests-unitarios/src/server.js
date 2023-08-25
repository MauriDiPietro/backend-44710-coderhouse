import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import newsRouter from './routes/news.routes.js';
import { logger } from './logs/news.logs.js';
import { reqLog } from './middlewares/reqLog.js';
/* ------------------------------------ - ----------------------------------- */
/*
Para utilizar esta herramienta en nuestro servidor tenemos que instalar dos dependencias
npm i swagger-jsdoc --> que nos permite documentar en javascript
npm i swagger-ui-express --> que nos va a dar la posibilidad de tener esa interfaz de usuario
                            que nos va a mostrar los endpoints de la api con sus especificaciones.
*/
import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

import { info } from './docs/info.js';
/* ------------------------------------ - ----------------------------------- */

const app = express();

/* ------------------------------------ - ----------------------------------- */
const specs = swaggerJSDoc(info);

app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));
// swaggerUI.serve --> para que muestre la interfaz de la documentacion en esta ruta
// swaggerUI.setup --> va a cargar la configuracion inicial, las especificaciones
//! --> vamos a crear una carpeta docs, que va a tener su archivo info, donde va a estar la 
//! información central de la API --> docs/info.js
/* ------------------------------------ - ----------------------------------- */
//! vamos a comenzar con la estructura que vamos a enviar para realizar un registro,
//! --> docs/requests.yml
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(reqLog);

app.use('/news', newsRouter);

const PORT = 8080;

const server = app.listen(PORT, () =>
  logger.info(`🚀 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));

export default app;