const express = require('express');
const server = express();
server.set('view engine', 'ejs');
server.set('views', './src/views');

let count = 0;
server.get('/', (req, res) => {
    console.log('Run', `${count++}`);
    console.log('{date_1 : count}' , {date_1 : count})
    res.render(`index`,{date_1 : count});
})
    .listen(3001);