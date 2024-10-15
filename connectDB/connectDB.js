const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = () => {mongoose.connect(process.env.URI)
.then(()=> console.log("sucesss"))
.catch((err)=> console.error(err));}
module.exports = connectDB;
