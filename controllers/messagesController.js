const db = require("../db/queries");

exports.messageListGet = (req, res) => {
  db.getAllMessages()
    .then((result) => {
      res.render("index", { title: "Home", messages: result });
    })
    .catch((err) => console.log(err));
};

exports.messageCreatePost = (req, res) => {
  const messageUser = req.body.author;
  const messageText = req.body.message;
  const added = new Date();

  db.insertMessage(messageUser, messageText, added)
    .then((result) => res.redirect("/"))
    .catch((err) => console.log(err));
};

exports.messageCreateGet = (req, res) => {
  res.render("new", { title: "New message" });
};
