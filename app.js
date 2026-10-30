/*
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

*/

const express = require("express");
const app = express();
const path = require("node:path");
const messagesRouter = require("./routes/messagesRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", messagesRouter);

const PORT = process.env.PORT || 3019;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Express app listening on port ${PORT}!`);
});
