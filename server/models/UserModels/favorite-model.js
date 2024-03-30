const {Schema, model} = require('mongoose');

const FavoriteSchema = new Schema({
  productsId: {type: [String], required: true},
})

module.exports = model('Favorite', FavoriteSchema);