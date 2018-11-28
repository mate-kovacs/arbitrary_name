var express = require('express');
var app = express();

app.get('/helloworld', function (req, res) {
    let content = {'message': 'ezigen'};
    res.contentType('application/json');
    res.send(content);
});

app.listen(3000, function() {
    console.log('Started application server at http://localhost:3000');
});