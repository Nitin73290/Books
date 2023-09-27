
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();


// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router);

app.use("/static", express.static(__dirname + "/frontend/static"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/frontend/index.html");
});

mongoose
  .connect(
    "mongodb+srv://nimtinbhai:kdjdccaHsqKbfmQA@cluster0.ayzb3qy.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));