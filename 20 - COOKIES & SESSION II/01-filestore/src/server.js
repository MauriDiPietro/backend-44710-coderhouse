import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import mainRouter from './routes/user.routes.js';
import sessionFileStore from 'session-file-store';

const FileStore = sessionFileStore(session);

const fileStoreOptions = {
  store: new FileStore({
    path: './sessions',
    ttl: 1800,
    reapInterval: 60
  }),
  secret: '1234',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 18000
  }
}

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(session(fileStoreOptions));

app.use('/api', mainRouter);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Servidor express escuchando en el puerto ${PORT}`);
});

export default app;
