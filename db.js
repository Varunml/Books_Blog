//TL0PhIURoYGmvgMF; --password of my DB user
const model = require("./Models/authorModels");
const mongoose = require("mongoose");

let uri =
  "mongodb+srv://v:TL0PhIURoYGmvgMF@cluster0.acvqa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function dbConnect() {
  await mongoose
    .connect(uri, { dbName: "bookDB" })
    .then(console.log("DB successful"))
    .catch((err) => console.log(err));
}

module.exports = { dbConnect };
