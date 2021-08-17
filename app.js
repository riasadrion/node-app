const express = require('express');

//express app
const app = express();

// listen
app.listen(3000);


app.get('/', function(req, res) {
    res.send('<p>Home</p>');
});

app.get('/about', function(req, res) {
    res.send('<p>About</p>');
});