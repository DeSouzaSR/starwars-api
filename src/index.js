const express = require("express");
const mongoose = require('mongoose');

const app = express();
const port = 3000;
mongoose.connect('mongodb+srv://sandrofisica:<password>@cluster0.xlrvcvw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const Film = mongoose.model('Film', {
    title: String,
    description: String,
    image_url: String,
    trailer_url: String
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log("App running");
});
