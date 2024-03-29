const UserService = require('../service/user-service')
const {validationResult} = require('express-validator');
const ApiError = require('../exceptions/api-error');

class ImageController{
  async upload(req, res, next){
    try {
      const {img} = req.body;
    } catch (e){
      next(e);
    }
  }
}

module.exports = new UserController();