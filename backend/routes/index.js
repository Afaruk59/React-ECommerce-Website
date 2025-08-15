const express = require("express");
const router = express.Router();

const productsRoutes = require("./products");
const categoriesRoutes = require("./categories");
const authRoutes = require("./Auth");
const couponsRoutes = require("./coupons");
const paymentRoutes = require("./Payment");
const blogsRoutes = require("./blogs");

router.use("/products", productsRoutes);
router.use("/categories", categoriesRoutes);
router.use("/auth", authRoutes);
router.use("/coupons", couponsRoutes);
router.use("/payment", paymentRoutes);
router.use("/blogs", blogsRoutes);

module.exports = router;
