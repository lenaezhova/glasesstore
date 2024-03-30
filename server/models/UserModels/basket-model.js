const {Schema, model} = require('mongoose');

const BasketSchema = new Schema({
  productsId: {type: [String], required: true},
})

module.exports = model('Basket', BasketSchema);