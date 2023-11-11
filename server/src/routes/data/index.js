var express = require("express");
var path = require("path");
var bcrypt = require("bcrypt");

const {
    getProducts,
    getProductItem,
    signup,
    login
} = require("./controller");

require("dotenv").config();
var app = express();

app.get("/getProducts", getProducts);

app.get("/getproductitem", getProductItem);

app.post("/signup", signup);

app.post("/login", login)


module.exports = app;