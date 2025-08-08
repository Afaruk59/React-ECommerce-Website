const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  discount: {
    type: Number,
  },
});

const Coupon = mongoose.model("Coupon", couponSchema);

module.exports = Coupon;
