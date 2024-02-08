const express = require("express");
const app = express();
// after viewing this files
// we learns that
// 1 - express app uses for handling server http requests like GET , POST ,etc
// 2 - we need to receive and send data between seerver(API) to client
//     then the express allows to doing that by use the inpuut methods (see ./inputs.js)
// 3 - in this file we learn the very basically verson of responsing to a request using express.js
app.get("/request", function (req, res) {
  res.send("Text"); // sending text to the client
  res.sendFile(new Blob()); // sending blobs to the client
  res.json({ key1: "value1", key2: "value2" }); // sending json as response
  res.status(200); // it sets the status code of response 200 will be OK result!
});
// this code will be required in your web application
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("server is running on port: %d", PORT);
});
