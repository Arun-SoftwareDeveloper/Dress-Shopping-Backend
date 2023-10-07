const express = require("express");
const router = express.Router();
const ProductController = require("../Controllers/ProductController");
const app = express();
const cors = require("cors");
app.use(cors());

// Route to add an item to the cart
router.post("/add-to-cart", ProductController.addToCart);

// Route to get cart contents
router.get("/get-cart", ProductController.getCart);

// Route to remove an item from the cart
router.delete("/remove-from-cart/:productId", ProductController.removeFromCart);

module.exports = router;
