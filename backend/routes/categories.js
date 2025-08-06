const express = require("express");
const router = express.Router();
const Category = require("../models/Category");

// create category
router.post("/", async (req, res) => {
  try {
    const { name, img } = req.body;
    const category = await Category.create({ name, img });
    await category.save();
    console.log(category);
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get all categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get a category by id
router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
