const Book = require("../models/book.model.js");

exports.getBookList = (req, res) => {
    
    Book.getAll((err, data) => {
        if(err){
            res.status(500).send({
                message : 
                err.message || "Error ocurred while retrieving books."
            });
        }else{
            
            res.render("books/book_list", {
                page_title: "Book Store - Book List",
                data: data,
              });
        }
    });
    
};

exports.getBookDetail = (req, res) => {
    
    let bookId = req.params.bookId;
    Book.findById( bookId, (err, data) => {
        if(err){
            res.status(500).send({
                message :
                err.message || "Error occurred while getting detail."
            });
        }else{
            res.render("books/book_detail", {
                page_title: "Book Store - Book Detail",
                data: data,
            });
        }
    });

};