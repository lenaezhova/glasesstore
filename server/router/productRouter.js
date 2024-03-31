const Router = require('express').Router;
const ProductController = require('../controllers/product-controller');
const router = new Router();
const adminMiddleware = require('../middlewares/admin-middleware');
const userController = require('../controllers/user-controller');

router.get('/all', ProductController.getAll);
router.get('/one', ProductController.getOne);
router.get('/users', adminMiddleware, userController.getUsers);
router.post('/create',adminMiddleware, ProductController.create);
router.post('/add_banner',adminMiddleware, ProductController.addInBanner);
router.get('/get_banner', ProductController.getBanner);
router.post('/update/:id',adminMiddleware, ProductController.update);
router.delete('/deleteOne/:id',adminMiddleware, ProductController.deleteOne);


router.get('/all/optics', ProductController.getAllOptics);
router.get('/all/status', ProductController.getAllStatus);
router.get('/all/design', ProductController.getAllDesign);
router.get('/all/brand', ProductController.getAllBrand);
router.get('/all/color', ProductController.getAllColor);
router.get('/all/material', ProductController.getAllMaterial);
router.get('/all/targetGroup', ProductController.getAllTargetGroup);
router.get('/all/typeLens', ProductController.getAllTypeLens);
router.get('/all/type', ProductController.getAllType);

router.post('/create/status',adminMiddleware, ProductController.createStatus);
router.post('/create/optics',adminMiddleware, ProductController.createOptics);
router.post('/create/design',adminMiddleware, ProductController.createDesign);
router.post('/create/brand',adminMiddleware, ProductController.createBrand);
router.post('/create/color',adminMiddleware, ProductController.createColor);
router.post('/create/material',adminMiddleware, ProductController.createMaterial);
router.post('/create/targetGroup',adminMiddleware, ProductController.createTargetGroup);
router.post('/create/typeLens',adminMiddleware, ProductController.createTypeLens);
router.post('/create/type',adminMiddleware, ProductController.createType);

module.exports = router;