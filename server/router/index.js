const Router = require('express');

const router = new Router();

const userRouter = require('./userRouter');
const eventRouter = require('./eventRouter');
const productRouter = require('./productRouter');
const csvRoutes = require('./csvRoutes');

router.use('/', userRouter);
router.use('/event', eventRouter);
router.use('/product', productRouter);
router.use('/image', csvRoutes);

module.exports = router;