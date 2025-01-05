const logger = require("firebase-functions/logger");
const BoyerMooreService = require("./services/bm.service");

const searchBoyerMoore = async (req, res) => {
  try {
    const checkText = await BoyerMooreService.search(req.body);
    logger.info("Success implement!", {structuredData: true});
    res.status(200).json({ 
      status: "success",
      metadata: checkText 
    });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error.message });
  }
};

module.exports = searchBoyerMoore
