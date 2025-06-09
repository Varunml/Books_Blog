const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  Email: {
    type: String,
    required: [true, "Please enter the Email"],
    unique: true,
    validate: [isEmail, "Please enter a valid email"],
    lowercase: true,
  },

  Password: {
    type: String,
    // hide: true,
    required: [true, "Please enter a valid Password"],
    // unique: true,
    minlength: [6, "Please enter minimum 6 password"],
  },
  role: {
    type: String,
    enum: ["admin", "user"],
  },

  Timestamp: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre("save", async function (next) {
  // if(!UserSchema.Password.is)

  if (!this.isModified(this.Password)) return next();
  this.Password = await bcrypt.hash(this.Password, 10);
  next();

  bcrypt.compare(this.Password, bcrypt.hash);

  // var user = this;
  console.log(`To test if it works`);
  next();
});

UserSchema.methods.passwordCheck = async function (password) {
  const match = await bcrypt.compare(password, this.Password);
  return;
};

const userModel = mongoose.model("userModel", UserSchema);

(module.exports = userModel), UserSchema;
