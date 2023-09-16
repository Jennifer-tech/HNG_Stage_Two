const express = require('express');
const mongoose = require("mongoose");
const router = require('./routes/personRoutes')
const connectDb = require('./utils/connectUtil')

require('dotenv').config()
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api', router)

app.get('/api', (req, res) => {
    res.send('App is running')
})

mongoose.connect("mongodb+srv://Chioma:Omah0708@cluster0.ivj9ivr.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

const port = process.env.PORT || 3002
app.listen(port, async () => {
    console.log(`Server is running on port ${port}`)
    // await connectDb();
})