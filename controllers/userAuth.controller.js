const userModel = require("../Models/userModels");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const blog_SignUp = async (req, res) => {
  const { Password, Email } = req.body;
  console.log(req.body);

  try {
    if (!Email || !Password) {
      return res.status(400).send("Please enter email and password");
    }
    if (!validator.isEmail(Email)) {
      return res.status(400).send("Please enter Valid Email");
    }

    const allData = await userModel.find();
    console.log("This is all data", allData);

    const correctUserEmail = await userModel.findOne({ Email });
    if (correctUserEmail) {
      return res.status(409).send({ message: "Email id already exist" });
    }
    const salt_rounds = 1;
    const hashPassword = await bcrypt.hash(Password, salt_rounds);
    console.log(hashPassword);

    const userData = new userModel({ Email, Password: hashPassword });
    // console.log(userData.Email);
    const savedUser = await userData.save();
    res.status(200).send(`${Email} added successfully`);
  } catch (error) {
    if (error.code === 11000) {
      console.error(error);
      res.status(400).send({ message: "Email id already exists" });
    }
  }
};

const blog_login = async (req, res) => {
  const { Email, Password } = req.body;

  const user = await userModel.findOne({ Email: req.body.Email });

  if (!user) {
    return res.status(401).send({ message: "Please enter the correct email" });
  }
  const match = await bcrypt.compare(Password, user.Password);

  if ( user) {
    const accessToken = jwt.sign(
      {
        user: {
          userEmail: user.Email,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    );

    const refreshToken = jwt.sign(
      {
        user: {
          userEmail: Email,
        },
      },
      process.env.REFRESH_ACCESS_TOKEN,
      { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
    );
    res
      .status(200)
      .json({ Accesstoken: accessToken, refreshToken: refreshToken });
    // res.status(200).send({ message: "You have entered correct credentials" });
  } else {
    // res.status(401).send({ message: "Please enter the correct password" });

    throw new Error("Entered the wrong credentials");
  }
};

const blog_User = async (req, res) => {
  try {
    const allUsers = await userModel.find();
    // res.status(400).send({ message: "All the users are", allUsers });
    res.json(allUsers);
  } catch (error) {
    if (error) {
      res.status(401).send({ message: "Error giving all the users" });
    }
  }
};
module.exports = {
  blog_User,
  blog_SignUp,
  blog_login,
};
