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
        const result = await UserModel.updateMany({age},{$set:{email}});
        res.send(`updated ${result.modifiedCount} documents`)
   

} )


//DELETE
router.delete("/deleteUser", async (req,res)=>{
    const _id = req.body;
    console.log(_id);
    const result = await UserModel.deleteMany({age:{$lt:26}});
    console.log(result,"test")
    res.send(`deleted ${result.deletedCount} documents`);

})
module.exports = router;