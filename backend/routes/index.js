const express = require("express");
const router = express.Router();

const productsRoutes = require("./products");
const categoriesRoutes = require("./categories");

router.use("/products", productsRoutes);
router.use("/categories", categoriesRoutes);

module.exports = router;
