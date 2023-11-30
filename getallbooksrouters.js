const express = require("express");
const { BooksModel } = require("./books.model");
GetAllBooksRouter = express.Router();

GetAllBooksRouter.get("/AllBooks", async (req, res) => {
  const allBooks  = await BooksModel.find().lean();
  if (allBooks .length==0) {
    return res.status(401).send({ message: "No Books found!!!", data: null });
  }
  return res.status(200).send({ message: "All Books", data: {allBooks } });
});

module.exports = { GetAllBooksRouter };
