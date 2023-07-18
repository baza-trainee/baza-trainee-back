const express = require("express");
const ctrlWrapper = require("../../middlewares/ctrlWrapper");
const getJarAmount = require("../../controller/getJarAmount");

const router = express.Router();

router.get("/", ctrlWrapper(getJarAmount));

module.exports = router;
