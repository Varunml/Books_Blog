const userModel = require("../Models/userModels");
const bcrypt = require("bcrypt");
const validator = require("validator");

const blog_SignUp = async (req, res) => {
  const { Password, Email } = req.body;

  try {
    if (!Email || !Password) {
      return res.status(400).send("Please enter email and password");
    }
    if (!validator.isEmail(Email)) {
      return res.status(400).send("Please enter Valid Email");
    }

    const salt_rounds = 1;
    const hashPassword = await bcrypt.hash(Password, salt_rounds);

    const userData = new userModel({ Email, Password: hashPassword });
    // console.log(userData.Email);
    const savedUser = await userData.save();
    res.status(200).send(`User added successfully`);
  } catch (error) {
    if (error.code === 11000) {
      console.error(error);
      res.status(400).send({ message: "Email id already exists" });
    }
  }
};

const blog_User = async (req, res) => {
  try {
  } catch {}
};

const blog_login = async (req, res) => {
  const { Email, Password } = req.body;
};
module.exports = {
  blog_User,
  blog_SignUp,
  blog_login,
};
