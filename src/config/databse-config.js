require("dotenv").config();
const mongoose = require("mongoose");

const dbconnect = () => {

 mongoose.connect(process.env.DATABASE_URL)
 .then((error)=>{console.log("database connected")})
 .catch((error)=>
    {   console.log("issue in db connection")
        console.error(error.message);
        process.exit(1);
    });
 
}

module.exports = dbconnect;