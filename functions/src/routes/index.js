const express = require("express");
const router = express.Router();

const asyncHandler = require("../asyncHandler");

const { searchBoyerMoore, addPartternMatching } = require("../algorithm/boyerMoore");

router.post("/boyer-moore", asyncHandler(searchBoyerMoore));
router.post("/text-pattern", asyncHandler(addPartternMatching));

module.exports = router
