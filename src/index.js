const express = require('express');
const app = express();
const {serverconfig,dbconnection} = require("./config")
const TOdoroutes = require("./routes/todoroute");


app.use(express.json());
app.listen(serverconfig.PORT,()=>{
    console.log("server started");
})
dbconnection();


app.use("/Todo",TOdoroutes);

app.get("/",(req,res)=>{
    console.log("hi");
})
