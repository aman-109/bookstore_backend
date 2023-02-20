const mongoose = require("mongoose");

const prod = new mongoose.Schema(
  {
    name: { type: String },
    image: { type: String },
    price: { type: String },
  },
  { timestamps: true }
);

const Product = mongoose.model("product", prod);

module.exports = Product;
