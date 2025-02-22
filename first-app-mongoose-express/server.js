const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()

const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI


mongoose.connect(MONGO_URI).then(()=>{
    console.log('connected to mongodb')
}).catch(err=>{
    console.log(err)
})

app.listen(PORT,()=>{
    console.log('listening on port',PORT)
})