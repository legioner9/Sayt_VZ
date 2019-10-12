const Schema = require('mongoose').Schema;
const mongoose = require('mongoose');
const shema = new Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
    }
});

module.exports = mongoose.model('Post', shema);

