const express = require('express')
// const cors = require('cors')

var app = express()
// app.use(cors({
//     origin: '*',
//     // credentials: true // enable set cookie
// }));


app.get('/', (req,res) => {
    console.log('got req')
    res.send('THIS IS THE ROOT!!!')
})

app.get('/hey', (req, res) => {
    res.send('<div><h1>THE RAMONES RULE!</h1></div>')
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log('listening on', PORT)
})