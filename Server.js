const express = require('express')

const ContactsRouter = require('./Routes/Contacts.Router')
const MessagesRouter = require('./Routes/Messages.Router')

const app = express()
const port = 3000

app.use((req, res, next) => {
    const Start = Date.now()
    next()
    const Delta = Date.now() - Start
    console.log(`${req.method} ${req.baseUrl}${req.url} ${Delta}ms`)
})

app.use(express.json())

app.use('/Contacts', ContactsRouter)
app.use('/Messages', MessagesRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))