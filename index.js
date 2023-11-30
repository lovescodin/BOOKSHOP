const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
//const { BooksModel } = require("./books.model");

const {createBooksRouter}=require("./createbookrouters")
const {GetAllBooksRouter}=require("./getallbooksrouters")
const {EditBooksRouter}=require("./editbookrouter");
const { SingleBookRouter } = require("./getsinglebookrouter");
const {SingleBookDeleteRouter}=require("./deletebookrouter")

const {CreateUserRouter}=require("./Users/createuserrouter");
const {LoginUserRouter}=require("./Users/loginuserrouter");
const {createPurchaseBooksRouter}=require("./createbookpurchase");


app.use(express.json());


const connectDB = async () => {
    try {
      await mongoose.connect("mongodb+srv://arunrajra2021:arunrajra2021@cluster0.b5xzzjm.mongodb.net/");
    } catch (error) {
      handleError(error);
    }
  };
  
  connectDB()
    .then(() => {
      console.log("DB Connected");
      app.listen(7000, () => {
        console.log("server running successfully 7000");
      });
    })
    .catch((err) => {
      console.log(err);
    });

    //Book Routes
    app.use("/Books/",GetAllBooksRouter);
    app.use("/Books/",createBooksRouter);
    app.use("/Books/",EditBooksRouter);
    app.use("/Book/",SingleBookRouter);
    app.use("/BooksDel/",SingleBookDeleteRouter);
    app.use("/Books/",createPurchaseBooksRouter);

//User Routes
    app.use("/User/",CreateUserRouter);
    app.use("/User/",LoginUserRouter);
