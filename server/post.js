const express = require('express')

const router = express.Router()
const Post = require('./models/Post')
router.get('/',(req, res)=> { 
  res.send('welcome to rest')
})

router.post('/', (req, res) => {
console.log(body)
})
module.exports =  router