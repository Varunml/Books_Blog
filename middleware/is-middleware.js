const jwt = require("jsonwebtoken");
// const token= require('../')

const verifyToken = async((req, res) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader);

  if (!authHeader || !authHeader.startsWith("Bearer "))
    res.status(404).json({ message: "access token is missing" });

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET,
      (err, decoded) => {
        req.user = decoded.user;
      }
    );
  } catch (err) {
    req.status(403).json({ message: "Invalid token" });
  }
});

module.exports = { verifyToken };
