const express = require("express");
let router = express.Router();

const userRoute = require("../controller/auth");
const productRoute = require("../controller/product");
//middleware
const { verifyToken } = require("../middlewares/middleware");

router
.get("/user",verifyToken, userRoute.getUser)
.post("/user/signup", userRoute.signupUser)
.post("/user/login", userRoute.loginUser)
.get("/products", productRoute.getAllProduct)
.get("/products/add-product/:id", productRoute.addProd)
.get("/cart", verifyToken, productRoute.cartProd)
.post("/add",productRoute.addService)

module.exports = router;


