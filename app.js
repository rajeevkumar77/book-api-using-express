import express from "express";
import connect from "./dbConnect.js";
import cors from "cors";
import router from "./router/books.js";
const app = express();

app.use(express.json());
app.use(cors());
app.use("/books", router);

connect();
app.listen(5000);
