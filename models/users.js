const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String, required: true },
    f_name: { type: String, required: true },
    l_name: { type: String, required: true },
    _id: { type: Number, required: true },
    password: { type: String, required: true },
    city: { type: String, required: false },
    street: { type: String, required: false },
    role: { type: Schema.Types.ObjectId, ref: "Role", required: true }
});


// var User = mongoose.model('User', userSchema);

// var admin = new User({
//     f_name: 'admin',
//     l_name: 'admin',
//     email: 'admin@admin.com',
//     _id: '123456789',
//     password: 'admin',
// role: '5de38cba61bb924c747f3271'  //customer
// });
// console.log(admin);

// admin.save(function (err, admin) {
//     if (err) return console.error(err);
//     console.log(admin);
// });

module.exports = mongoose.model('User', userSchema);
