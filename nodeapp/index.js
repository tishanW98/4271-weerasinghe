var express = require("express");
var app = express();

app.get("/home", (req, res) => {
  res.send('{ "response": "Hi, welcome to App" }');
});

app.get("/status", (req, res) => {
  res.send('{ "response": "Hello World" }');
});
app.get("/check", (req, res) => {
  res.send('{ "response": " Everything is fine!" }');
});

app.listen(3000, () => {
  // use process.env.PORT db connect
  console.log("App listening on port 3000!");
});

module.exports = app;
