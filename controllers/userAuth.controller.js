const userModel = require("../Models/userModels");

const blog_SignUp = async (req, res) => {
  // const user= const

  // const {}
  try {
    if (!req.body.Email || !req.body.Password) {
      return res.status(400).send("Please enter email and password");
    }
    if (!isEmail(req.body.Email)) {
      return res.status(400).send("Please enter Valid Email");
    }

    const userData = new userModel(req.body);
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
};
