const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");
const { dbConnect } = require("./db");
const bookModel = require("./Models/authorModels");
const homeRouter = require("./Routes/homeRoute");
const errorRouter = require("./Routes/errorRoute");
const newMovieRouter = require("./Routes/newMovieRoute");
const deleteRouter = require("./Routes/deleteMoviesRouter");
const userRouter = require("./Routes/userRoute");
const signUpRouter = require("./Routes/signup");

dbConnect();
app.use(express.static("Public"));
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/home", homeRouter);
app.use("/User/login", userRouter);
app.use("/", signUpRouter);
app.use("/add/movies", newMovieRouter);
app.use("/", deleteRouter);
app.use("/", errorRouter);

app.listen(PORT, (err) => {
  if (err) {
    console.log("Issue with server");
  }

  console.log("Running successfully");
});
