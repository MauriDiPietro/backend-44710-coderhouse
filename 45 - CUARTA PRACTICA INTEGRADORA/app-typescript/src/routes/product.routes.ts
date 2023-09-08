import { Router } from "express";
import * as controller from '../controllers/product.controllers';
import { validateGetProduct, validatePostProduct } from "../middlewares/validators/product.validator";

const router = Router();

router.get('/', controller.getAll)
router.get('/:id', validateGetProduct, controller.getById)
router.post('/', validatePostProduct,controller.create)
router.put('/:id', [validateGetProduct, validatePostProduct], controller.update)
router.delete('/:id', controller.remove)


export default router;