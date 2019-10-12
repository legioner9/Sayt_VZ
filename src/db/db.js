const config = require('../config/config');
const mongoose = require('mongoose');

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
};

module.exports = function () {
    return new Promise((resolve, reject) => {
        mongoose.Promise = global.Promise;
        mongoose.set('debug', true);
        mongoose.connection
            .on('error', (error) => reject(error))
            .on('close', () => console.log('|DB is closed|'))
            .on('open', () => resolve(mongoose.connections[0]));
        console.log(mongoose.connections[0]);
        mongoose.connect(config.mongoUrl, options);
    })
};
