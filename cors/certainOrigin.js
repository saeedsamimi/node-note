const express = require("express");
const app = express();
// we set certain origins can send request and receive data
var corsOptions = {
  origin: "http://example.com",
  optionsSuccessStatus: 200,
  allowedHeaders: ["Content-Type"],
};
cors(corsOptions);
// handle the get request if and only if the request is come from certain origins
app.post("/", function (req, res) {
  res.send("You accessed to this origin by cors (mid-level) security!");
});
// configuring the listen port for express
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("the cors is enabled on certain origins!");
  console.log("the server is running on the : ", PORT);
});
