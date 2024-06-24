import { v4 as uuidv4 } from "uuid";
let books = []

export const getBooks = (req,res) => {
    res.send(books);
}

export const addBook = (req,res) => {
    const book = req.body;
    const bookID = uuidv4();

    const bookWithID = {...book, id: bookID};
    books.push(bookWithID);
    res.send("New Book Added");
}

export const getBookByID = (req,res) => {
    const { id: bookID } = req.params;
    const  findBook = books.find((book) => book.id === bookID);
    res.send(findBook);
}

export const updateBookInfo = (req,res) => {
    const { id: bookID } = req.params;
    const { name, author, published } = req.body;

    const findBook = books.find((book) => book.id === bookID)
    if(name) findBook.name = name;
    if(author) findBook.author = author;
    if(published) findBook.published = published;

    res.send("Book Info Updated");
}

export const deleteBook = (req,res) => {
    const { id: bookID } = req.params;
    books = books.find((book) => book.id !== bookID);
    res.send("Book is deleted");
}

