// Agar dapat menggunakan line dibawah, maka tambahkan type module pada package.json
import express from 'express'
import mongoose from 'mongoose'
// digunakan agar api dapat digunakan diluar domain
import cors from 'cors'
// memanggil router
import route from './routes/index.js'
const app = express()

mongoose.connect('mongodb://localhost:27017/restful', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Database connected...'))

// digunakan agar api dapat digunakan diluar domain
app.use(cors())
// menerima request post dalam bentuk json
app.use(express.json())
// gunakan router dengan di awali dengan /product
app.use('/product', route)

app.listen('3000', () => {
    console.log('Server running at port 3000')
})