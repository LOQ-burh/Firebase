const express = require("express");
const router = express.Router();

const asyncHandler = require("../asyncHandler");

const searchBoyerMoore = require("../algorithm/boyerMoore");

router.post("/boyer-moore", asyncHandler(searchBoyerMoore));

module.exports = router
