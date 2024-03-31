const EventService = require('../service/event-service')
const ProductService = require('../service/product-service')
const UserService = require("../service/user-service");

class ProductController{
  async create(req, res, next){
    try {
      const {name,
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
        designId} = req.body;
      const eventData = await ProductService.create({
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
      });
      return res.json(eventData)
    } catch (e){
      next(e);
    }
  }


  async createStatus(req, res, next){
    try{
      const {name} = req.body;
      console.log(name);
      const status = await ProductService.createStatus(name);
      return res.json(status)
    } catch (e){
      console.log(e);
      next(e)
    }
  }

  async addInBanner(req, res, next) {
    try {
      const {title, productIds} = req.body;
      const users = await ProductService.addInBanner(title, productIds);
      return res.json(users);
    } catch (e) {
      next(e);
    }
  }

  async getBanner(req, res, next) {
    try {
      const {title} = req.query;
      const users = await ProductService.getBanner(title);
      return res.json(users);
    } catch (e) {
      next(e);
    }
  }

  async getAllStatus(req, res, next){
    try{
      const results = await ProductService.getAllStatus();
      return res.json(results)
    } catch (e){
      next(e)
    }
  }

  async createBrand(req, res, next){
    try{
      const {name} = req.body;
      const brand = await ProductService.createBrand(name);
      return res.json(brand)
    } catch (e){
      next(e)
    }
  }

  async getAllBrand(req, res, next){
    try{
      const results = await ProductService.getAllBrand();
      return res.json(results)
    } catch (e){
      next(e)
    }
  }

  async createTargetGroup(req, res, next){
    try{
      const {name} = req.body;
      const targetGroup = await ProductService.createTargetGroup(name);
      return res.json(targetGroup)
    } catch (e){
      next(e)
    }
  }

  async getAllTargetGroup(req, res, next){
    try{
      const results = await ProductService.getAllTargetsGroup();
      return res.json(results)
    } catch (e){
      next(e)
    }
  }

  async createColor(req, res, next){
    try{
      const {name} = req.body;
      const color = await ProductService.createColor(name);
      return res.json(color)
    } catch (e){
      next(e)
    }
  }

  async getAllColor(req, res, next){
    try{
      const results = await ProductService.getAllColor();
      return res.json(results)
    } catch (e){
      next(e)
    }
  }

  async createMaterial(req, res, next){
    try{
      const {name} = req.body;
      const material = await ProductService.createMaterial(name);
      return res.json(material)
    } catch (e){
      next(e)
    }
  }

  async getAllMaterial(req, res, next){
    try{
      const results = await ProductService.getAllMaterial();
      return res.json(results)
    } catch (e){
      next(e)
    }
  }

  async createType(req, res, next){
    try{
      const {name} = req.body;
      const type = await ProductService.createType(name);
      return res.json(type)
    } catch (e){
      next(e)
    }
  }

  async getAllType(req, res, next){
    try{
      const results = await ProductService.getAllType();
      return res.json(results)
    } catch (e){
      next(e)
    }
  }

  async createTypeLens(req, res, next){
    try{
      const {name} = req.body;
      const typeLens = await ProductService.createTypeLens(name);
      return res.json(typeLens)
    } catch (e){
      next(e)
    }
  }

  async getAllTypeLens(req, res, next){
    try{
      const results = await ProductService.getAllTypeLens();
      return res.json(results)
    } catch (e){
      next(e)
    }
  }

  async createDesign(req, res, next){
    try{
      const {name} = req.body;
      const design = await ProductService.createDesign(name);
      return res.json(design)
    } catch (e){
      next(e)
    }
  }

  async getAllDesign(req, res, next){
    try{
      const results = await ProductService.getAllDesign();
      return res.json(results)
    } catch (e){
      next(e)
    }
  }

  async createOptics(req, res, next){
    try{
      const {name} = req.body;
      const optics = await ProductService.createOptics(name);
      return res.json(optics)
    } catch (e){
      next(e)
    }
  }

  async getAllOptics(req, res, next){
    try{
      const results = await ProductService.getAllOptics();
      return res.json(results)
    } catch (e){
      next(e)
    }
  }

  async getAll(req, res, next){
    try{
      const eventsData = await ProductService.getAll();
      return res.json(eventsData)
    } catch (e){
      next(e)
    }
  }

  async getOne(req, res, next){
    try{
      const {id} = req.query;
      const product = await ProductService.getOne(id);
      return res.json(product)
    } catch (e){
      next(e)
    }
  }

  async update(req, res, next){
    try{
      const {id} = req.params;
      // const {oldEvent, newEvent} = req.body;
      const response = await ProductService.updateProduct(id);
      return res.json(response);
    } catch (e) {
      next(e)
    }
  }
  async deleteOne(req, res, next){
    try{
      const {id} = req.params;
      const response = await ProductService.deleteOne(id);
      return res.json(response);
    } catch (e) {
      next(e)
    }
  }
}

module.exports = new ProductController();