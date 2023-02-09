const express = require('express')

const ContactsController = require("./Controllers/Contacts.Controller")
const MessagesController = require("./Controllers/Messages.Controller")

const app = express()
const port = 3000

app.use((req, res, next) => {
    const Start = Date.now()
    next()
    const Delta = Date.now() - Start
    console.log(`${req.method} ${req.url} ${Delta}ms`)
})

app.use(express.json())

app.post("/Contacts", ContactsController.PostContact)

app.get('/Contacts', ContactsController.GetContacts)

app.get('/Contacts/:ContactID', ContactsController.GetContact)

app.get("/Messages", MessagesController.GetMessages)

app.post('/Messages', MessagesController.PostMessages)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))