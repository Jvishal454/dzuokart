var express = require("express");
var router = express.Router();

var data = require("./data");

router.use("/data", data);

module.exports = router;
