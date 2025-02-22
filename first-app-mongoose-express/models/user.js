const mongoose = require('mongoose')
const Schema = mongoose.Schema


const userSchema = new Schema({
    name: String,
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:Number
})

module.exports = mongoose.model('User',userSchema)