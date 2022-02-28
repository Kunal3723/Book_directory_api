import database from "./database.js";

//function to fetch all books from database
export function getBooks(req, res) {
    try {
        const books = database;
        res.send(books);
    } catch (error) {

    }
}

//function to fetch only one book with given id
export function getBook(req, res) {
    try {
        const { id } = req.params;
        const books = database;
        const book = books.find(function (single_book) {
            return id === single_book._id;
        })
        if (!book) {
            return res.send("There is no book with this id");
        }
        res.send(book);
    } catch (error) {

    }
}

// function to add new book in database
export function createBook(req, res) {
    try {
        const { title, _id, description, author } = req.body;
        const books = database;
        const book = books.find(function (single_book) {
            return _id === single_book._id;
        })
        if (book) {
            return res.send("The book with this id already exist");
        }
        const newBook = { title, _id, description, author }
        database.push(newBook);
        res.send(newBook);
    } catch (error) {

    }
}

//function to update book
export function updateBook(req, res) {
    try {
        const { id } = req.params;
        const { title, _id, description, author } = req.body;
        const books = database;
        const book = books.find(function (single_book) {
            return id === single_book._id;
        })
        if (!book) {
            return res.send("There is no book with this id");
        }
        const updatedBook = { ...book, title: title, _id: _id, description: description, author: author }
        const index = books.findIndex(function (single_book) {
            return id === single_book._id
        })
        database.splice(index, 1, updatedBook)
        res.send(updatedBook);
    } catch (error) {

    }
}

//function to delete book with given id
export function deleteBook(req, res) {
    try {
        const { id } = req.params;
        const books = database;
        const book = books.find(function (single_book) {
            return id === single_book._id;
        })
        if (!book) {
            return res.send("There is no book with this id");
        }

        const index = books.findIndex(function (single_book) {
            return id === single_book._id
        })
        database.splice(index, 1)
        res.send("Book deleted Successfully");
    } catch (error) {

    }
}
