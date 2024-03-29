const fs = require("fs");
const ImageModel = require("../models/ProductModels/image-model");
const {getImageUrl} = require('../helpers/getImageUrl');

exports.create = async (req, res) => {
  try {
    const image = req.file;
    if (image) {
      let newImage = new ImageModel({
        data: fs.readFileSync(image.path),
        contentType: image.mimetype,
      });
      await newImage.save();

      res.json({ success: 1, fileId: newImage._id});
    }
  } catch (error) {
    res.status(400).json(error);
  }
};
