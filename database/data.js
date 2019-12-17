var mongoose = require('mongoose');

// var Family1 = new Family({ name: 'David', nickname: Dav, description: Dad });
// console.log(Family1);

// Family1.save(function(err, Family1) {
//   if (err) return console.error(err);
//   console.log(Family1);

//   var Team1 = new Team({ name: 'Makabi', wins: 1664, manager: Manager1._id });

//   Team1.save(function(err, Team1) {
//     if (err) return console.error(err);
//     console.log(Team1);
//   });
// });

//Export function to create "SomeModel" model class
module.exports = mongoose.model('Family', FamilySchema);