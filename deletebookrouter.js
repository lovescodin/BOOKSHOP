const express = require("express");
const { BooksModel } = require("./books.model");
SingleBookDeleteRouter = express.Router();

SingleBookDeleteRouter.delete("/id/:id", async (req, res) => {
    console.log(req.params.id);
 const findbook= await BooksModel.findByIdAndDelete(req.params.id);
        if(findbook)
        {
            return res.status(200).json({ message: "Book  found",data:findbook });
        }
        return res.status(401).json({ message: "Book not found!!!",data:null });
 
});



module.exports = { SingleBookDeleteRouter };
