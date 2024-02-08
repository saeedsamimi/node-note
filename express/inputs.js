const express = require("express");
const app = express();
// the received data maybe in some formats
// if i want to send a json to my express app , should use this short one line code
app.use(express.json());
// in other wise if you want to sed an urlencoded request to a express app use this one line is very usefull
app.use(express.urlencoded({ extended: true }));
// Before we go we should khow that : the express choses the best convert for the request

// let create the get request handler for receiving the get request
// res stands for response
// req stands for request
app.get("/receive", function (req, res) {
  // all of the inputs there here
  const inputs = req.body;
  // if the data is text
  const data = inputs; // String
  // if the data is json
  const jsonData = inputs;
  // if the data is urlencoded like form requests
  const formData = inputs;
  // your logic goes here
  // ...
  // at the end you will have this
  const output = ".../something";
  res.send("the data processed");
});
// this code will be required in your web application
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("server is running on port: %d", PORT);
});
