const jwt = require("jsonwebtoken");

function setUser(user) {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
    },
    secret,
    { expiresIn: "1h" }
  );
}

function getUser(token) {
  if (!token) return null;

  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    console.error("JWT verification error:", error);
    return null;
  }
}

module.exports = {
  setUser,
  getUser,
};
