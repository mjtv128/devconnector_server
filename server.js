const express = require('express')
const connectDB = require('./config/db')
const app = express()

//connect database
connectDB()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("API RUNNING")
})

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})