const express = require('express');
const mongoose = require("mongoose");
const router = require('./routes/personRoutes')

require('dotenv').config()
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api', router)

app.get('/api', (req, res) => {
    res.send('App is running')
})
mongoose.connect(process.env.MONGODB_URI_offline, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

const port = process.env.PORT || 3002
app.listen(port, async () => {
    console.log(`Server is running on port ${port}`)
})