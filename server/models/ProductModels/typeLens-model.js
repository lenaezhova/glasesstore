const {Schema, model} = require('mongoose');

const TypeLensSchema = new Schema({
  name: {type: String, required: true, unique: true},
})

module.exports = model('TypeLens', TypeLensSchema);