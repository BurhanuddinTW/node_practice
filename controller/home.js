var express = require('express');
var routes = express.Router();

routes.get('/', function(req, res) {
    var pageData = {
        pageTitle : "Index Page",
        pageContent : "This is index page"
    };
    res.render('layout', pageData);
});

module.exports = routes;