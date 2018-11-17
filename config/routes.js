var express = require('express');
var routes = express.Router();

routes.use('/home', require('../controller/home'));    


module.exports = routes;