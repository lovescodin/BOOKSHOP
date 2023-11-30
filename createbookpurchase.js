const express = require("express");
const createPurchaseBooksRouter = express.Router();
const { PurchaseBooksModel } = require("./purchasebooks.model");

createPurchaseBooksRouter.post("/BuyBook", async (req, res) => {
  const { User, Books } = req.body;
  console.log(req.body);
  if (!User || !Books) {
    return res.status(401).send({ message: "All fields are required" });
  }

  const purchaseBook = new PurchaseBooksModel({
    User: User,
    Books: Books,
  });

  try {
    const purchasedBooks = await purchaseBook.save();
    console.log(res);
    return res.status(201).json(purchasedBooks);
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = { createPurchaseBooksRouter };
