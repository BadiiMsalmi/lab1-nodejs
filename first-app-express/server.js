const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('welcome to my server')
})


app.listen(5000,()=>{
    console.log('listening on port',5000)
})