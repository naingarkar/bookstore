const Book = require("../models/book.model.js");

exports.getBookList = (req, res) => {
    
    Book.getAll((err, data) => {
        if(err){
            res.status(500).send({
                message : 
                err.message || "Error ocurred while retrieving books."
            });
        }else{
            res.render("books", {
                page_title: "Book Store - Node.js",
                data: data,
              });
        }
    });
    
};