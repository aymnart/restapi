const express = require("express")
const router = express.Router();
const userModel = require("../models/User");
const UserModel = require("../models/User");

//POST 
router.post( "/addUser", async (req,res)=>{
    try
    {
    const {name,age,email} = req.body;
    const user = new userModel({
        name,age,email
    })
    const newUser= await user.save()
    res.send({msg:"user added",newUser})
    console.log({msg:"user added",newUser})
}
catch(err){
    console.error(err);
}
} )
//GET
router.get("/getAll", async(req,res)=>{
    try{
        const result =  await UserModel.find() ;
        res.send(result)
    }
    catch(err){
        console.error(err);
    }
})


//UPDATE
router.put( "/updateUser" ,async (req,res)=>{

        const {age, email} = req.body;
        console.log(email,"HELLO")
        const result = await UserModel.updateMany({age},{email});
console.log(result,"testttttttttttttttttttttttttt")
        

   

} )
module.exports = router;