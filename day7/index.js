const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
  res.statusCode = 200;
});

// the question mark(?) makes the preceding text optional
app.get("/ab?cd", (req, res) => {
  res.send("ab?cd");
});

// plus sign lets you add as many preceding character as you want. example - abbcd, abbbbbbcd
app.get("/ab+cd", (req, res) => {
  res.send("ab+cd");
});

// asterix works with abRandomcd. can add anything after b
app.get("/ab*cd", (req, res) => {
  res.send("ab*cd");
});

app.get("/ab(cd)?e", (req, res) => {
  res.send("ab(cd)?e");
});

const sendUrlParams = (req, res) => {
  res.send(req.params);
};

app.get("/users/:userId/books/:bookId/", sendUrlParams);

app.get("/flights/:from-:to", sendUrlParams);
app.get("/movie/:name.:price", sendUrlParams);

app.get("/products", (req, res) => {
  res.send(req.query);
});

app.listen(port);
