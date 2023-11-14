var express = require("express");
var path = require("path");
var bcrypt = require("bcrypt");

const {
    getProducts,
    getProductItem,
    signup,
    login,
    userDetail
} = require("./controller");

require("dotenv").config();
var app = express();

app.get("/getProducts", getProducts);

app.get("/getproductitem", getProductItem);

app.post("/signup", signup);

app.post("/login", login)

app.get("/user-detail", userDetail)

module.exports = app;