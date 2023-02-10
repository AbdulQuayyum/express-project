const express = require('express');

const MessagesController = require("../Controllers/Messages.Controller")

const MessagesRouter = express.Router();

MessagesRouter.get("/", MessagesController.GetMessages)

MessagesRouter.post('/', MessagesController.PostMessages)

module.exports = MessagesRouter