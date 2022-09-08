import express from "express";
const router = express.Router();
import bookController from "../controllers/bookControllers.js";
router.get("/", bookController.getAllBooks);
router.post("/", bookController.addBooks);
router.get("/:id", bookController.getById);
router.put("/:id", bookController.updateBook);
router.delete("/:id", bookController.deleteBook);
export default router;
