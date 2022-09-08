import book from "../model/book.js";

class Books {
  static getAllBooks = async (req, res) => {
    let books;
    try {
      books = await book.find();
    } catch (err) {
      console.log(err);
    }
    if (!books) {
      return res.status(404).json({ message: "No Products found" });
    }
    return res.status(200).json({ books });
  };

  static getById = async (req, res) => {
    const id = req.params.id;

    let books;
    try {
      books = await book.findById(id);
    } catch (err) {
      console.log(err);
    }
    if (!books) {
      return res.status(404).json({ message: "No Book Found!" });
    }
    return res.status(200).json({ books });
  };

  static addBooks = async (req, res) => {
    const { name, author, description, price, available, image } = req.body;
    let books;
    try {
      books = new book({
        name,
        author,
        description,
        price,
        available,
        image,
      });
      await books.save();
    } catch (err) {
      console.log(err);
    }
    if (!books) {
      return res.status(500).json({
        message: "Unable To Add",
      });
    }
    return res.status(201).json({ books });
  };

  static updateBook = async (req, res) => {
    const id = req.params.id;
    const { name, author, description, price, available, image } = req.body;
    let books;
    try {
      books = await book.findByIdAndUpdate(id, {
        name,
        author,
        description,
        price,
        available,
        image,
      });
      if (books == !null) await books.save();
    } catch (err) {
      console.log(err);
    }

    if (!books) {
      return res.status(500).json({ message: "Unable to add" });
    }
    return res.status(201).json({ books });
  };
  static deleteBook = async (req, res) => {
    const id = req.params.id;
    let books;
    try {
      books = await book.findByIdAndDelete(id);
    } catch (err) {
      console.log(err);
    }
    if (!books) {
      return res.status(404).json({ message: "Unable to By this Id" });
    }
    return res.status(200).json({ message: "Product SuccessFully Deleted" });
  };
}
export default Books;
