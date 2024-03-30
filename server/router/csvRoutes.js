const Router = require('express').Router;
const csvController = require("../controllers/csvController");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const authMiddleware = require("../middlewares/auth-middleware");
const ImageModel = require('../models/ProductModels/image-model')

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now().toString() + ext);
  },
});

const router = new Router();

const upload = multer({
  storage: storage,
});

router.post("/create", authMiddleware, upload.single("file"), csvController.create);
router.get("/:id", async (req, res) => {
  try {
    const image = await ImageModel.findById(req.params.id);
    res.contentType(image.contentType);
    res.send(image.data);
  } catch (error) {
    res.status(404).send('Image not found');
  }
});

module.exports = router;
