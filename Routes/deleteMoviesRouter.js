const express = require("express");
// const { db } = require("../Models/Author");
const mongoose = require("mongoose");
const router = express.Router();
const bookModel = require("../Models/authorModels");
const blogController= require('../controllers/blog_index')

// db.books.find({ "author": "Paulo Coelho" }).pretty();

router.delete("/delete/movies/:ids", blogController.blog_delete )

module.exports = router;
