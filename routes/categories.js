const router = require("express").Router();
const Category = require("../models/Category");

//CREATE CATEGORY
router.post("/", async (req, res) => {
  const newCat = new Category(req.body);
  try {
    const savedCat = await newCat.save();
    res.status(200).json(savedCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL CATEGORIES
router.get("/", async (req, res) => {
  const catName = req.query.name;
  try {
    let categories;
    if (catName) {
      categories = Category.find({ catName });
    } else {
      categories = await Category.find();
    }
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
