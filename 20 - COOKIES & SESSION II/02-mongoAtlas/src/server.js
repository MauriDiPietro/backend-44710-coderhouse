import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import mainRouter from './routes/user.routes.js';
import MongoStore from 'connect-mongo';
import './db/database.js';

const storeOptions = {
  store: new MongoStore({
    mongoUrl: 'mongodb+srv://admin:admin@cluster0.vcjyxe3.mongodb.net/coderhouse',
    crypto: {
      secret: '1234'
    },
    //autoRemoveInterval: 15,
    autoRemove: "interval",
    ttl: 15
  }),
  secret: '12345',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1500
  }
}

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(session(storeOptions));

app.use('/api', mainRouter);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Servidor express escuchando en el puerto ${PORT}`);
});

