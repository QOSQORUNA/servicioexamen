var express = require('express');
var app = express();

const apiV1 = require('./api/v1/routes');

app.use('/api/v1/score', apiV1);


app.listen(3000, () => {
    console.log('Server running in 3000');
})