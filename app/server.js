let express = require('express')
let dotenv = require('dotenv').config()


let PORT = process.env['PORT'] || 3001


let app = express()
app.use(
    express.urlencoded({ extended: true }),
    express.json(),
    require('./routes')
)

app.listen(PORT, () => console.log(`LISTENING AT https://localhost:${PORT}`))