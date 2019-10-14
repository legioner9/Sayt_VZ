const express = require('express');
const bodyPars = require('body-parser');
// const config = require('../config/config');
// const database = require('../db/db');
// const Post = require('../db/models/post');
const staticAsset = require('static-asset');
const path = require('path');

process.rand_ = function () {
    return Math.random().toString(36).slice(2)
};
const server = express();
server.set('view engine', 'ejs');
server.set('views', './src/views');
server.use(bodyPars.urlencoded({extended: true}));
server.use(staticAsset('node_modules/static-asset/lib'));
server.use('/public', express.static(path.join('public')));
server.use('/public', express.static('node_modules/jquery/dist'));

server.get('/', (req, res) => {
    res.render('index');
});

module.exports = server;