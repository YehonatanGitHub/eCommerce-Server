const User = require('../models/users');
const Cart = require('../models/cart');
const jwt = require('jsonwebtoken');

exports.checkIfUser = (req, res, next) => {
  console.log(req.body);

  const tz = req.body.tz;
  const email = req.body.email;
  const password = req.body.password;
  const confirm = req.body.confirm;

  let userCheck = new User({
    // f_name: f_name,
    // l_name: l_name,
    email: email,
    tz: tz,
    password: password
    // role: '5de38cba61bb924c747f3271',
    // city: city,
    // street: confirm
  });

  User.exists({ tz: userCheck.tz })
    .then(result => {
      console.log(result);
      res.status(200).json({ result });
    })
    .catch(err => {
      console.log(err);
    });

  // console.log(userCheck.tz);
  // User.exists({ tz: userCheck.tz }, function (err, res) {

  //   let isUser = res;
  //   console.log(isUser);

  // });
};

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
      newCart
        .save()
        .then(cart => {
          console.log(cart);
          console.log('Created New Cart');
          const payload = {
            f_name: user.f_name,
            l_name: user.l_name,
            city: user.city,
            street: user.street
          };
          const token = jwt.sign(payload, 'thisIsTheSecretKey', { expiresIn: '1h' });
          res.status(200).json({ token });

          // res.status(200).json({
          //   message: 'NEW user and cart created'
          // });
        })
        .catch(err => {
          console.log(err);
        });
    })
    .catch(err => {
      console.log(err);
    });
};

// exports.getCart = (req, res, next) => {
//   Cart.find()
//     .populate('userId')
//     .then(cart => {
//       console.log(cart);
//       res.send(cart);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };

exports.login = (req, res, next) => {
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email }).exec(function(err, user) {
    if (err) {
      console.log(err);
    } else {
      if (!user) {
        res.status(401).send('User not found');
      } else if (user.password !== password) {
        res.status(401).send('Password incorrect');
      } else {
        console.log(user);
        Cart.findOne({ userId: user._id }, function(err, resad) {
          console.log(resad);
          const payload = {
            f_name: user.f_name,
            l_name: user.l_name,
            city: user.city,
            street: user.street,
            role: user.role,
            userId: user._id,
            cartId: resad._id
          };
          const token = jwt.sign(payload, 'thisIsTheSecretKey');
          res.status(200).json({ token });
        });

        // res.status(200).send(user);
      }
    }
  });
};
// email: { type: String, required: false },
// f_name: { type: String, required: false },
// l_name: { type: String, required: false },
// tz: { type: Number, required: true },
// password: { type: String, required: false },
// city: { type: String, required: false },
// street: { type: String, required: false },
// role: { type: Schema.Types.ObjectId, ref: "Role", required: false }
