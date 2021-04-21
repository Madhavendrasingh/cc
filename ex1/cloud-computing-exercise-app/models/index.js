const mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI ||
    "mongodb://localhost:27017/booksData",{ useNewUrlParser: true });

module.exports.books = require("./books.js");

//"C:\Program Files\MongoDB\Server\4.2\bin\mongod.exe" --dbpath "./data" <windows cmd run statement>
