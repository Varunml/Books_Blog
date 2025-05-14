const express = require("express");
const router = express.Router();
const allUserController = require("../controllers/userAuth.controller");

router.get("/", allUserController.blog_User);

module.exports = router;
