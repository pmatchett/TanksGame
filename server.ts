//Tank Game main server file
//Created: April 9 2021
//Created By: Patrick Matchett

//Last Updated: April 9 2021
//Last Updated By: Patrick Matchett

//Server setup with express
const express = require("express");
const port = 3000;
const app = express();
const http = require('http').createServer(app);


//Serving all files stored in the public folder
app.use(express.static('public'));



http.listen(port, () =>{
  console.log(`App running on ${port}.`);
});
