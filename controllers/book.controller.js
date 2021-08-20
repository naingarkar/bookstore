const Author = require("../models/author.modal.js");
const Book = require("../models/book.model.js");
const { all } = require("../routes/book.route.js");

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
    console.log(bookId);
    let allData = new Object();
    Book.findBookById( bookId, (err, data) => {
        allData = Object.assign(allData, data);
        if(err){
            res.status(500).send({
                message :
                err.message || "Error occurred while getting detail."
            });
        }else{
            Author.findAuthorById(bookId, (err, data) => {
                if(err){
                    res.status(500).send({
                        message :
                        err.message || "Error occured while getting author info."
                    });
                }else {
                    allData = Object.assign(allData, data)
                    console.log(allData)
                    res.render("books/book_detail", {
                        page_title: "Book Store - Book Detail",
                        data: allData,
                    });
                }
            })
        }
    });
};