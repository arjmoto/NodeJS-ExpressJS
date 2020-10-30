// const db = require("../db");
const Product = require("../models/product.model");

module.exports.index = async (req, res, next) => {
  // const page = parseInt(req.query.page) || 1;
  // const perPage = 6;
  // const start = (page - 1) * perPage;
  // const end = page * perPage;
  // const drop = (page - 1) * perPage;
  // res.render("products/index", {
  //   // products: db.get('products').value().slice(start, end)
  //   products: db.get("products").drop(drop).take(perPage).value(),
  //   page: page,
  // });
  try {
    const products = await Product.find();
    // products.foo();
    res.render("products/index", {
      products,
    });
  } catch (error) {
    next(error);
  }
};
