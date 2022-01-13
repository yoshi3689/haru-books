// const jsonServer = require("json-server");
// const server = jsonServer.create();
// const router = jsonServer.router("src/db/db.json");
// const middlewares = jsonServer.defaults({ static: "./build" });
// const port = process.env.PORT || 3000;

// server.use(middlewares);
// server.use(router);

// server.listen(port);

const express = require("express");
// const session = require("express-session");
const path = require("path");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const SavedBook = require("./models/SavedBook");

// MongoDB/mongoose Schema
// const User = require("./models/User");
// const Seek = require("./models/Seek");
// const Give = require("./models/Give");

const app = express();


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))
app.use(cors());
app.use(morgan("common"));
app.use(express.static("public"));


// app.get("/", (req, res) => {
//   console.log(path.join(__dirname, "public", "index.html"));
//   res.sendFile(path.join(__dirname, "public", "index.html"))
// });

app.post("/bookshelf", async (req, res) => {
      // console.log("post req coming")
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
          console.log("title exists, now I will see if this book exists in the db");
          const savedBook = await SavedBook.findOne({
            title
          });
          if (!savedBook) {
            const bookToSave = new SavedBook({
                userId,
                id,
                saleInfo: {
                  retailPrice: {
                    amount: saleInfo.retailPrice.amount,
                    currencyCode: saleInfo.retailPrice.currencyCode
                  }
                },
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
                console.log("new book saved", bookToSave);
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
        // re.params to accesss the query parameters
        const booksByUserId = await SavedBook.find({ userId });
        console.log(booksByUserId);
        res.status(200).json({
          success: true,
          data: booksByUserId
        });
      });

      app.get("/bookshelf/:userId/:volumeId", async (req, res) => {
        const { userId, volumeId } = req.params;
        // req.params to accesss the query parameters
        const booksByUserId = await SavedBook.findOne({ userId, volumeId });
        console.log(userId, volumeId, booksByUserId);
        res.status(200).json({
          success: true,
          data: booksByUserId
        });
      });

      app.delete("/bookshelf/:userId/:volumeId", async (req, res) => {
        const { userId, volumeId } = req.params;
        const booksByUserId = await SavedBook.remove({ userId, volumeId });
        console.log(userId, volumeId, booksByUserId);
        res.status(200).json({
          success: true,
          message: "successfully deleted from the shelf"
        });
      });

    // app.post("/", (req, res) => {
    //   console.log(req);
    //   res.json({
    //     data: "saved"
    //   })
    // });


    // Connect to the database, then start the server.
    const PORT = process.env.PORT || 3002; mongoose.connect("mongodb+srv://yoshi:1234@cluster0.yhgyt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => app.listen(PORT, () => console.log(`server running on port ${PORT}`)))
    .catch((err) => console.log(err));