var express = require("express");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");

var db = require("./models");
var PORT = 3000;

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI);

app.get("/scrape", function(req, res) {
    axios.get("https://www.rotoworld.com/").then(function(response) {
        var $ = cheerio.load(response.data);

        $("li div").each(function(i, element) {
            var result = {};

            result.title
        })
    })
})

app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
})
