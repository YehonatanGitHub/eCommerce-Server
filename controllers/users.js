const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const roleSchema = new Schema({
  name: { type: String, required: true }
});
const Role = mongoose.model('Role', roleSchema);

exports.getUserRole = (req, res, next) => {
  Role.find(function(err, data) {
    if (err) return console.error(err);
    console.log(data);
    res.json({ data });
  });
};
