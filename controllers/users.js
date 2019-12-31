const User = require('../models/users');
const Cart = require('../models/cart');

exports.addNewUser = (req, res, next) => {
  console.log(req.body);
  const f_name = req.body.f_name;
  const l_name = req.body.l_name;
  const email = req.body.email;
  const tz = req.body.tz;
  const password = req.body.password;
  const city = req.body.city;
  const street = req.body.street;

  var user = new User({
    f_name: f_name,
    l_name: l_name,
    email: email,
    tz: tz,
    password: password,
    role: '5de38cba61bb924c747f3271',
    city: city,
    street: street
  });

  user
    .save()
    .then(result => {
      console.log(result);
      console.log('Created New User');
      // res.status(200).json({
      //   message: 'NEW User Saved'
      // });

      var newCart = new Cart({
        userId: result._id,
        creatDate: Date(),
        closed: false
      });
      newCart.save()
        .then(cart => {
          console.log(cart);
          console.log('Created New Cart');
          res.status(200).json({
            message: 'NEW user and cart created'
          });
        })
        .catch(err => {
          console.log(err);
        })

    })
    .catch(err => {
      console.log(err);
    })



};


exports.getCart = (req, res, next) => {
  Cart.find()
    .populate('userId')
    .then(cart => {
      console.log(cart);
      res.send(cart);
    })
    .catch(err => {
      console.log(err);
    });
};