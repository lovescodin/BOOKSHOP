const mongoose = require('mongoose');


const { Schema } = mongoose;

const BookShopSchema = new Schema({
    Name: {
        type: String,
        required: true,
      },

      Author: {
        type: String,
        required: true,
       
      },
      Price:
      {
        type:Number,
        required: true,
        
      },      
      Genre:
      {
        type:String,
        required: true,
        
      }
  },
  {
    timestamps:true,
  }
);

const BooksModel = mongoose.model("Books", BookShopSchema);

module.exports = { BooksModel };
