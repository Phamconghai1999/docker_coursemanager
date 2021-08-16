const express = require('express');
const bodyParser = require('body-parser');

const authRouter = require('./routes/auth');
const courseRouter = require('./routes/course');

const db = require('./config/db');
db.connect();

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.use('/api/auth', authRouter);
app.use('/api/course', courseRouter);

app.listen(3000, function () {
    console.log("Server listening on port 3000");
});

