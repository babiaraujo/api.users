import { Router } from 'express';
import { listUsers, createUser } from '../controllers/userController';

const router = Router();

router.get('/users', listUsers);
router.post('/users', createUser);

export default router;
