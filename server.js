const http = require('http');
const fs = require('fs');
const _ = require('lodash');
const server = http.createServer((req, res) => {
    console.log('req made');
});

server.listen(3232, 'localhost', ()=>{
    console.log('listened');
});