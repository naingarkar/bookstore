var express = require("express");
var router = express.Router();
var connection = require("../models/db");

const books = require("../controllers/book.controller.js");

/* GET home page. */
// router.get("/", function (req, res) {
//   connection.query(
//     "SELECT * FROM books",
//     function (err, rows) {
//       if (err) {
//         console.log(rows);
//         req.flash("error", err);
//         res.render("books", {
//           page_title: "Book Store - Node.js",
//           data: "",
//         });
//       } else {
//         console.log(rows);
//         res.render("books", {
//           page_title: "Book Store - Node.js",
//           data: rows,
//         });
//       }
//     }
//   );
// });

router.get("/booklist", books.getBookList);
router.get("/book/:bookId/detail", books.getBookDetail);

module.exports = router;