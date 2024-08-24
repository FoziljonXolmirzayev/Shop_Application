const express = require("express");
const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("../modules/product");
const productRoute = express.Router();

productRoute.post("/create", createProduct);
productRoute.get("/get", getProducts);
productRoute.put("/update/:id", updateProduct);
productRoute.delete("/delete/:id", deleteProduct);

module.exports = productRoute;
