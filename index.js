const express = require('express');


const db = require('./config/db');
db.connect();

const app = express();


app.get('/', function (req, res) {
    res.send("HELLO");
}) 

app.listen(3000, function () {
    console.log("Server listening on port 3000");
});

