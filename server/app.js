const express = require("express")
const mongoose = require("mongoose")
require('dotenv/config')
const app = express()
const postRoute = require('./post')
const port = process.env.PORT || 4000
app.use('/posts', postRoute)



app.get('/post',(req, res)=> {
  res.send('welcome to rest post directory')
})

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, ()=>{
  console.log('connected to db')
})

app.listen(port, () =>{
  console.log('server is up and running')
})