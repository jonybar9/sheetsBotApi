const express = require('express')
var app = express()
// var url = require('url');
const request = require('request');

const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', (process.env.PORT || 9001));

app.get('/', function (req, res) {
    res.send('It works!');
});

app.post('/api', function (req, res) {
    console.log('i am here')
    console.log('got req', req)
    // var parsed_url = url.format({
    //     pathname: 'https://api.genius.com/search',
    //     query: {
    //         access_token: process.env.GENIUS_ACCESS,
    //         q: req.body.text
    //     }
    // });

    // request(parsed_url, function (error, response, body) {
    //     if (!error && response.statusCode == 200) {
    //         var data = JSON.parse(body);
    //         var first_url = data.response.hits[0].result.url;

    //         var body = {
    //             response_type: "in_channel",
    //             text: first_url
    //         };

    //         res.send(body);
    //     }
    // });
});

// app.post('/api', (req, res) => {
//     let payload = req.body;
//     console.log('checking for it')
//     console.log('check:', req.body)
//     res.redirect('https://slack.com/oauth/authorize');
//     if (payload.event.type === "app_mention") {
//         // if (payload.event.text.includes("tell me a joke")) {
//         // Make call to chat.postMessage using bot's token
//         console.log('yeahhh it was that')
//         // }
//     }
// })

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});