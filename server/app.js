var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var cors = require('cors');
var settings = require('./settings');
var Guide = require('./models/guides');
var mongoConnect = "mongodb://" + settings.private.mongo.db_user +":"
                                + settings.private.mongo.db_password + "@"
                                + settings.private.mongo.url + "/"
                                + settings.private.mongo.db;

mongoose.connect(mongoConnect);
var db = mongoose.connection;

// Init App
var app = express();

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

// Routes
require('./routes')(app, Guide);

// Set Port
app.set('port', (process.env.PORT || 2729));

app.listen(app.get('port'), function(){
	console.log('Server started on port ' + app.get('port'));
});
