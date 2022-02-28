import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";
import bookRoutes from "./routes/booksRoutes.js"
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/", bookRoutes);

const PORT = process.env.PORT || 5000;
app.get('/', function (req, res) {
    res.send("Hello to Rest API");
}).listen(PORT, function () { console.log(`Server Running on Port: http://localhost:${PORT}`) })
