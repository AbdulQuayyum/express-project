const express = require('express')
const path = require('path')

const ContactsRouter = require('./Routes/Contacts.Router')
const MessagesRouter = require('./Routes/Messages.Router')

const app = express()

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'Views'))

const port = 3000

app.use((req, res, next) => {
    const Start = Date.now()
    next()
    const Delta = Date.now() - Start
    console.log(`${req.method} ${req.baseUrl}${req.url} ${Delta}ms`)
})

app.use('/Site', express.static(path.join(__dirname, 'Public')))
app.use(express.json())

app.get('/', (req, res) => {
    res.render('Index', {
        Title: "Awesome Creatures",
        Caption: "Why won't you love cats?"
    })
})
app.use('/Contacts', ContactsRouter)
app.use('/Messages', MessagesRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))