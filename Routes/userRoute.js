const express = require("express");
const router = express.Router();
const userModel = require("../Models/userModels");
const bloguserController = require("../controllers/blog_index");

router.get("/", (req, res) => {
  res.render("login");
});

router.post("/", bloguserController.blog_User);

module.exports = router;
