// Import dependencies.
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Tell Mongoose to use ES6 promises.
mongoose.Promise = Promise;

// Initialize app.
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, 'public')));

var PORT = process.env.PORT || 3000;

// Favicon
app.use(favicon(path.join(__dirname, 'public/assets/img', 'favicon.png')));

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Import routes and give the server access to them.
var routes = require('./controllers/controller');
app.use('/', routes);

// Determine whether to use local or remote database connection.
var connectionString;

if (process.env.PORT) {
    connectionString = ' mongodb://heroku_l1sfhq6f:l8qjrksna8p8gjq44slb5or1i9@ds121464.mlab.com:21464/heroku_l1sfhq6f';
} else {
    connectionString = 'mongodb://localhost/nytreact';
}

// Start listening.
mongoose.connect(connectionString).then(function() {
    app.listen(PORT, function() {
        console.log('listening on port ' + PORT);
    });
});
