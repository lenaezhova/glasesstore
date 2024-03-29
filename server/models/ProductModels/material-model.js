const {Schema, model} = require('mongoose');

const MaterialSchema = new Schema({
  name: {type: String, required: true, unique: true},
})

module.exports = model('Material', MaterialSchema);