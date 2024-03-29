const {Schema, model} = require('mongoose');

const TypeSchema = new Schema({
  name: {type: String, required: true, unique: true},
})

module.exports = model('Type', TypeSchema);