const express=require('express')
const router=express.Router()
const userModel=require('../model/userModel')


router.use(express.json())


router.get('/get',async(req,res)=>{
    try {
        var data=await userModel.find();
        res.status(200).send(data);
    } catch (error) {
        console.log(error)
    }
})

router.post('/',async(req,res)=>{
    try {
        var data=req.body;
        await  userModel(data).save();
         // name:req.body.name,
         // email:req.body.email,
         // address:req.body.address,
         // phonenumber:req.body.phonenumber,
         // password:req.body.password,
         // role:"employee"
          
        res.status(200).send("data added to db");
     } catch (error) {
         console.log(error)
     }
 })


module.exports=router
