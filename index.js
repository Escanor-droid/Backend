// console.log('Hello, World!');
require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login',(req,res) => {
    res.send('This is login page');
})

app.get('/chai' ,(req,res) => {
    res.send('<h1>Chai page</h1>');
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
