function GetMessages(req, res) {
    res.send("<ul><li>Hello Abdul-Quayyum</li></ul>")
}

function PostMessages(req, res) {
    console.log("Updating messages....")
}

module.exports = {
    GetMessages,
    PostMessages,
}