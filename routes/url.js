const express = require("express");
const router = express.Router();

const {
  getUrlStats,
  redirectToUrl,
  createShortID,
} = require("../controllers/url");

router.post("/", createShortID);
router.get("/:shortId", redirectToUrl);
router.get("/stats/:shortId", getUrlStats);

module.exports = router;
