const mongoose = require("mongoose");

function connectDB(DBurl) {
  return mongoose.connect(DBurl);
}

module.exports = connectDB;
