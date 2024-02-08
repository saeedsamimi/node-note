/*
1 - at the first we try to create a server by requiring the express package
*/
const express = require("express");
/*
2 - create the Server application
*/
const app = express();
/*
3 - then start the app by listening on a PORT which you want
*/
// you can also enter your PORT in the .env file and include that
const PORT = process.env.PORT || 3000;
// the second argumant is callback for starting the server
function CALLBACK() {
  console.log("the server is running on port: ${PORT}");
}
app.listen(PORT, CALLBACK);
// if you start the file in the console will see this:
// -> the server is running on port: 3000 (or another else)
