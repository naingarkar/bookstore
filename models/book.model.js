const sql = require("./db.js");

const Book = function(book) {
    this.idx = book.id;
    this.bookname = book.bookname;
};

Book.getAll = result => {
    sql.query("SELECT * FROM books;", (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("books : ", res);
        result(null, res);
    });
};

module.exports = Book;
