var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

const apiV1 = require('./api/v1/routes');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


app.use('/api/v1/score', apiV1);


// app.listen(3000, () => {
//     console.log('Server running in 3000');
// })
app.listen(port, function() {
    console.log('Servidorciado en el puerto 8080.');
   });