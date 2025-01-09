const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bookRoute = require("./src/books/book.route");
require("dotenv").config();
const app = express();
const port = process.env.port || 5000;
const uri = process.env.DB_URL;

app.use(express.json());
app.use(cors());
// "mongodb+srv://zainjaffar:bHQ1WGrD1ESPFUJd@cluster0.e390z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function main() {
  try {
    // Middleware
    // await mongoose.connect(uri, clientOptions);
    await mongoose.connect(uri).then(() => {
      console.log("Connected to MongoDB");
      // Routes
      app.use("/api/books", bookRoute);
      app.get("/", (req, res) => {
        res.send("Hello World!");
      });
    });
    // await mongoose.connection.db.admin().command({ ping: 1 });
    // console.log(
    // "Pinged your deployment. You successfully connected to MongoDB!"
    // );
    // console.log("Connected to MongoDB");
    // app.use("/books", bookRoute);
  } finally {
    // await mongoose.disconnect();
  }
}
main().catch((err) => {
  // debugger;
  console.log(err);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
