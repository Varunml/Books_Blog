//TL0PhIURoYGmvgMF; --password of my DB user
const model = require("./Models/authorModels");
const mongoose = require("mongoose");
require("dotenv").config();
// const uri=

async function dbConnect() {
  await mongoose
    .connect(process.env.uri, { dbName: "bookDB" })
    .then(console.log("DB successful"))
    .catch((err) => console.log(err));
}

module.exports = { dbConnect };
