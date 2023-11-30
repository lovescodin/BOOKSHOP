const express = require("express");
const { BooksModel } = require("./books.model");
SingleBookRouter = express.Router();

SingleBookRouter.get("/id/:id", async (req, res) => {
    console.log(req.params.id);
 const findbook= await BooksModel.findById(req.params.id);
        if(findbook)
        {
            return res.status(200).json({ message: "Book  found",data:findbook });
        }
        return res.status(401).json({ message: "Book not found!!!",data:null });
 
});



module.exports = { SingleBookRouter };
