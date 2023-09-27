const sql = require("./db.js");

// constructor
const Book = function(book) {
  this.title = book.title;
  this.description = book.description;
  this.published = book.published;
};

//creating book
Book.create = (newBook, result) => {
    sql.query("INSERT INTO book SET ?", newBook, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created book: ", { id: res.insertId, ...newBook });
      result(null, { id: res.insertId, ...newBook });
    });
  };
//finding book by id
Book.findById = (id, result) => {
    sql.query(`SELECT * FROM book WHERE id = ${id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found book: ", res[0]);
        result(null, res[0]);
        return;
      }
      // not found Book with the id
    result({ kind: "not_found" }, null);
    });
};

//get all books
Book.getAll = (title, result) => {
    let query = "SELECT * FROM book";
  
    if (title) {
      query += ` WHERE title LIKE '%${title}%'`;
    }
  
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("book: ", res);
      result(null, res);
    });
  };
  
  //get all the published book
  Book.getAllPublished = result => {
    sql.query("SELECT * FROM book WHERE published=true", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("book: ", res);
      result(null, res);
    });
  };

//update the existing book
Book.updateById = (id, book, result) => {
    sql.query(
      "UPDATE book SET title = ?, description = ?, published = ? WHERE id = ?",
      [book.title, book.description, book.published, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found book with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated book: ", { id: id, ...book });
        result(null, { id: id, ...book });
      }
    );
  };

  //Remove book of the given id
  Book.remove = (id, result) => {
    sql.query("DELETE FROM book WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found book with the id
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted book with id: ", id);
      result(null, res);
    });
  };

  //Remove all the books
  Book.removeAll = result => {
    sql.query("DELETE FROM book", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log(`deleted ${res.affectedRows} book`);
      result(null, res);
    });
  };
  
  module.exports = Book;