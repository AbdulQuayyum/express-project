const express = require('express');

const ContactsController = require("../Controllers/Contacts.Controller")

const ContactsRouter = express.Router()

ContactsRouter.use((req, res, next) => {
    console.log("IP Address:", req.ip)
    next()
})

ContactsRouter.post("/", ContactsController.PostContact)

ContactsRouter.get('/', ContactsController.GetContacts)

ContactsRouter.get('/:ContactID', ContactsController.GetContact)

module.exports = ContactsRouter