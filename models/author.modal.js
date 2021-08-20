const sql = require("./db.js");

const Author = function(book) {
    this.bid = book.bid;
    this.authorname = author.authorname;
};

Author.findAuthorById = (bookId, result) => {
    sql.query(`SELECT a.aid, a.a_name FROM authors a, books b WHERE bid = ${bookId} AND b.aid in (SELECT b.aid FROM books WHERE b.aid = a.aid);`, (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("Author detail : ", res[0]);
        result(null, res[0]);
    });
};

module.exports = Author;