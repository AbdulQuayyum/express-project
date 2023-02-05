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