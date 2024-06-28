const { getUser } = require("../services/auth");

async function restrictToLoggedInUserOnly(req, res, next) {
  const token = req.cookies.token;

  if (!getUser(token)) {
    return res.redirect("/login");
  }
  const user = getUser(token);
  req.user = user;

  next();
}

async function checkAuth(req, res, next) {
  const token = req.cookies.token;
  const user = getUser(token);
  req.user = user;
  next();
}

module.exports = {
  restrictToLoggedInUserOnly,
  checkAuth,
};
