var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override')

var indexRouter = require('./routes/index');
var skillsRouter = require('./routes/skills');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Mount middleware into the middleware/request pipeline
app.use(function (req, res, next) {
  console.log('Hello SEI!');
  // Add a time property to the res.locals object
  // The time property will then be accessible when rendering a view
  res.locals.time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  next();
});
app.use(logger('dev'));
// gives logs in terminal of HTTP request info 
app.use(express.json());
// needed for JSON data
app.use(express.urlencoded({ extended: false }));
// takes care of form data see req.body
// turn to extended to true before uncomment true before uncommenting below
app.use(methodOverride('_method')); 
//enable method override
// app.use(express.static('public')); server static assets from the public folder
app.use(cookieParser());
//for cookies 
app.use(express.static(path.join(__dirname, 'public')));

// start with path / Routes 
app.use('/', indexRouter);
app.use('/skills', skillsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
