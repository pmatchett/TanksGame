//Tank Game main server file
//Created: April 9 2021
//Created By: Patrick Matchett
//Last Updated: April 9 2021
//Last Updated By: Patrick Matchett
//Server setup with express
var express = require("express");
var port = 3000;
var app = express();
var http = require('http').createServer(app);
//Serving all files stored in the public folder
app.use(express.static('public'));
http.listen(port, function () {
    console.log("App running on " + port + ".");
});
