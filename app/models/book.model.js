const sql = require("./db.js");
const Book = function(book){
    this.title = Book.title;
    this.description = Book.description;
    this.images = Book.images;
};

//mengambil senua data buku
Book.getAll = result => {
    sql.query("SELECT * FROM books", (err, res) => {
        if(err){
            console.log("error: ", err);
            result(null, err);
            return;
        }else{
            console.log("result: ", res);
            result(null, res);
        }
    })
}

module.exports = Book;