const express = require("express");
const router = express.Router();
const Coupon = require("../models/Coupon");

// create coupon
router.post("/", async (req, res) => {
  try {
    const { code, discount } = req.body;
    const existingCoupon = await Coupon.findOne({ code });
    if (existingCoupon) {
      return res.status(400).json({ message: "Code already exists" });
    }
    if (discount < 0 || discount > 100) {
      return res
        .status(400)
        .json({ message: "Discount must be between 0 and 100" });
    }
    const coupon = await Coupon.create({ code, discount });
    await coupon.save();
    res.status(201).json(coupon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get all coupons
router.get("/", async (req, res) => {
  try {
    const coupons = await Coupon.find();
    res.status(200).json(coupons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get a coupon by id
router.get("/:id", async (req, res) => {
  try {
    const coupon = await Coupon.findById(req.params.id);
    res.status(200).json(coupon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// update a coupon
router.put("/:id", async (req, res) => {
  try {
    const coupon = await Coupon.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(coupon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// delete a coupon
router.delete("/:id", async (req, res) => {
  try {
    await Coupon.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Coupon deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
