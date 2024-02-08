/*
const express = require("express");
const app = express();
*/
// Instead of this method also we can use this shorter
const app = require("express")();
// let create the get request handler
app.get("/welcome", function (request, responsce) {
  responsce.send("WELCOME TO BACKEND! 😊");
});
// let listen to the port
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("server is running on port: %d", PORT);
});
