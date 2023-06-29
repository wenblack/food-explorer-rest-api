import express from 'express'
import errorMiddleware from './middlewares/error'
import routes from './api/routes'

const app = express()

app.use(express.json()).use(routes).use(errorMiddleware)

export default app
