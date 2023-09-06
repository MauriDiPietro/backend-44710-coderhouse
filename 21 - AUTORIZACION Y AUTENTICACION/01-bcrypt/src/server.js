import express from 'express'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import { __dirname } from './utils.js'
import usersRouter from './routes/users.router.js'
import './db/dbConfig.js'
import mongoStore from 'connect-mongo'
import handlebars from 'express-handlebars'
import viewsRouter from './routes/views.router.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.engine('handlebars',handlebars.engine())
app.set('views',__dirname+'/views')
app.set('view engine', 'handlebars')

app.use(
    session({
      secret: 'sessionKey',
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 10000
      },
      store: new mongoStore({
        mongoUrl: 'mongodb+srv://admin:admin@cluster0.vcjyxe3.mongodb.net/coderhouse?retryWrites=true&w=majority',
        // autoRemoveInterval: 1,
        //autoRemove: "interval",
        ttl: 10,
        // crypto: {
        //   secret: '1234',       //encripta los datos de la sesion
        // },
      }),
    })
  )

app.use('/users',usersRouter)
app.use('/views',viewsRouter)

const PORT = 8080
app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`)
})
