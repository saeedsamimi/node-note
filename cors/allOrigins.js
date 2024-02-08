const express = require("express");
const cors = require("cors");
const app = express();
// when you use this this request is allowed from all origins
// CROSS-ORIGIN-RESOURCE-SHARING
app.use(cors());

app.get("/", function (req, res) {
  console.log("the received data: " + req.body);
  res.send("Hello");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("the server is running now!");
});

// THE JS CODE TO RUN ON CLIENT
// xhr = new XMLHttpRequest();
// xhr.open("GET", "http://localhost:PORT/");
// xhr.send(JSON.stringify({ key: "value" }));
// I received that: (in xhr.response)
// 'Hello'
