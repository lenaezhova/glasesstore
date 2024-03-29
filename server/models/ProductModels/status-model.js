const {Schema, model} = require('mongoose');

const StatusSchema = new Schema({
  name: {type: String, required: true, unique: true},
})

module.exports = model('Status', StatusSchema);