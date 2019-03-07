const express = require('express')
// const fs = require('fs')
// const cors = require('cors')
const bodyParser = require('body-parser')
function writeChallenge(challenge) {
    console.log(challenge)
}

var app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use(cors({
//     origin: '*',
//     // credentials: true // enable set cookie
// }));


app.post('/api', (req,res) => {

    var challengeEvent = req.body
    console.log(challengeEvent)
    // writeChallenge(challengeEvent)
    let challenge = challengeEvent.challenge
    res.send(challenge)
})

app.get('/hey', (req, res) => {
    res.send('<div><h1>THE RAMONES RULE!</h1></div>')
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log('listening on', PORT)
})