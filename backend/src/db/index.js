const { MongoClient } = require("mongodb");

// Connection URI for MongoDB Atlas
const uri =
  "mongodb+srv://kabidhasan34:bookbee123@cluster0.n82rbt2.mongodb.net/book-bee-webapp?retryWrites=true&w=majority";

// Create a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Connect to the MongoDB Atlas cluster
client
  .connect()
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
  });

module.exports = client;
