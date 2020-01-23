const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: false },
  f_name: { type: String, required: false },
  l_name: { type: String, required: false },
  tz: { type: Number, required: true },
  password: { type: String, required: false },
  city: { type: String, required: false },
  street: { type: String, required: false },
  role: { type: Schema.Types.ObjectId, ref: 'Role', required: false }
});

// var User = mongoose.model('User', userSchema);

// var admin = new User({
//     f_name: 'admin',
//     l_name: 'admin',
//     email: 'admin@admin.com',
//     tz: '123456789',
//     password: 'admin',
//     role: '5de3894a38512832c47e4670'
// });

// admin.save(function (err, admin) {
//     if (err) return console.error(err);
//     console.log(admin);
// });

module.exports = mongoose.model('User', userSchema);
