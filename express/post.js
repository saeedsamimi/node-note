// this method is favorite
const express = require("express");
const app = express();
// let create the post request handler
app.post("/text", function (request, responsce) {
  responsce.send("WELCOME TO BACKEND! 😊"); // sent text as response
});
// let you khow additional things
app.post("/json", function (request, responsce) {
  responsce.send({ msg: "WELCOME TO BACKEND! 😊" }); // sent json as responce
});
// this code will be required in your web application
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("server is running on port: %d", PORT);
});
