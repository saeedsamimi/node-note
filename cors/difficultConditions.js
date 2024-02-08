const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
  allowedHeaders: ["Content-Type"],
  preflightContinue: true,
};
// enable json for requests
app.use(express.json());
app.post("/welcome", function (request, responsce) {
  console.log(request.body);
  responsce.send("The data is: " + request.body.data);
});

// cors enabled for only one element
app.get("/", cors(corsOptions), function (request, response, next) {
  console.log("connected Ah!");
  response.send(200);
});
const PORT = process.env.PORT || 65500; // try hard port
app.listen(PORT, function () {
  console.log("server is running on port: %d", PORT);
});
