const {Schema, model} = require('mongoose');

const OpticsSchema = new Schema({
  name: {type: String, required: true, unique: true},
})

module.exports = model('Optics', OpticsSchema);