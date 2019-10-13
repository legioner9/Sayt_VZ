const express = require('express');
const bodyPars = require('body-parser');
// const config = require('../config/config');
// const database = require('../db/db');
// const Post = require('../db/models/post');
// const path = require('path');

const server = express();
server.set('view engine', 'ejs');
server.set('views', './src/views');
server.use(bodyPars.urlencoded({extended: true}));
server.use('/public', express.static('public'));
server.use('/public', express.static('node_modules/jquery/dist'));

server.get('/', (req, res) => {
    res.render('index');
});


module.exports = server;