import app from './app'
import cors from 'cors'
const PORT = process.env.PORT
let port = PORT === undefined ? 3000 : PORT

app.listen(PORT || 3000, () => console.log(`🚀 Server running on port ${port}`))
app.use(cors())
