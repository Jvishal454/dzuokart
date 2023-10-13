var express = require("express");

const {
    getProducts
} = require("./controller");

require("dotenv").config();
var app = express();

app.get("/getProducts", getProducts);


module.exports = app;