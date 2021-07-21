var express = require("express");
var router = express.Router();
var connection = require("../db");

/* GET home page. */
router.get("/", function (req, res, next) {
  connection.query(
    "SELECT * FROM books",
    function (err, rows) {
      if (err) {
        console.log(rows);
        req.flash("error", err);
        res.render("books", {
          page_title: "Book Store - Node.js",
          data: "",
        });
      } else {
        console.log(rows);
        res.render("books", {
          page_title: "Book Store - Node.js",
          data: rows,
        });
      }
    }
  );
});

module.exports = router;