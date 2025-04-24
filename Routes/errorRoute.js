const express = require("express");
// const router = express.Router();
const router = require("./homeRoute.js");

// console.log(require("./Routes/home.js"));

router.use((req, res) => {
  res.status(404).send("Error in page");
});

module.exports = router;
