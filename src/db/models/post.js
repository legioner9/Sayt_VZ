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
    },
    {
        timestamps: true
    });
shema.set('toJSON',{
    virtuals:true,
})
module.exports = mongoose.model('Post', shema);

