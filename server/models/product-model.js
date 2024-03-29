const {Schema, model} = require('mongoose');

const ProductSchema = new Schema({
  name: {type: String, required: true},
  price: {type: Number, required: true},
  count: {type: Number, required: true},
  description: {type: String, required: false}, // описание
  opticsId: {type: Schema.Types.ObjectId, required: false, ref: 'Optics'},  //дизайн линз
  imgIds: {type: [Schema.Types.ObjectId], required: false, ref: 'Image'}, // картинки
  statusId: {type: Schema.Types.ObjectId, required: false, ref: 'Status'}, // в налачии или под заказ
  brandId: {type: Schema.Types.ObjectId, required: false, ref: 'Brand'}, // бренд
  targetGroupId: {type: Schema.Types.ObjectId, required: false, ref: 'TargetGroup'}, //целевая группа
  colorId: {type: Schema.Types.ObjectId, required: false, ref: 'Color'}, // цвет
  materialId: {type: Schema.Types.ObjectId, required: false, ref: 'Material'}, // материал
  typeId: {type: Schema.Types.ObjectId, required: false, ref: 'Type'}, // тип
  typeLensId: {type: Schema.Types.ObjectId, required: false, ref: 'TypeLens'},  //тип линз
  designId: {type: Schema.Types.ObjectId, required: false, ref: 'Design'},  //дизайн линз
})

module.exports = model('Product', ProductSchema);