const {Schema, model} = require('mongoose');

const TargetGroupSchema = new Schema({
  name: {type: String, required: true, unique: true},
})

module.exports = model('TargetGroup', TargetGroupSchema);