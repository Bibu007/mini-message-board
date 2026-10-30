const express = require("express");
const messagesController = require("../controllers/messagesController");
const router = express.Router();

router.get("/", messagesController.messageListGet);

router.get("/new", messagesController.messageCreateGet);

router.post("/new", messagesController.messageCreatePost);

module.exports = router;
