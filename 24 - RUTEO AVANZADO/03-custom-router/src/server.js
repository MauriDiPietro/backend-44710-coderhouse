import express from 'express'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import { __dirname } from './utils.js'
import './db/dbConfig.js'
import mongoStore from 'connect-mongo'
import { errorHandler } from './middlewares/errorHandler.js'
import UserCustomRouter from './routes/users.customRouter.js'
const userCustomRouter = new UserCustomRouter();

const app = express()
const sessionConfig = {
  secret: 'sessionKey',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 10000
  },
  store: new mongoStore({
    mongoUrl: 'mongodb+srv://admin:admin@cluster0.vcjyxe3.mongodb.net/coderhouse?retryWrites=true&w=majority',
    //autoRemove: "interval",
    ttl: 10,
    // crypto: {
    //   secret: '1234',       //encripta los datos de la sesion
    // },
  }),
}
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(session(sessionConfig));

app.use('/users', userCustomRouter.getRouter());
 
app.use(errorHandler);



const PORT = 8080
app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`)
})
