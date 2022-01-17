const mongoose = require("mongoose");

const savedBookSchema = new mongoose.Schema({
  userId: String,
  id: String,
  saleInfo: {
    retailPrice: {
      amount: Number,
      currencyCode: String
    }
  },
  volumeInfo: {
    title: String,
    subtitle: String,
    authors: [String],
    publisher: String,
    publishedDate: String,
    description: String,
    pageCount: Number,
    printedPageCount: Number,
    printType: String,
    categories: [String],
    imageLinks: {
      thumbnail: String,
    },
    language: String,
    previewLink: String,
  },
})

module.exports = mongoose.model("SavedBook", savedBookSchema);