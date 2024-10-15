const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = () => {
mongoose.connect(process.env.URI)
.then(_=> console.log("Connected to MongoDB successfully :)"))
.catch((err)=> console.error(err));
}


module.exports = connectDB;
