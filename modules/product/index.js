const Products = require("./model");
const { validateProduct } = require("./validators");

module.exports.createProduct = async (req, res) => {
  try {
    const { value, error } = validateProduct(req.body);

    if (error) {
      res.status(400).send("Incorrect data: " + error);
      return;
    }

    const createdProduct = await Products.create(value);
    res.send(createdProduct);
  } catch (error) {
    throw new Error(error);
  }
};
module.exports.getProducts = async (req, res) => {
  try {
    const products = await Products.find({});
    res.send(products);
  } catch (error) {
    throw new Error(error);
  }
};
module.exports.updateProduct = async (req, res) => {
  try {
    if (!req.params.id || req.params.id == ":id") {
      res.status(400).send("Incorrect data !");
      return;
    }
    const updatedProduct = await Products.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProduct) {
      res.send("Product is not found !");
      return;
    }
    res.send(updatedProduct);
  } catch (error) {
    throw new Error(error);
  }
};
module.exports.deleteProduct = async (req, res) => {
  try {
    if (!req.params.id || req.params.id == ":id") {
      res.status(400).send("Incorrect data !");
      return;
    }
    const deletedProduct = await Products.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      res.send("Product is not found !");
      return;
    }
    res.send(deletedProduct);
  } catch (error) {
    throw new Error(error);
  }
};
