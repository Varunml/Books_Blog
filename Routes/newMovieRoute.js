const express = require("express");
const router = express.Router();
const book = require("../index");
const bookModel = require("../Models/authorModels");
const newblogController = require("../controllers/blog_index");

// console.log(getBooks);

router.get("/", (req, res) => {
  res.render("newMovie");
});

router.post("/", newblogController.blog_add);

module.exports = router;
