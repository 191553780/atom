var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');

var indexRouter = require('./routes/index');
var infoRouter = require('./routes/info');
var hontoRouter = require('./routes/honto');
var contactRouter = require('./routes/contact');
var bookRouter = require('./routes/book');
var storesRouter = require('./routes/stores');
var shopRouter = require('./routes/shop');
var tashinamuRouter = require('./routes/tashinamu');
var loginRouter = require('./routes/login');
var insertUserRouter = require('./routes/insertUser');
var itemsRouter = require('./routes/items');
var goodsRouter = require('./routes/goods');

var productsRouter = require('./routes/products');
var teacraftRouter = require('./routes/teacraft');
var archivestRouter = require('./routes/archives');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs',ejs.__express);
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/index', indexRouter);
app.use('/info', infoRouter);
app.use('/honto', hontoRouter);
app.use('/contact', contactRouter);
app.use('/book', bookRouter);
app.use('/stores', storesRouter);
app.use('/shop', shopRouter);
app.use('/tashinamu', tashinamuRouter);
app.use('/login', loginRouter);
app.use('/insertUser', insertUserRouter);
app.use('/items', itemsRouter);
app.use('/goods', goodsRouter);

app.use('/teacraft', teacraftRouter);
app.use('/products', productsRouter);
app.use('/archives', archivestRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
