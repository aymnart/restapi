const { default: mongoose} = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {type : String},
    age : Number,
    email : { type : String },
    joinDate : { type : Date , default : Date.now }
})


const UserModel = mongoose.model("user",userSchema);
module.exports = UserModel;