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

// {
//   userId: "113920356612183010941",
//   kind: "books#volume",
//   id: "QM06AwAAQBAJ",
//   etag: "N/F+5/lOARA",
//   selfLink: "https://www.googleapis.com/books/v1/volumes/QM06AwAAQBAJ",
//   volumeInfo: {
//     title: "No Ordinary Apple",
//     subtitle: "A Story About Eating Mindfully",
//     authors: [
//       "Sara Marlowe"
//     ],
//     publisher: "Simon and Schuster",
//     publishedDate: "2013-05-20",
//     description: "On an otherwise ordinary day, Elliot discovers something extraordinary: the power of mindfulness. When he asks his neighbor Carmen for a snack, he's at first disappointed when she hands him an apple - he wanted candy! But when encouraged to carefully and attentively look, feel, smell, taste, and even listen to the apple, Elliot discovers that this apple is not ordinary at all.<br> <br>Lushly and humorously illustrated, <i>No Ordinary Apple</i> makes a traditional technique for training mindfulness a fun and enjoyable way for children to learn to slow down and appreciate even the simplest things.",
//     industryIdentifiers: [
//       {
//         type: "ISBN_10",
//         identifier: "1614290954"
//       },
//       {
//         type: "ISBN_13",
//         identifier: "9781614290957"
//       }
//     ],
//     readingModes: {
//       text: true,
//       image: true
//     },
//     pageCount: 36,
//     printedPageCount: 40,
//     dimensions: {
//       height: "20.00 cm",
//       width: "26.00 cm"
//     },
//     printType: "BOOK",
//     categories: [
//       "Juvenile Fiction / Cooking & Food",
//       "Juvenile Fiction / Health & Daily Living / Daily Activities",
//       "Juvenile Fiction / Concepts / Senses & Sensation",
//       "Health & Fitness / Children's Health"
//     ],
//     averageRating: 3,
//     ratingsCount: 1,
//     maturityRating: "NOT_MATURE",
//     allowAnonLogging: false,
//     contentVersion: "1.5.4.0.preview.3",
//     panelizationSummary: {
//       containsEpubBubbles: false,
//       containsImageBubbles: false
//     },
//     imageLinks: {
//       smallThumbnail: "http://books.google.com/books/publisher/content?id=QM06AwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71jAo7ik0IzhahQf1LFC8dSu_0XxtUF6kHqV4og8z3mEhmcZ1p72g-gzp6_c3hbCdArpO0A6GOG8p0M-DBvppYd8CVna4IVU97DL4pa2Ha-FE8SGy-2k152baUum3QtpQ4mZxRs&source=gbs_api",
//       thumbnail: "http://books.google.com/books/publisher/content?id=QM06AwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE718kFVrHG_aJqkpdyq9VwuCqCQFESNzdLm3lLX7rLRmpbKxqzUsKslv-JuB9Ay7enzTyy0niDAF70pf1LLJV64Ueyxm_-cIZiIQFAtI-vQROH3suoxw96yDz1NM-lMUvhUxRJMy&source=gbs_api",
//       small: "http://books.google.com/books/publisher/content?id=QM06AwAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE7271UT6IVqo0uqO_DaM_5Bwa7OmSBUd2U1XJDcakjMqG9eF27_CW7Fd7abYEsR9Mdh7sQxpbyER4I5MOvJvjbsVV3TxkkDiL7hXxDrwJVPh-IOTvdsAM6FMzCqxgDKvhAG9oqBI&source=gbs_api",
//       medium: "http://books.google.com/books/publisher/content?id=QM06AwAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE72kNGwgLyQdI9joEqroK_nYjLwBegoLWI3IrriWeavlFdTaa5nUoAEUm4GncOlJUtK4dsqd17fYEpMkxC-Nwh_4SH52LQnvtCo4TMpMJ_fLPMFf4HNpaibJGC4GBCfNdTB7FOWW&source=gbs_api",
//       large: "http://books.google.com/books/publisher/content?id=QM06AwAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE70HmvItRPoXLfXRHBdA2xhhQkVh6OQj7aQbq5QE8xWQ-QFZWxMTd8vJN5bPOB3Edwsy_vCEZVEpkJty_U_w4azQBuzhnQBe2YsttzRxsX1R32mYo77zvLJMy-4xBGxmZVYAcgce&source=gbs_api",
//       extraLarge: "http://books.google.com/books/publisher/content?id=QM06AwAAQBAJ&printsec=frontcover&img=1&zoom=6&edge=curl&imgtk=AFLRE72II2xQQxIsEU4CsfvZc8sSMggMIkkDfzXFQzKiR4d-fjccelaSvJjOL4tfQsiKej9z4p5w9BzHRckCYbTy6pL8HogC1nI2ryndKPvo0Jfujp1eJOD-zb4z4x7F7L91kf_HlamX&source=gbs_api"
//     },
//     language: "en",
//     previewLink: "http://books.google.ca/books?id=QM06AwAAQBAJ&hl=&source=gbs_api",
//     infoLink: "https://play.google.com/store/books/details?id=QM06AwAAQBAJ&source=gbs_api",
//     canonicalVolumeLink: "https://play.google.com/store/books/details?id=QM06AwAAQBAJ"
//   },
//   layerInfo: {
//     layers: [
//       {
//         layerId: "geo",
//         volumeAnnotationsVersion: "10"
//       }
//     ]
//   },
//   saleInfo: {
//     country: "CA",
//     saleability: "FOR_SALE",
//     isEbook: true,
//     listPrice: {
//       amount: 14.99,
//       currencyCode: "CAD"
//     },
//     retailPrice: {
//       amount: 14.99,
//       currencyCode: "CAD"
//     },
//     buyLink: "https://play.google.com/store/books/details?id=QM06AwAAQBAJ&rdid=book-QM06AwAAQBAJ&rdot=1&source=gbs_api",
//     offers: [
//       {
//         finskyOfferType: 1,
//         listPrice: {
//           amountInMicros: 14990000,
//           currencyCode: "CAD"
//         },
//         retailPrice: {
//           amountInMicros: 14990000,
//           currencyCode: "CAD"
//         },
//         giftable: true
//       }
//     ]
//   },
//   accessInfo: {
//     country: "CA",
//     viewability: "PARTIAL",
//     embeddable: true,
//     publicDomain: false,
//     textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
//     epub: {
//       isAvailable: true,
//       acsTokenLink: "http://books.google.ca/books/download/No_Ordinary_Apple-sample-epub.acsm?id=QM06AwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
//     },
//     pdf: {
//       isAvailable: true,
//       acsTokenLink: "http://books.google.ca/books/download/No_Ordinary_Apple-sample-pdf.acsm?id=QM06AwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
//     },
//     webReaderLink: "http://play.google.com/books/reader?id=QM06AwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
//     accessViewStatus: "SAMPLE",
//     quoteSharingAllowed: false
//   }
// }
