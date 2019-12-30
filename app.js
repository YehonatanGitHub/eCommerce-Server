var createError = require('http-errors');
var express = require('express');
var cors = require('cors')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var adminRouter = require('./routes/admin');
var usersRouter = require('./routes/users');
var shopRouter = require('./routes/shop');

var app = express();
app.use(cors())

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ecommerc', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log('connection is open');
});


// const users = require('../eCommerce-Server/models/users');

// const Schema = mongoose.Schema;


// const categorySchema = new Schema({
//   name: { type: String, required: true }
// });

// var Category = mongoose.model('Category', categorySchema);

// const category2 = new Category({
//   name: 'Wine & Drinks'
// });

// category2.save(function (err, category2) {
//   if (err) return console.error(err);
//   console.log(category2);
// });

// var userSchema = new mongoose.Schema({
//   f_name: {  type: String, required: true },
//   l_name: { type: String, required: true },
//   u_name: { type: String, required: true },
//   tz: { type: String, required: true },
//   password: { type: String, required: true },
//   city: { type: String, required: false },
//   street: { type: String, required: false }
// });

// var User = mongoose.model('User', userSchema);

// var admin = new User({
//   f_name: 'admin',
//   l_name: 'admin',
//   u_name: 'admin@admin.com',
//   tz: '123456789',
//   password: 'admin'
// });
// // console.log(admin.name);

// admin.save(function(err, admin) {
//   if (err) return console.error(err);
//   console.log(admin);
// });
// const Schema = mongoose.Schema;

// const productSchema = new Schema({
//   name: { type: String, required: true },
//   price: { type: Number, required: true },
//   imageUrl: { type: String, required: true }
// });

// var Product = mongoose.model('Product', productSchema);

// const product = new Product({
//   name: 'test product',
//   price: 100.99,
//   imageUrl: 'www.google.com'
// });

// product.save(function (err, firstProduct) {
//   if (err) return console.error(err);
//   console.log(firstProduct);
// });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);
// app.use('/users', usersRouter);
app.use('/shop', shopRouter);

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
