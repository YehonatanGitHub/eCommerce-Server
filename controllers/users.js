const User = require('../models/users');

exports.addNewUser = (req, res, next) => {
  console.log(req.body);
  const f_name = req.body.f_name;
  const l_name = req.body.l_name;
  const email = req.body.email;
  const id = req.body.id;
  const password = req.body.password;
  const city = req.body.city;
  const street = req.body.street;

  var user = new User({
    f_name: f_name,
    l_name: l_name,
    email: email,
    _id: id,
    password: password,
    role: '5de38cba61bb924c747f3271',
    city: city,
    street: street
  });

  user
    .save()
    .then(result => {
      // console.log(result);
      console.log('Created New User');
      res.status(200).json({
        message: 'NEW User Saved'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

