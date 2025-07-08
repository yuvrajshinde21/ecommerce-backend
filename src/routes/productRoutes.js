const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController")

router.route("/").get(productController.getAllProducts);
router.route("/:id").get(productController.getProductById);
router.route("/categories").get(productController.getcategories);


module.exports = router;