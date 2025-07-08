const conn = require("../config/db");

exports.addToCart = async (userId, productId, quantity) => {
    const [existing] = await conn.query(
        `select * from cart where user_id = ? and product_id = ?`,
        [userId, productId]
    );

    if (existing.length > 0) {
        return conn.query("update cart set quantity = quantity + ? where user_id = ? and product_id = ?", [quantity, userId, productId]);
    } else {
        return conn.query("insert into cart(user_id, product_id, quantity)values (?,?,?)", [ userId, productId, quantity]);
    }

}

exports.getCartItems = async (userId)=>{
    const[rows] = await conn.query("select c.id, c.quantity, p.name, p.price, p.image from cart c join products p on c.product_id = p.id where c.user_id = ?",[userId]);
    return rows;
}