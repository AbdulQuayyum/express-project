const express = require('express')
const app = express()
const port = 3000

const Contacts = [
    {
        id: 0,
        name: "Ayinla Akerekoro"
    },
    {
        id: 1,
        name: "Ajadi Jagidijagan"
    },
    {
        id: 2,
        name: "Ajani Ajanlekoko"
    },
    {
        id: 3,
        name: "Alamu Aresejabata"
    }
]

app.use((req, res, next) => {
    const Start = Date.now()
    next()
    const Delta = Date.now() - Start
    console.log(`${req.method} ${req.url} ${Delta}ms`)
})

app.use(express.json())

app.post("/Contacts", (req, res) => {
    if (!req.body.name) {
      return res.status(400).json({
            error: 'Empty contact name'
        })
    }

    const newContact = {
        name: req.body.name,
        id: Contacts.length,
    }
    Contacts.push(newContact)

    res.json(newContact)
})

app.get('/Contacts', (req, res) => res.json(Contacts))

app.get('/Contacts/:ContactID', (req, res) => {
    const ContactID = Number(req.params.ContactID)
    const Contact = Contacts[ContactID]
    if (Contact) {
        res.status(200).json(Contact)
    } else {
        res.status(404).json({
            error: 'Contact not found'
        })
    }
})

app.get("/Messages", (req, res) => res.send("<ul><li>Hello Abdul-Quayyum</li></ul>"))

app.post('/Messages', (req, res) => console.log("Updating messages...."))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))