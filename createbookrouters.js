const express = require("express");
createBooksRouter=express.Router();
const { BooksModel } = require("./books.model");

createBooksRouter.post("/NewBook", async (req, res) => {
      
    const { Name, Author,Price,Genre } = req.body;
   
    if (!Name || !Author || !Price || !Genre) {
      return res.status(401).send({ message: "All fields are required" });
    }
  
    const checkName = await BooksModel.findOne({ Name });
    console.log("check", checkName);
  
    if (checkName) {
      return res.status(401).send({ message: "Book with same name already exists" });
    }
  
    const newBook = new BooksModel({ ...req.body });
    const insertedBook = await newBook.save();
    return res.status(201).json(insertedBook);
  });


  module.exports ={createBooksRouter}