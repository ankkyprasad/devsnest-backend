const Product = require("../models/product");

const addProduct = async (req, res) => {
  const { title, price, count, description, image } = req.body;

  try {
    const newProduct = new Product({
      title: title,
      price: price,
      count: count,
      description: description,
      image: image,
    });
    const savedProduct = await newProduct.save();
    res.status(201).send(savedProduct);
  } catch (err) {
    console.error(err);
  }
};

module.exports = addProduct;
