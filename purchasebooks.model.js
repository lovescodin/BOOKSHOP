const mongoose = require('mongoose');

const { Schema } = mongoose;

const PurchaseBooksSchema = new Schema(
  {
    User: {
      type: Schema.Types.ObjectId,
      ref: 'Users',
      required: true,
    },

    Books: {
      type: Schema.Types.ObjectId,
      ref: 'Books',
    },
  },
  {
    timestamps: true,
  }
);

const PurchaseBooksModel = mongoose.model('PurchaseBooks', PurchaseBooksSchema);

module.exports = { PurchaseBooksModel };
