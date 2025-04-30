const userModel = require("../Models/userModels");
const bookModel = require("../Models/authorModels");
const { isEmail } = require("validator");
////Library/Mobile Documents/com~apple~CloudDocs/Learning/complete-javascript-course-master/02-Fundamentals-Part-2/Node JS/Express/Coding/Challenges/File Project/Books/controllers/blog_index.js

const blog_index = async (req, res) => {
  try {
    const allBooks = await bookModel.find({});
    res.render("home.ejs", { Books: allBooks });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Some issue with displaying all the data" });
  }
};

const blog_delete = async (req, res) => {
  const ids = parseInt(req.params.ids);

  if (isNaN(ids)) {
    return res.status(404).json({ message: "invalid format " });
  }
  // console.log(req.params.ids);

  try {
    const deleteValue = await bookModel.deleteOne({ ids: ids });

    if (deleteValue.deletedCount === 0) {
      return res.status(404).json({ message: "It is not found" });
    }

    res.status(200).json({ message: "It is deleted succesfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "sever error" });
  }
};

const blog_add = async (req, res) => {
  const saveUser = new bookModel(req.body);

  const savedUser = await saveUser.save();

  res.send("Details have been added successfully!");
};

module.exports = {
  blog_index,
  blog_delete,
  blog_add,
};
