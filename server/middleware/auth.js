const jwt = require("jsonwebtoken");
const jwtSecret = config.jwtSecret;
module.exports = function (req, res, next) {
  // get token from header
  const token = req.header("x-auth-token");
  //* check if no token
  if (!token) {
    res.status(401).json({
      success: false,
      err: " authorization denied ",
    });
  }
  // verify token
  try {
    const decoded = jwt.verify(token, jwtSecret);
    // save token in the user in request
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      err: "invalid token , authorization denied",
    });
  }
};
