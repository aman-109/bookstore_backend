// User Model
const mongoose = require("mongoose");

const users = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  gender: { type: String, enum: ["female", "male"] },
  
  purchased_product: [
    { product_id: { type: mongoose.Schema.Types.ObjectId, ref: "product"} },
  ],
});

const User = mongoose.model("user", users);

module.exports = User;
