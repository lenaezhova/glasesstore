const {Schema, model} = require('mongoose');

const ImageSchema = new Schema({
  data: {type: Buffer, required: false},
  contentType: {type: String, required: false}
})

module.exports = model('Image', ImageSchema);