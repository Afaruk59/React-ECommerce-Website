const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: [
    {
      type: String,
      required: true,
    },
  ],
  reviews: [ReviewSchema],
  description: {
    type: String,
    required: true,
  },
  price: {
    current: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
    },
  },
  color: [
    {
      type: String,
      required: true,
    },
  ],
  size: [
    {
      type: String,
    },
  ],
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
