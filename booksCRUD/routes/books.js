import express from 'express';
import { getBooks, getBookByID, deleteBook, updateBookInfo, addBook } from '../controllers/books.js';

const router = express.Router();

router.get("/", getBooks);

router.post("/add", addBook);

router.get("/:id", getBookByID);

router.patch("/:id", updateBookInfo);

router.delete("/:id", deleteBook);

export default router;