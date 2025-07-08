const conn = require("../config/db");

exports.isUser = async (email)=>{
    const[result] = await conn.query("select * from users where email = ?",[email]);
    return result;
}

exports.registerUser =async (username,email,hashedPassword)=>{
    const result = conn.query("insert into users (username, email, password) values (?,?,?)",[username,email,hashedPassword]);
}