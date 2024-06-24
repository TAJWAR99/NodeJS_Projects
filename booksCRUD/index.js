import express from "express";
import bodyParser from 'body-parser';
import bookRoutes from "./routes/books.js";

const app = express();

app.use(bodyParser.json());

app.use("/books", bookRoutes);

const PORT = 3004;

app.listen(PORT, () => console.log("server is running"));