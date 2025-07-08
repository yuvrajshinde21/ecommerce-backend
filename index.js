require("dotenv").config();
const app = require("./src/app.js");

app.listen(process.env.PORT,(err)=>{
    if(err){
        console.log("Error: Server fail to Start...")
    }
    console.log("server started")
})