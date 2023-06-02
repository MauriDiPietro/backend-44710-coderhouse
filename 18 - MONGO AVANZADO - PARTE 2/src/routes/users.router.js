import { Router } from 'express';
import * as controller from '../controllers/users.controllers.js';

const router = Router();

router.post('/file', controller.createFileCtr);

router.get('/', controller.getAllUsers);

router.get('/aggregation1', controller.aggregation1);

router.put('/updatedocs', controller.updateManyUsers);

export default router;