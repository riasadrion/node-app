const express = require('express');

//express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen
app.listen(3000);

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.use((req, res) => {
    res.status(404).render('404');
});