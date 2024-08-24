const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: { type: String, trim: true, required: true },
  description: { type: String, trim: true, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, default: 1 },
  discount: { type: Number },
  createdAt: { type: Date, default: Date.now },
  deletedAt: { type: Date },
});
const Products = model("Product", productSchema);
module.exports = Products;
