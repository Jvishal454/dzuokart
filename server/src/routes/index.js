var express = require("express");
var path = require("path");
var bcrypt = require("bcrypt");
var router = express.Router();

var data = require("./data");

router.use("/data", data);

module.exports = router;
