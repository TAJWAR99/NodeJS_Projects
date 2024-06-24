import Books from "../models/model.js";

export const getBooks = async(req, res) => {
    const books = await Books.find({});
    res.status(200).json({books});
}

export const getBookByID = async(req, res) => {
    const { id } = req.params;
    const book = await Books.findById(id);
    res.status(200).json({book});
}

export const getBookByAttribute = async(req, res) => {
    const { status } = req.query;
    const books = await Books.find({status})
    res.status(200).json({books});
}

export const updateBook = async(req, res) => {
    const { id:taskID } = req.params;
    const book = await Books.findOneAndUpdate({_id:taskID}, req.body, {
        new:true,
        runValidators:true,
    })
    res.send("Book is updated");
}

export const createBook = async(req, res) => {
    const book = await Books.create(req.body);
    res.status(201).json({book});
}

export const deleteBook = async(req, res) => {
    const { id } = req.params;
    const book = await Books.findByIdAndDelete(id);
    res.status(200).json({message: "Book deleted"});
}