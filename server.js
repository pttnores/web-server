var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();

var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get("/about", middleware.requireAuthentication, function (req, res) {
  res.send("<html><body><h1>Hello about us!</h1></body><html>");
});


app.get("/oldhome", function (req, res) {
  res.send("Hello Express home!");
});

app.use(express.static(__dirname + "/public"));

app.listen(PORT, function () {
  console.log("Express server started on port " + PORT);
});