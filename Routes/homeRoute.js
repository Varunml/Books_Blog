const express = require("express");
const router = express.Router();
const model = require("../Models/authorModels");
const homeController= require("../controllers/blog_index");

router.get("/", homeController.blog_index);
module.exports = router;
