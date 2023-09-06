import { Router } from 'express';
import ProductController from '../controllers/product.controllers.js';
const controller = new ProductController();

const router = Router();

router.get('/', controller.getAll);

router.get('/:id', controller.getById);

router.get('/dto/:id', controller.getProdById);

router.post('/', controller.create);

router.post('/dto', controller.createProd);

router.put('/:id', controller.update);

router.delete('/:id', controller.delete);

export default router;




