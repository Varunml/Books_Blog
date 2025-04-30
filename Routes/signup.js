const express = require("express");
const router = express.Router();
const signUpModel = require("../Models/userModels");
const signUpController = require("../controllers/userAuth.controller");

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.post("/signup", signUpController.blog_User);

module.exports = router;
