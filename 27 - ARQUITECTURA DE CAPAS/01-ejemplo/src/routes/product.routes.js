import { Router } from "express";
import { saveProd, getAllProd } from "../controllers/product.controllers.js";

const router = Router();

router.post('/', saveProd);
router.get('/', getAllProd);

export default router;