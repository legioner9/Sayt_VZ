const express = require('express');
const bodyPars = require('body-parser');
const config = require('./src/config/config');

const server = express();
server.set('view engine', 'ejs');
server.set('views', './src/views');
server.use(bodyPars.urlencoded({extended: true}));

let count = 0;
let arr = ['ast', 'geo', 'mix'];

server.get('/', (req, res) => {
    console.log('{date_1 : count}', {arr_1: arr})
    res.render(`index`, {date_1: count, arr_1: arr});
});

server.get('/create', (req, res) => {
    res.render(`create`, {date_1: count});
});
let ech;
server.post('/create', (req, res) => {
    console.log('Run', `${count++}`);
    ech = req.body.text;
    arr.push(`${count} :: ${ech} `);
    // res.render(`index`, {date_1: count, arr_1: arr});
    res.redirect('/');
});
server.listen(config.PORT, '127.0.0.1', () => console.log(`Start server listen :: 127.0.0.1 : ${config.PORT}`));