const mongoose = require('mongoose');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log('we\'re connected!')
});
mongoose.connect('mongodb://localhost/test', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(info => {
        console.log(`Connected DataBase to ${info.host} : ${info.port} : ${info.name}`);
        // server.listen(config.PORT, '127.0.0.1', () => console.log(`Start server listen :: 127.0.0.1 : ${config.PORT}`));
    })
    .catch(() => {
        console.error('Connection to DB is faled(((');
        process.exit = 1;
    });
