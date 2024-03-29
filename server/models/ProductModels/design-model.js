const {Schema, model} = require('mongoose');

const DesignSchema = new Schema({
  name: {type: String, required: true, unique: true},
})

module.exports = model('Design', DesignSchema);