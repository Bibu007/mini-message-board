const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

app.get("/", (req, res) => {
  res.render("index", { title: "Home", messages });
});

app.get("/new", (req, res) => {
  res.render("new", { title: "New message" });
});

app.post("/messages", (req, res) => {
  const messageUser = req.body.author;
  const messageText = req.body.message;

  messages.push({ text: messageText, user: messageUser, added: new Date() });

  res.redirect("/");
});

app.listen(3005);
