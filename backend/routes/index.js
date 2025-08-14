const express = require("express");
const router = express.Router();

const productsRoutes = require("./products");
const categoriesRoutes = require("./categories");
const authRoutes = require("./Auth");
const couponsRoutes = require("./coupons");
const paymentRoutes = require("./Payment");

router.use("/products", productsRoutes);
router.use("/categories", categoriesRoutes);
router.use("/auth", authRoutes);
router.use("/coupons", couponsRoutes);
router.use("/payment", paymentRoutes);

module.exports = router;
