const app = require('./src/app/app');
const db = require('./src/db/db');
const config = require('./config');

db()
    .then(info => {
        console.log(`Connect to info :: host : ${info.host} port : ${info.port} name : ${info.name}`);
        app.listen(config.PORT, '127.0.0.1', () => console.log(`Start server listen :: 127.0.0.1 : ${config.PORT}`));
    })
    .catch(err => {
        console.error('ERR DATABASE ::', err);
        process.exit = 1;
    });


