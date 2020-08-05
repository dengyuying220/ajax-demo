const express = require('express');
var app = express();
const bodyParser = require('body-parser');

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(express.static(__dirname+ '/public'));
app.get('/hello', function (req, res) {
    res.send('Hello World');
});
app.get('/first', (req, res) => {
    res.send('hello ajax');
})
app.get('/responseData', (req, res) => {
    res.send({"name": "zhangsan"});
})
app.get('/get', (req, res) => {
    res.send(req.query);
})
app.post('/post', (req, res) => {
    res.send(req.body);
})
app.post('/json', (req, res) => {
    res.send(req.body);
})
app.listen(3000);