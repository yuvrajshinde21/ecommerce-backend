const productModel = require("../models/productModel");

// @route get: /products/
exports.getAllProducts= async (req,res)=>{
    try{
        const result = await productModel.getAllProducts();
        res.status(200).send(result);
    }catch(error){
        console.log(error);
        res.status(500).json({error : "Error: Unable to get products"})
    }
}

// @route get:  /products/:id
exports.getProductById = async (req, res)=>{
    const id = req.params.id.trim();
    try{
        const result = await productModel.getProductById(id);
        res.status(200).send(result[0]);
    }catch(error){
        console.log(error);
        res.status(500).json({error : "Error: Unable to get product."})
    }
}

// @route get: /product/categories
exports.getcategories = async (req, res)=>{
    const id = req.params.id.trim();
    try{
        const result = await productModel.getcategories();
        res.status(200).send(result);
    }catch(error){
        console.log(error);
        res.status(500).json({error : "Error: Unable to get categories."})
    }
}



