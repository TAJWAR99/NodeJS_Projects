import express from "express";

import { getBooks, getBookByID, getBookByAttribute, updateBook, createBook, deleteBook } from "../controllers/books.js";

const router = express.Router();

router.get("/all", getBooks);
router.get("/:id", getBookByID);
router.get("/", getBookByAttribute);
router.post("/create", createBook);
router.patch("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;

