const express = require("express");
var app = express();
const bodyParser = require("body-parser");
const fs = require('fs')
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({
  extended: true
}));
app.use(express.static(__dirname + "/public"));
app.get("/hello", function (req, res) {
  res.send("Hello World");
});
app.get("/first", (req, res) => {
  res.send("hello ajax");
});
app.get("/second", (req, res) => {
  res.send(res.query);
  //res.send(req.body);
});
app.get("/responseData", (req, res) => {
  res.send({
    name: "zhangsan"
  });
});
app.get("/get", (req, res) => {
  res.send(req.query);
});
app.post("/post", (req, res) => {
  res.send(req.body);
});
app.post("/json", (req, res) => {
  res.send(req.body);
});
app.get("/error", (req, res) => {
  //console.log(abc);
  res.status(400).send("not ok");
});
app.get("/cache", (req, res) => {
  fs.readFile('./test.txt', (err, result) => {
    res.send(result);
  })
});

app.listen(3000);