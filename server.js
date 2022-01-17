const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const SavedBook = require("./models/SavedBook");

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))
app.use(cors());
app.use(morgan("common"));
app.use(express.static("public"));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post("/bookshelf", async (req, res) => {
      const { userId, saleInfo, volumeInfo, id } = req.body;
      const { title,
        subtitle,
        authors,
        publisher,
        publishedDate,
        description,
        pageCount,
        printedPageCount,
        printType,
        categories,
        imageLinks,
      language,
      previewLink
     } = volumeInfo;
      if (title) {
        try {
          const savedBook = await SavedBook.findOne({ id });
          if (!savedBook) {
            const formattedSaleInfo = saleInfo.retailPrice
            ?   {
                amount: saleInfo.retailPrice.amount,
                currencyCode: saleInfo.retailPrice.currencyCode
              }
            : {
              amount: 0,
              currencyCode: "$"
            };
            const bookToSave = new SavedBook({
                userId,id,
                saleInfo: {
                  retailPrice: formattedSaleInfo
                }
                ,
                volumeInfo: {
                  title,
                  subtitle,
                  authors,
                  publisher,
                  publishedDate,
                  description,
                  pageCount,
                  printedPageCount,
                  printType,
                  categories,
                  imageLinks: {
                    thumbnail: imageLinks.thumbnail,
                  },
                  language,
                  previewLink,
                  },
              })
              bookToSave.save().then(() => {
                res.status(200).json({
                  success: true,
                  data: bookToSave
                })
              })
            } else {
              res.status(400).json({
                success: false,
                message: "book already exists in the shelf"
              })
            }
          } catch (err) {
            res.status(404).json({
              success: false,
              message: err
            });
            console.log(err);
          }
        }
      });

      app.get("/bookshelf/:userId", async (req, res) => {
        const { userId } = req.params;
        const booksByUserId = await SavedBook.find({ userId });
        res.status(200).json({
          success: true,
          data: booksByUserId
        });
      });

      app.get("/bookshelf/:userId/:volumeId", async (req, res) => {
        const { userId, volumeId } = req.params;
        const booksByUserId = await SavedBook.findOne({ userId, volumeId });
        res.status(200).json({
          success: true,
          data: booksByUserId
        });
      });

      app.delete("/bookshelf/:userId/:volumeId", async (req, res) => {
        const { userId, volumeId } = req.params;
        await SavedBook.deleteOne({ userId, volumeId });
        res.status(200).json({
          success: true,
          message: "successfully deleted from the shelf"
        });
      });

    const PORT = process.env.PORT || 3002; mongoose.connect("mongodb+srv://yoshi:1234@cluster0.yhgyt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => app.listen(PORT, () => console.log(`server running on port ${PORT}`)))
    .catch((err) => console.log(err));