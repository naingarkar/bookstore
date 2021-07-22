// var createError = require("http-errors");
var express = require("express");
var path = require("path");
var flash = require("express-flash");
var session = require("express-session");

var indexRouter = require("./routes/book.route");

var app = express();
port = 3000;

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use('/css', express.static(__dirname + 'public/css'))

app.use(
  session({
    secret: "123456cat",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  })
);

app.use(flash());

app.use("/", indexRouter);

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render(err);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
module.exports = app;