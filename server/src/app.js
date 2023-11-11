var createError = require("http-errors");
var express = require("express");
var path = require("path");
var bcrypt = require("bcrypt");
var apiRouter = require("./routes/index");

console.log('app')

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(express.static(path.join(__dirname, "../static")));

app.use("/api", apiRouter);

app.use(function (req, res, next) {
    next(createError(404));
});

app.use(function (err, req, res, next) {
    // if (process.env.ENV == "production") {
    // errors.report(err);
    // }
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
   
    // render the error page
    res.status(err.status || 500);
    res.render("error");
   });

console.log('-----------------------------------------------')
console.log('| Server is running on https://localhost:3000 |')
console.log('-----------------------------------------------')


module.exports = app;