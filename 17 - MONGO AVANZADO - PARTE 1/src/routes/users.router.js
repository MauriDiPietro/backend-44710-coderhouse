import { Router } from 'express';
import * as controller from '../controllers/users.controllers.js';

const router = Router();

router.get('/all', controller.getAllCtr)

router.post('/file', controller.createFileCtr);

router.get('/', controller.getByNameCtr);

router.get('/:id', controller.getByIdCtr);

router.get('/email/:email', controller.getByEmailCtr);

export default router;