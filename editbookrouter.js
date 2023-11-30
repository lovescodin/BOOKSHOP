const express = require("express");
const { BooksModel } = require("./books.model");
EditBooksRouter = express.Router();

// EditBooksRouter.patch("/id/:id", async (req, res) => {
//  const book= BooksModel.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
//  //const bookdetails=BooksModel.findById(req.params.id);
 
//     return res.status(200).send({ message: `Book  updated successfully` , data: book });

 
// });


EditBooksRouter.patch("/id/:id", async (req, res) => {
    try {

        // const findbook= await BooksModel.findById("65560071b464c4b2ee1885e7");
        // if(findbook)
        // {
        //     return res.status(200).json({ message: "Book  found",data:findbook });
        // }

        let bookid=req.params.id ;
        console.log(bookid);
      const book = await BooksModel.findByIdAndUpdate(req.params.id,req.body,{ new: true });
      console.log(book);
      if (!book) {
        return res.status(404).json({ error: "Book not found" });
      }
  
      res.json(book);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
module.exports = { EditBooksRouter };
