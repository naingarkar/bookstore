var express = require('express');
var router = express.Router();
var db=require('../db');
// another routes also appear here
// this script to fetch data from MySQL databse table
router.get('/book-list', function(req, res, next) {
    var sql='SELECT * FROM books';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('book-list', { title: 'Book List', bookData: data});
  });
});
module.exports = router;