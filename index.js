const express = require('express');
const server = express();
let count = 0;
server.get('/', (req, res) => {
    console.log('Run' , `${count++}`);
    res.send(`Hello You!))) , ${count++}`);
})
    .listen(3001);