const { URL } = require("../models/url.model");
const shortid = require("shortid");
async function createShortID(req, res) {
  const url = req.body.url;
  const shortId = shortid.generate(8);
  try {
    const result = await URL.create({
      shortId: shortId,
      redirectURL: url,
      stats: [],
      createdBy: req.user._id,
    });
    res.render("home", { id: shortId });
  } catch (error) {
    console.log(error);
  }
}

async function redirectToUrl(req, res) {
  const shortId = req.params.shortId;
  try {
    const result = await URL.findOneAndUpdate(
      { shortId },
      {
        $push: {
          stats: {
            visitHistory: `${new Date().toLocaleString()}} `,
          },
        },
      }
    );
    res.redirect(result.redirectURL);
  } catch (error) {
    console.log(error);
  }
}

async function getUrlStats(req, res) {
  const shortId = req.params.shortId;
  try {
    const result = await URL.findOne({ shortId });
    res
      .status(200)
      .json({ url: result.redirectURL, totalVisit: result.stats.length });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getUrlStats,
  redirectToUrl,
  createShortID,
};
