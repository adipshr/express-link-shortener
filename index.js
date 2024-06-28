const express = require("express");
const connectDB = require("./connect");
const { URL } = require("./models/url.model.js");
const cookieParser = require("cookie-parser");
const {
  restrictToLoggedInUserOnly,
  checkAuth,
} = require("./middlewares/auth.js");

const urlRoute = require("./routes/url.js");
const staticRoute = require("./routes/staticRouter.js");
const userRoute = require("./routes/user.js");

const port = 3000;

const app = express();
connectDB(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use("/url", restrictToLoggedInUserOnly, urlRoute);
app.use("/", checkAuth, staticRoute);
app.use("/user", userRoute);

app.listen(port, () => console.log(`Server listening on port ${port}!`));
