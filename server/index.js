require('dotenv').config()
const express = require("express")
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express()
const port = 3000
require("./db/connect") // mongodb conection to database
const authRouser = require('./routes/auth/auth-routes')

app.use(cors({
    origin:'http://localhost:5173',
    methods: ['GEt','POST','DELETE','PUT'],
    allowedHeaders:[
        'Content-Type',
        'Authorization',
        'Cache-Control',
        'Expires',
        'Pragma'
    ],
    credentials:true
}))
app.use(cookieParser())
app.use(express.json())

app.use('/api/auth',authRouser)


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`index app runing on port ${port}!`))