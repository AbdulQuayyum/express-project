const Model = require("../Models/Contacts.Model")

function PostContact(req, res) {
    if (!req.body.name) {
        return res.status(400).json({
            error: 'Empty contact name'
        })
    }

    const newContact = {
        name: req.body.name,
        id: Model.length,
    }
    Model.push(newContact)

    res.json(newContact)
}

function GetContacts(req, res) {
    res.json(Model)
}

function GetContact(req, res) {
    const ContactID = Number(req.params.ContactID)
    const Contact = Model[ContactID]
    if (Contact) {
        res.status(200).json(Contact)
    } else {
        res.status(404).json({
            error: 'Contact not found'
        })
    }
}

module.exports = {
    PostContact,
    GetContacts,
    GetContact
}