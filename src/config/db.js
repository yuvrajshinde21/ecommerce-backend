const mysql = require("mysql2");

const conn = mysql.createConnection({
    host: process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DB_NAME,
    port:process.env.DB_PORT
});

conn.connect((err)=>{
    if(err){
        console.log("db connection failed",err)
    }
    console.log("db ecommerce connected");
});

module.exports = conn.promise();

