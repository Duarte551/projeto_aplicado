const express = require('express');

const router = express.Router();

const controller = require('./controllers/productController');
const middleware = require('./middlewares/productMiddleware')

router.get('/product', controller.getAll);
router.post('/product', middleware.validateBody, controller.createProduct);
router.delete('/product/:id', controller.deleteProduct);
router.put('/product/:id', middleware.validateBody, controller.updateProduct);

module.exports = router;