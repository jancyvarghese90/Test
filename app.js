const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config();
const userRoutes=require('./routes/userRoutes')
const cors=require('cors')
const app=express()
app.use(express.json())
app.use(cors());
app.use('/user',userRoutes)



mongoose.connect(process.env.mongodb_url).then(()=>{
console.log("connection established")
})
.catch((err)=>{
    console.log(err)
})
app.listen(()=>{
    console.log(`server running in port ${process.env.port}`)
})