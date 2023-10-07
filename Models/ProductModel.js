const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: Number,
  img: String,
  product_brand: String,
  product_name: String,
  product_price: Number,
  quantity: Number,
});

module.exports = mongoose.model("Product", productSchema);
