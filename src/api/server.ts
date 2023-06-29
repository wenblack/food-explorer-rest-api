import app from './app'
import cors from 'cors'
const PORT = process.env.PORT

app.listen(() => console.log(`🚀 Server running`))
app.use(cors())
