var express = require('express');
var app = express();
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
app.listen(3000);