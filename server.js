const express = require("express");
require("dotenv").config();
const connectDB = require("./connectDB/connectDB")
const port = process.env.PORT;
const app = express();

connectDB()



app.listen(port, (err)=> err ? console.error(err): console.log(`SERVER IS RUNNING ON http://localhost/${port}`) );
