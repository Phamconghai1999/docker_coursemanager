const express = require("express");
const router = express.Router();
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

// @route POST api/auth/register
// @desc Register users
// @access public
router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  //simple validation
  if (!username || !password) {
    return res
      .status(200)
      .json({ success: false, message: "Missing username / password" });
  }
  try {
    //Existing user
    const user = await User.findOne({ username });
    if (user)
      return res
        .status(200)
        .json({ success: false, message: "Username invailid !!" });
    //All good
    hashedPassword = await argon2.hash(password);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    // user token return
    const accessToken = jwt.sign(
      { userId: newUser._id },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.json({
      success: true,
      message: "Created successfully!",
      username,
      accessToken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "SERVER ERROR" });
  }
});
// @route POST api/auth/login
// @desc Login users
// @access public

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(200)
      .json({ success: false, message: "Missing username / password" });
  }
  try {
    //Check user in db
    const userData = await User.findOne({ username });
    if (!userData) {
      return res
        .status(200)
        .json({ success: false, message: "Incorect username / password" });
    }
    //username
    const passwordValid = await argon2.verify(userData.password, password);
    if (!passwordValid) {
      return res
        .status(200)
        .json({ success: false, message: "Incorect username/ password" });
    }
    //All good
    // user token return
    const accessToken = jwt.sign(
      { userId: userData._id },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.json({
      success: true,
      message: "Login successfully!",
      username,
      accessToken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "SERVER ERROR" });
  }
});

module.exports = router;
