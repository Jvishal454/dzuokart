var express = require("express");

const {
    getProducts,
    getProductItem
} = require("./controller");

require("dotenv").config();
var app = express();

app.get("/getProducts", getProducts);

app.get("/getproductitem", getProductItem);


module.exports = app;