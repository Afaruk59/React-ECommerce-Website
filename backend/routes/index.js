const express = require("express");
const router = express.Router();

const productsRoutes = require("./products");
const categoriesRoutes = require("./categories");
const authRoutes = require("./Auth");
const couponsRoutes = require("./coupons");

router.use("/products", productsRoutes);
router.use("/categories", categoriesRoutes);
router.use("/auth", authRoutes);
router.use("/coupons", couponsRoutes);

module.exports = router;
