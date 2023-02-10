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

const ContactsRouter = express.Router()

ContactsRouter.post("/", ContactsController.PostContact)

ContactsRouter.get('/', ContactsController.GetContacts)

ContactsRouter.get('/:ContactID', ContactsController.GetContact)

app.use('/Contacts', ContactsRouter)

app.get("/Messages", MessagesController.GetMessages)

app.post('/Messages', MessagesController.PostMessages)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))