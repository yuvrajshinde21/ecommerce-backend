const conn = require("../config/db.js");

//getAllProducts
exports.getAllProducts = async () => {
    let [result] = await conn.query("select p.* ,c.c_name from products p left join categories c on p.category_id = c.id");
    return result;
}

//getProductById
exports.getProductById = async (id) => {
    let [result] = await conn.query("select p.* ,c.c_name from products p left join categories c on p.category_id = c.id where p.id = ?", [id]);
    return result;
}

//getcategories
exports.getcategories = async () => {
    let [result] = await conn.query("select * from categories");
    return result;
}