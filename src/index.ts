import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())
app.use(cors())

const server = app.listen(3001, () =>
  console.log(
    '🚀 Server ready at: http://localhost:3001',
  ),
)
