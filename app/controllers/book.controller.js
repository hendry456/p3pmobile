const Book = require("../models/book.model");

//mengambil semua data buku
exports.findAll = (req, res) => {
    Book.getAll((err, data) => {
        if(err){
            res.status(500).send({
                message:
                err.message || "Terjadi Kesalahan"
            });
        }else{
            res.send(data)
        }
    });
};