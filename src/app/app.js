const express = require('express');
const bodyPars = require('body-parser');
const config = require('../config/config');
const database = require('../db/db');
const Post = require('../db/models/post');

const server = express();
server.set('view engine', 'ejs');
server.set('views', './src/views');
server.use(bodyPars.urlencoded({extended: true}));

let count = 0;
let arr = ['ast', 'geo', 'mix'];

server.get('/', (req, res) => {
    res.render(`index`, {date_1: count, arr_1: arr});
});

server.get('/create', (req, res) => {
    res.render(`create`, {date_1: count});
});
let ech;
server.post('/create', (req, res) => {
    console.log('req.body :: ', req.body)
    let title = req.body.title;
    let body = req.body.body;
    // arr.push(`${count} :: ${ech} `); ADD drop to DB
    Post.create({
        title,
        body,
    })
    // res.render(`index`, {date_1: count, arr_1: arr}); instead this redirect('/')
    res.redirect('/');
});

module.exports = server;