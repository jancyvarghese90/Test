const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    name:String,
    email:String,
    username:String,
    password:String
})
const userData=mongoose.model('users',userSchema)
module.exports=userData