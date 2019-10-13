const express = require('express');
const bodyPars = require('body-parser');
const config = require('../config/config');
const database = require('../db/db');
const Post = require('../db/models/post');
const path = require('path');

const server = express();
server.set('view engine', 'ejs');
server.set('views', './src/views');
server.use(bodyPars.urlencoded({extended: true}));
server.use('/public',express.static( 'public'));

let count = 0;
let arr = ['ast', 'geo', 'mix'];

server.get('/', (req, res) => {
    Post.find({}).then(posts => {
        res.render('index', {posts: posts});
        // console.log('posts :: ', posts);
    })
    // res.render(`index`, {date_1: count, arr_1: arr});
});

server.get('/create', (req, res) => {
    res.render(`create`, {date_1: count});
});
// let ech;
server.post('/create', (req, res) => {
    let {title, body} = req.body;
    // console.log(':::', title, body)
    // arr.push(`${count} :: ${ech} `); ADD drop to DB
    Post.create({title, body,})
        .then(post => console.log('Success! post.id::', post.id))
        .catch(err => console.error('err ::', err));
    // res.render(`index`, {date_1: count, arr_1: arr}); instead this redirect('/')
    res.redirect('/');
});

module.exports = server;