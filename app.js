var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

/**
 * Routes handlers
 * Each route has a handler, that is responsible for 
 * registering handlers for POST PUT GET DELETE actions
 */
var routes = require('./server/routes/index');
var tournament = require('./server/routes/tournament');
var team = require('./server/routes/team');
var player = require('./server/routes/player');
var zone = require('./server/routes/zone');
var team_zone = require('./server/routes/team_zone');
var fixture = require('./server/routes/fixture');
var team_position = require('./server/routes/team_position');

var router = express.Router();

var app = express();

/**
 * DataBase Configuration
 */
var BotanicoDB = require('./server/models/BotanicoDB');
BotanicoDB.getInstance();
    
// view engine setup html
//http://www.makebetterthings.com/node-js/how-to-use-html-with-express-node-js/
app.set('views', path.join(__dirname, './client', 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './client', 'public')));

app.use('/', routes);
app.use('/tournament', tournament);
app.use('/team', team);
app.use('/player', player);
app.use('/zone', zone);
app.use('/team_zone', team_zone);
app.use('/fixture', fixture);
app.use('/team_position', team_position);

app.use(router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
