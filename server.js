const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get("/Messages", (req, res) => res.send("<ul><li>Hello Abdul-Quayyum</li></ul>"))

app.post('/Messages', (req, res) => console.log("Updating messages...."))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))