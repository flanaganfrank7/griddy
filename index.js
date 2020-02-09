const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.type('.js');
    res.sendFile('test.js', options, function (err) {
        if (err) {
            next(err)
        } else {
            console.log('Sent:', fileName)
        }
    })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))