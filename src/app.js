import express, {json} from 'express'
import "express-async-errors";
import cors from 'cors'
import index from './routers/indexRouter.js'
import dotenv from 'dotenv'
import errorHandler from './middlewares/error-middlewares.js'

const app = express()

dotenv.config()
app.use(json())
app.use(cors())
app.use(index)
app.use(errorHandler)

const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log('Servidor rodando na porta:' + port)
})