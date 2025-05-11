const express = require("express");
const router = express.Router();
const userModel = require("../Models/userModels");
const bloguserController = require("../controllers/userAuth.controller");

router.get("/", (req, res) => {
  res.render("login");
});

router.post("/", bloguserController.blog_login);

module.exports = router;

// module
