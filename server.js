const express = require('express')
// const cors = require('cors')
const bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use(cors({
//     origin: '*',
//     // credentials: true // enable set cookie
// }));


app.post('/api', (req, res) => {
    let payload = req.body;
    console.log('checking for it')
    console.log('check:', req.body)
    if (payload.event.type === "app_mention") {
        // if (payload.event.text.includes("tell me a joke")) {
        // Make call to chat.postMessage using bot's token
        console.log('yeahhh it was that')
        // }
    }
    res.sendStatus(200);
})

app.get('/hey', (req, res) => {
    res.send('<div><h1>THE RAMONES RULE!</h1></div>')
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log('listening on', PORT)
})