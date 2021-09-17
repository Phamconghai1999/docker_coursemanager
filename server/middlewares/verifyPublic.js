const verifyPublic = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) console.log("public user request");
  next();
  try {
    console.log("user with token: " + token);
    next();
  } catch (error) {
    console.log(error);
    return res.status(403).json({ success: false, message: "Server Error" });
  }
};
module.exports = verifyPublic;
