import express from "express";
import { getBook,getBooks,updateBook,createBook,deleteBook } from "../controllers/books.js";
const router = express.Router();

//to make the code neat and more understandable I have write the corresponding functions in separate file("/controllers/books.js")

router.get("/books", getBooks);
router.get("/books/:id", getBook);
router.post("/books", createBook);
router.put("/books/:id", updateBook);
router.delete("/books/:id", deleteBook);


export default router;
