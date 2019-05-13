const express = require('express')
const app = express()
const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({extended: true}))

app.post('/usuarios', (req, res)=>{
    console.log(req.body)
    res.send('<h1>parabens</h1>')
})

app.listen(3003)