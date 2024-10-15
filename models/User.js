const { default: mongoose} = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {type : String, required : true},
    age : Number,
    email : { type : String , required : true, unique : true },
    joinDate : { type : Date , default : Date.now }
})


const user = mongoose.model("user",userSchema);
module.exports = user;