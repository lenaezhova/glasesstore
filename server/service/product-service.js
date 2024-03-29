const EventModel = require('../models/event-model')
const ProductModel = require('../models/product-model')
const StatusModel = require('../models/ProductModels/status-model')
const BrandModel = require('../models/ProductModels/brand-model')
const TargetGroupModel = require('../models/ProductModels/targetGroup-model')
const ColorModel = require('../models/ProductModels/color-model')
const MaterialModel = require('../models/ProductModels/material-model')
const TypeModel = require('../models/ProductModels/type-model')
const TypeLensModel = require('../models/ProductModels/typeLens-model')
const DesignModel = require('../models/ProductModels/design-model')
const OpticsModel = require('../models/ProductModels/optics-model')
const ImagesModel = require('../models/ProductModels/image-model')
const {ObjectId} = require("mongodb");
const {Schema} = require('mongoose');
const ApiError = require('../exceptions/api-error');

class ProductService {
  async getOne(id) {
    const product  = await ProductModel.findById(id)
    return product
  }

  async create({
                 name,
                 price,
                 count,
                 description,
                 imgIds,
                 statusId,
                 brandId,
                 targetGroupId,
                 colorId,
                 materialId,
                 typeId,
                 typeLensId,
                 designId
               }){
    return await ProductModel.create({
      name,
      price,
      count,
      description,
      imgIds,
      statusId,
      brandId,
      targetGroupId,
      colorId,
      materialId,
      typeId,
      typeLensId,
      designId
    })
  }

  async getAll(){
    const products  = await ProductModel.find()
    return [
      ...products
    ]
  }

  async createStatus(name) {
    const statusDto = await StatusModel.findOne({name})
    if (statusDto)
        throw ApiError.BadRequest(`Статуc уже существует`)
    const res = await StatusModel.create({name});
    console.log(res);
    return res;
  }

  async getAllStatus() {
    const res = await StatusModel.find();
    return res;
  }

  async createBrand(name) {
    const brandDto = await BrandModel.findOne({name})
    if (brandDto)
      throw ApiError.BadRequest(`Брэнд уже существует`)
    return await BrandModel.create({name});
  }

  async getAllBrand() {
    const res = await BrandModel.find();
    return res;
  }

  async createTargetGroup(name) {
    const targetGroupDto = await TargetGroupModel.findOne({name})
    if (targetGroupDto)
      throw ApiError.BadRequest(`Таргетная группа уже существует`)
    return await TargetGroupModel.create({name});
  }

  async getAllTargetsGroup() {
    const res = await TargetGroupModel.find();
    return res;
  }

  async createColor(name) {
    const colorDto = await ColorModel.findOne({name})
    if (colorDto)
      throw ApiError.BadRequest(`Цвет уже существует`)
    return await ColorModel.create({name});
  }

  async getAllColor() {
    const res = await ColorModel.find();
    return res;
  }

  async createMaterial(name) {
    const materialDto = await MaterialModel.findOne({name})
    if (materialDto)
      throw ApiError.BadRequest(`Материал уже существует`)
    return await MaterialModel.create({name});
  }

  async getAllMaterial() {
    const res = await MaterialModel.find();
    return res;
  }

  async createType(name) {
    const typeDto = await TypeModel.findOne({name})
    if (typeDto)
      throw ApiError.BadRequest(`Тип уже существует`)
    return await TypeModel.create({name});
  }

  async getAllType() {
    const res = await TypeModel.find();
    return res;
  }

  async createTypeLens(name) {
    const typeLensDto = await TypeLensModel.findOne({name})
    if (typeLensDto)
      throw ApiError.BadRequest(`Тип линз уже существует`)
    return await TypeLensModel.create({name});
  }

  async getAllTypeLens() {
    const res = await TypeLensModel.find();
    return res;
  }

  async createDesign(name) {
    const designDto = await DesignModel.findOne({name})
    if (designDto)
      throw ApiError.BadRequest(`Дезайн уже существует`)
    return await DesignModel.create({name});
  }

  async getAllDesign() {
    const res = await DesignModel.find();
    return res;
  }

  async createOptics(name) {
    const opticsDto = await OpticsModel.findOne({name})
    if (opticsDto)
      throw ApiError.BadRequest(`Оптика уже существует`)
    return await OpticsModel.create({name});
  }

  async getAllOptics() {
    const res = await OpticsModel.find();
    return res;
  }

  async updateProduct(id) {
    const product = await ProductModel.findById(id);
    await product.save();
  }

  async deleteOne(id){
    await ProductModel.deleteOne({_id: new ObjectId(id)})
  }
}
module.exports = new ProductService();