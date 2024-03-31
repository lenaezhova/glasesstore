const {Schema, model} = require('mongoose');

const BannersSchema = new Schema({
    title: {type: String, required: true, unique: true},
    productIds: {type: [String], required: true},
})

module.exports = model('Banners', BannersSchema);