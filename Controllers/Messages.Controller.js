const path = require('path')

function GetMessages(req, res) {
    res.sendFile(path.join(__dirname, '..', 'Public', 'Images', 'cat.jpeg'))
    // res.send("<ul><li>Hello Abdul-Quayyum</li></ul>")
}

function PostMessages(req, res) {
    console.log("Updating messages....")
}

module.exports = {
    GetMessages,
    PostMessages,
}