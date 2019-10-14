const express = require('express');
const bodyPars = require('body-parser');
const config = require('../../config');
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

// catch 404 and forward to error handler
server.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
// eslint-disable-next-line no-unused-vars
server.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.render('error', {
        message: error.message,
        error: !config.IS_PRODUCTION ? error : {}
    });
    console.log('process.env 1 ::', process.env);
});
console.log('config ::', config);
console.log('process.env 0 ::', process.env);

module.exports = server;