var express = require('express');
var app = express();
var routes = require('./config/routes');
const port = 3000;

app.set('view engine', 'ejs');


app.use(routes);

app.get('/', function(req, res) {
    var pageData = {
        pageTitle : "Home",
        pageContent : "Hello World!"
    };
    res.render('layout', pageData);
});

app.listen(port, function(req, res) {
    console.log('Server is running on port : ' + port);
});