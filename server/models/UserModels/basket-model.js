const {Schema, model} = require('mongoose');

const BasketSchema = new Schema({
    products: {type: [{
      productId: String,
      count: Number
    }], required: true},
})

module.exports = model('Basket', BasketSchema);