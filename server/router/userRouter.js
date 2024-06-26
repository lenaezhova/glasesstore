const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const router = new Router();
const {body} = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware')
router.post('/registration',
                body('email').isEmail(),
                body('password').isLength({min: 3, max: 32}),
                userController.registration
);
router.post('/login', userController.login);
router.post('/add/favorite', userController.addFavorite);
router.get('/favorite', userController.getFavorite);
router.post('/add/basket', userController.addBasket);
router.post('/clear/basket', userController.clearBasket);
router.get('/basket', userController.getBasket);
router.post('/admin/login', userController.loginAdmin);
router.post('/update_user_information', userController.updateUserInformation);
router.post('/update_user_password', userController.updateUserPassword);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
// router.get('/refresh', userController.refresh);
router.post('/refresh', userController.refresh);
router.get('/user', authMiddleware, userController.getUser);
router.get('/users', authMiddleware, userController.getUsers);


module.exports = router;