const mongoose = require("mongoose");
const db = require("../db.js");
const { text } = require("body-parser");
const RatingsModel = require("../Models/ratingsModels.js");
const booksSchema = new mongoose.Schema({
  author: {
    type: String,
    required: [true, "Author is required"],
  },
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  Year: Number,

  ids: {
    type: Number,
    required: [true, "Please enter valid ID"],
    unique: true,
  },
  reviewids: [{ type: mongoose.Schema.Types.ObjectId, ref: "RatingsModel" }],
});

const bookModel = mongoose.model("Books", booksSchema);

module.exports = bookModel;
