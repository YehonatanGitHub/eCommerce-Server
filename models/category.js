const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: { type: String, required: true }
});

// var Category = mongoose.model('Category', categorySchema);

// const Category = new Category({
//     name: 'Milk & Eggs'
// });

// category.save(function (err, Category) {
//     if (err) return console.error(err);
//     console.log(Category);
// });
// const Product = mongoose.model('Role', roleSchema);

module.exports = mongoose.model('Category', categorySchema);
