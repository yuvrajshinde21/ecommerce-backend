const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

router.route("/").post(cartController.addToCart);
router.route("/:userId").post(cartController.getCartItems);

module.exports = router;
// POST /cart, 
// GET /cart/:userId