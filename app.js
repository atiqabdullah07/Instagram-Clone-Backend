var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config();

const mongoose = require("mongoose");
var cors = require("cors");

//Step2 Write all the routers here
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var postRouter = require("./routes/post");
var userRouter = require("./routes/user");

var app = express();

// Make Connection with the database

const connection = mongoose.connect("");
console.log("Connecting..");

connection.then(
  (db) => {
    console.log("Connected Successfully");
  },
  (error) => {
    console.log("Error in connectivity");
    console.log(error);
  }
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// Step 3  Using Routes
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/v1", postRouter);
app.use("/api/v1", userRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
