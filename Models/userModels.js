const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { isEmail } = require("validator");

const UserSchema = new mongoose.Schema({
  Email: {
    type: String,
    required: [true, "Please enter the Email"],
    unique: true,
    validate: [isEmail, "Please enter a valid email"],
    lowercase: true,
    // match: [
    //   /^[A-Za-z0-9._]+@[A-Za-z.0-9]+\.[A-Za-z]{2,4}$/,
    //   "Please enter Valid email",
    // ],
  },

  Password: {
    type: String,
    hide: true,
    required: [true, "Please enter a valid Password"],
    unique: true,
    min: [6, "Please enter minimum 6 password"],
  },

  Timestamp: {
    type: Date,
    default: Date.now,
  },
});

const userModel = mongoose.model("userModel", UserSchema);

module.exports = userModel;
