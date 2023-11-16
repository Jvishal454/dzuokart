var express = require("express");
var path = require("path");
var bcrypt = require("bcrypt");

const {
    getProducts,
    getProductItem,
    signup,
    login,
    userDetail,
    addUserAddress
} = require("./controller");

require("dotenv").config();
var app = express();

app.get("/getProducts", getProducts);

app.get("/getproductitem", getProductItem);

app.post("/signup", signup);

app.post("/login", login);

app.get("/user-detail", userDetail);

app.get("/add-user-address", addUserAddress);

module.exports = app;