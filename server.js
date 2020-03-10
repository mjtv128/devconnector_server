const express = require('express')
const connectDB = require('./config/db')
const app = express()

//connect database
connectDB()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("API RUNNING")
})

//define routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use("/api/post", require("./routes/api/post"));

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})