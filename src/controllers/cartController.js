const cartModel = require("../models/cartModel");

exports.addToCart = async (req,res)=>{
    let{user_id,product_id,quantity } = req.body;
    
    try {
        await cartModel.addToCart(user_id,product_id, parseInt(quantity) || 1);
        res.status(201).json({message :"Item added to cart"})
    } catch (error) {
        console.log("Add to cart error",error);
        res.status(500).json({error : "Failed to add item into cart"})
    }
}

exports.getCartItems = async(req,res)=>{
    const userId = req.params.userId;
    try {
        const items = await cartModel.getCartItems(userId);
        res.status(200).json(items);
    } catch (error) {
       console.log("getCartItem err: ",error);
       res.status(500).json({error:"Fail to get cart items"}) 
    }
}
