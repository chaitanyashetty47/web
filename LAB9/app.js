const express = require('express');
const mongoose = require('mongoose');
const app = express();
const url = 'mongodb://127.0.0.1/webtech'
mongoose.connect(url)
const con = mongoose.connection
con.on('open',() => {
  console.log('connected...')
})

app.use(express.json())
app.listen(9000, () => {
  console.log('Server Started')
})

const studentRouter = require('./routers/student')
app.use('/student', studentRouter)